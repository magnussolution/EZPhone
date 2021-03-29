/**
 * Classe que define a combo de "trunkcombobackup"
 *
 * =======================================
 * ###################################
 * MagnusBilling
 *
 * @package MagnusBilling
 * @author  Adilson Leffa Magnus.
 * @copyright   Todos os direitos reservados.
 * ###################################
 * =======================================
 * MagnusSolution.com <info@magnussolution.com>
 * 04/07/2012
 */

Ext.define('CallCenter.view.trunk.ComboBackup', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.trunkcombobackup',
    name: 'failover_trunk',
    fieldLabel: t('failover_trunk'),
    displayField: 'trunkcode',
    valueField: 'id',
    value: 0,
    limitParam: undefined,
    extraValues: [{
        id: 0,
        trunkcode: t('undefined')
    }],
    //permite buscar sem limite de tronco backup
    initComponent: function() {
        var me = this;

        me.store =Ext.create('CallCenter.store.Trunk', {
            proxy: {
                type: 'uxproxy',
                module: 'trunk',
                limitParam: undefined
            }
        });
        me.on('render', me.loadStore, me);

        me.callParent(arguments);
    },

    loadStore: function(combo) {
        var me = this,
            store = combo.store,
            record;

        store.load({
            callback: function() {
                if (me.extraValues.length) {
                    store.insert(0, me.extraValues);
                }
            }
        });
    }
});
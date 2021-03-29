/**
 * Classe que define a combo de "CampaignCombo"
 *
 * MagnusSolution.com <info@magnussolution.com>  
 * 28/10/2012
 */
Ext.define('CallCenter.view.campaign.Combo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.campaigncombo',
    name: 'id_campaign',
    fieldLabel: t('campaign'),
    displayField: 'name',
    valueField: 'id',
    forceSelection: true,
    editable: false,
    value: 0,
    limitParam: undefined,
    extraValues: [{
        id: 0,
        name: t('undefined')
    }],
    //permite buscar sem limite de tronco backup
    initComponent: function() {
        var me = this;
        me.store = Ext.create('CallCenter.store.Campaign', {
            proxy: {
                type: 'uxproxy',
                module: 'campaign',
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
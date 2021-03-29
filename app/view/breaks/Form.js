/**
 * Classe que define o form de "Campaign"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 28/10/2012
 */
Ext.define('CallCenter.view.breaks.Form', {
    extend: 'Ext.ux.form.Panel',
    alias: 'widget.breaksform',
    initComponent: function() {
        var me = this;
        me.items = [{
            name: 'name',
            fieldLabel: t('Name')
        }, {
            xtype: 'booleancombo',
            name: 'status',
            fieldLabel: t('status')
        }, {
            xtype: 'noyescombo',
            name: 'mandatory',
            fieldLabel: t('Mandatory')
        }, {
            name: 'start_time',
            fieldLabel: t('start_time'),
            value: '12:00',
            xtype: 'timefield',
            format: 'H:i',
            altFormats: 'H:i',
            forceSelection: true,
            editable: true,
            listeners: {
                focus: function(combo) {
                    combo.expand();
                }
            },
            increment: 5,
            hidden: true,
            anchor: '100%'
        }, {
            name: 'stop_time',
            fieldLabel: t('stop_time'),
            value: '13:00',
            xtype: 'timefield',
            increment: 5,
            format: 'H:i',
            altFormats: 'H:i',
            forceSelection: true,
            editable: true,
            listeners: {
                focus: function(combo) {
                    combo.expand();
                }
            },
            hidden: true,
            anchor: '100%'
        }, {
            xtype: 'numberfield',
            name: 'maximum_time',
            value: '',
            allowBlank: true,
            fieldLabel: t('Tempo Maximo em Minutos')
        }];
        me.callParent(arguments);
    }
});
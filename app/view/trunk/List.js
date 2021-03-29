/**
 * Classe que define a lista de "Trunk"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 25/06/2012
 */
Ext.define('CallCenter.view.trunk.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.trunklist',
    store: 'Trunk',
    fieldSearch: 'trunkcode',
    initComponent: function() {
        var me = this;
        me.buttonUpdateLot = false;
        me.columns = [{
            header: t('trunkcode'),
            dataIndex: 'trunkcode',
            flex: 3
        }, {
            header: t('add') + ' ' + t('prefix'),
            dataIndex: 'trunkprefix',
            flex: 2
        }, {
            header: t('remove') + ' ' + t('prefix'),
            dataIndex: 'removeprefix',
            flex: 2
        }, {
            header: t('host'),
            dataIndex: 'host',
            flex: 2
        }, {
            xtype: 'templatecolumn',
            tpl: '{idProviderprovider_name}',
            header: t('provider'),
            dataIndex: 'id_provider',
            comboFilter: 'providercombo',
            flex: 2
        }, {
            header: t('secondusedreal'),
            renderer: Helper.Util.formatsecondsToTime,
            dataIndex: 'secondusedreal',
            flex: 3
        }, {
            header: t('status'),
            dataIndex: 'status',
            renderer: Helper.Util.formatBooleanActive,
            comboRelated: 'booleancombo',
            flex: 1,
            filter: {
                type: 'list',
                options: [
                    [1, t('active')],
                    [0, t('inactive')]
                ]
            }
        }, {
            header: t('creationdate'),
            renderer: Helper.Util.formatDateTime,
            dataIndex: 'creationdate',
            flex: 3
        }];
        me.callParent(arguments);
    }
});
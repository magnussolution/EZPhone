/**
 * Classe que define a lista de "PhoneNumber"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 19/09/2012
 */
Ext.define('CallCenter.view.massiveCallReport.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.massivecallreportlist',
    store: 'MassiveCallReport',
    initComponent: function() {
        var me = this,
            columns = [];
        me.columns = [{
            header: t('ID'),
            dataIndex: 'id',
            flex: 1
        }, {
            header: t('date'),
            renderer: Helper.Util.formatDateTime,
            dataIndex: 'dial_date',
            flex: 5
        }, {
            header: t('number'),
            dataIndex: 'number',
            flex: 4,
            menuDisabled: !App.user.isAdmin
        }, {
            header: t('name'),
            dataIndex: 'name',
            flex: 4
        }, {
            xtype: 'templatecolumn',
            tpl: '{idUserusername}',
            header: t('user'),
            dataIndex: 'id_user',
            comboFilter: 'usercombo',
            filter: {
                type: 'string',
                field: 'pkg_user.username'
            },
            flex: 3,
            hidden: !App.user.isAdmin,
            hideable: App.user.isAdmin
        }, {
            text: t('res_dtmf'),
            dataIndex: 'res_dtmf',
            flex: 3
        }, {
            text: t('queue_status'),
            dataIndex: 'queue_status',
            flex: 3
        }];
        me.callParent(arguments);
    }
});
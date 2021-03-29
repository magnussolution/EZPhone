/**
 * Class to define list of "GroupUser"
 *
 * Adilson Magnus <info@magnussolution.com> 
 * 15/04/2013
 */
Ext.define('CallCenter.view.groupUser.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.groupuserlist',
    store: 'GroupUser',
    initComponent: function() {
        var me = this;
        me.buttonUpdateLot = false;
        me.allowPrint = false;
        me.buttonCsv = false;
        me.columns = [{
            text: t('Id'),
            dataIndex: 'id',
            hidden: true,
            hideable: App.user.isAdmin
        }, {
            text: t('Name'),
            dataIndex: 'name'
        }, {
            xtype: 'templatecolumn',
            tpl: '{idUserTypename}',
            header: t('User Type'),
            renderer: function(value) {
                value = value == 1 ? t('admin') : value == 2 ? t('agent') : t('user');
                return value
            },
            dataIndex: 'id_user_type',
            comboFilter: 'usertypecombo'
        }];
        me.callParent(arguments);
    }
});
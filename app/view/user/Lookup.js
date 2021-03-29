/**
 * Class to define lookup of "user"
 *
 * Adilson Magnus <info@magnussolution.com> 
 * 05/09/2014
 */

Ext.define('CallCenter.view.user.Lookup', {
    extend      : 'Ext.ux.form.field.Lookup',
    alias       : 'widget.userlookup',
    name        : 'id_user',
    fieldLabel  : t('User'),
    forceSelection: true,
    editable: false,
    displayField: 'idUserusername',
    displayFieldList: 'username',
    gridConfig  : {
        xtype       : 'userlist',
        fieldSearch : 'username',
        columns     : [{
            header     : t('username'),
            dataIndex  : 'username',
            flex       : 2
        },{
            header     : t('name'),
            dataIndex  : 'name',
            flex       : 2
        },{
            header     : t('lastname'),
            dataIndex  : 'lastname',
            flex       : 2
        }]
    }
});
/**
 * Class to define form to "GroupUser"
 *
 * Adilson Magnus <info@magnussolution.com> 
 * 15/04/2013
 */
Ext.define('CallCenter.view.groupUser.Form', {
    extend: 'Ext.ux.form.Panel',
    requires: ['Ext.ux.form.field.Permission'],
    alias: 'widget.groupuserform',
    items: [{
        name: 'id',
        fieldLabel: t('Id'),
        disabled: true,
        hidden: true
    }, {
        name: 'name',
        fieldLabel: t('Name'),
        maxLength: 100
    }, {
        xtype: 'usertypecombo'
    }, {
        xtype: 'permissionfield',
        hideLabel: true,
        anchor: '100% ' + (!Ext.Boot.platformTags.desktop ? '82%' : window.isThemeNeptune ? '87%' : '89%'),
        allowBlank: true
    }]
});
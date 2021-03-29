/**
 * Class to define tag of "groupUser"
 *
 * Adilson Magnus <info@magnussolution.com> 
 * 15/04/2013
 */
 
Ext.define('CallCenter.view.groupUser.Tag', {
    extend      : 'Ext.form.field.Tag',
    alias       : 'widget.groupusertag',
    name        : 'id_group',
    fieldLabel  : t('GroupUser'),
    displayField: 'name',
    valueField  : 'id',
    store		: Ext.create('CallCenter.store.GroupUser', {
    	proxy : {
			type  : 'uxproxy',
			module: 'groupUser',
			limitParam: undefined
		}
    })
});
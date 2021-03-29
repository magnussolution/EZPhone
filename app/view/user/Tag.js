/**
 * Class to define tag of "phoneBook"
 *
 * Adilson Magnus <info@magnussolution.com> 
 * 15/04/2013
 */
 
Ext.define('CallCenter.view.user.Tag', {
    extend      : 'Ext.form.field.Tag',
    alias       : 'widget.usertag',
    name        : 'id_user',
    fieldLabel  : t('username'),
    displayField: ['username'],
    valueField  : 'id',
    store		: Ext.create('CallCenter.store.User', {
    	proxy : {
			type  : 'uxproxy',
			module: 'user',
			limitParam: undefined
		}
    })
});
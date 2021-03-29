/**
 * Class to define combo of "groupUser"
 *
 * Adilson Magnus <info@magnussolution.com> 
 * 15/04/2013
 */

Ext.define('CallCenter.view.user.Combo', {
    extend      : 'Ext.form.field.ComboBox',
    alias       : 'widget.usercombo',
    name        : 'id_user',
    fieldLabel  : t('username'),
    displayField: 'username',
    valueField  : 'id',
    store		: Ext.create('CallCenter.store.User', {
    	proxy : {
			type  : 'uxproxy',
			module: 'user',
			limitParam: undefined
		}
    })
});
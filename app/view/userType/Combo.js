/**
 * Class to define combo of "groupUser"
 *
 * MagnusBilling <info@magnusbilling.com>
 * 15/04/2013
 */

Ext.define('CallCenter.view.userType.Combo', {
    extend      : 'Ext.form.field.ComboBox',
    alias       : 'widget.usertypecombo',
    name        : 'id_user_type',
    fieldLabel  : t('userType'),
    displayField: 'name',
    valueField  : 'id',
    store		:Ext.create('CallCenter.store.UserType', {
		proxy : {
			type  : 'uxproxy',
			module: 'userType',
			limitParam: undefined
		}
	})
});
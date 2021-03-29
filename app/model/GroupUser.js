/**
 * Class define the model "GroupUser"
 *
 * Adilson Magnus <info@magnussolution.com> 
 * 15/04/2013
 */

Ext.define('CallCenter.model.GroupUser', {
	extend: 'Ext.data.Model',
	fields: [
		{name: 'id', type: 'int'},
		'name',
		{name: 'id_user_type', type: 'int'},
		'idUserTypename',
		'id_module'
	],
	proxy : {
		type  : 'uxproxy',
		module: 'groupUser'
	}
});
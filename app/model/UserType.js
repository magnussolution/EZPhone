/**
 * Class define the model "GroupModule"
 *
 * MagnusBilling <info@magnusbilling.com>
 * 15/04/2013
 */

Ext.define('CallCenter.model.UserType', {
	extend: 'Ext.data.Model',
	fields: [
		{name: 'id', type: 'int'},
		'name'
	],
	proxy : {
		type  : 'uxproxy',
		module: 'userType'
	}
});
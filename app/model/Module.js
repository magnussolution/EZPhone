/**
 * Class define the model "Module"
 *
 * Adilson Magnus <info@magnussolution.com> 
 * 15/04/2013
 */

Ext.define('CallCenter.model.Module', {
	extend: 'Ext.data.Model',
	fields: [
		{name: 'id', type: 'int'},
		{name: 'text', convert: function(value) {
	    		return (value.indexOf('t(') !== -1) ? eval(value) : value;
	    		}
	    	},
		'module',
		'icon_cls',
		{name: 'id_module', type: 'int', useNull: true},
		'idModuletext'
	],
	proxy : {
		type  : 'uxproxy',
		module: 'module'
	}
});
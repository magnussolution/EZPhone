/**
 * Classe que define a model "Provider"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 16/07/2012
 */

Ext.define('CallCenter.model.Provider', {
	extend    : 'Ext.data.Model',
	fields    : [
		{name: 'id', type: 'int'},
        	{name: 'provider_name', type: 'string'},
		{name: 'creationdate', type: 'date', dateFormat: 'Y-m-d H:i:s'},
        	{name: 'description', type: 'string'},
		{name: 'credit', type: 'number'}
	],
	proxy	  : {
		type  : 'uxproxy',
		module: 'Provider'
	}
});


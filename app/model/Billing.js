/**
 * Classe que define a model "CcCampaign"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 28/10/2012
 */

Ext.define('CallCenter.model.Billing', {
	extend    : 'Ext.data.Model',
    	fields    : [
		{name: 'id', type: 'int'},
		{name: 'id_user_online', type: 'int'},
		{name: 'id_campaign', type: 'int'},
		{name: 'id_user', type: 'int'},        
		{name: 'total_price', type: 'float'},
		{name: 'turno', type: 'string'},
		{name: 'date', type: 'date', dateFormat: 'Y-m-d'},
		{name:'total_time', type: 'int'},
		{name:'efetivas', type: 'int'},
		{name:'ratio', type: 'float'},
		{name:'ratio_total', type: 'float'},
		{name:'incremento', type: 'float'},
		'idUserusername',
		'idUsername',
		'idCampaignname'
    ],
	proxy	  : {
		type  : 'uxproxy',
		module: 'billing'
	}
});
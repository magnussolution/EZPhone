/**
 * Classe que define a model "CdrSummary"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 17/08/2012
 */

Ext.define('CallCenter.model.CdrSumaryOperador', {
	extend    : 'Ext.data.Model',	
    	fields    : [
		{name: 'id', type: 'int'},
		{name: 'day', type: 'date', dateFormat: 'Y-m-d'},
		{name: 'starttime', type: 'date', dateFormat: 'Y-m-d H:i:s'},
		{name: 'stoptime', type: 'date', dateFormat: 'Y-m-d H:i:s'},
		{name: 'id_user', type: 'int'},
		{name: 'id_campaign', type: 'int'},
		{name: 'total_pause', type: 'int'},
		{name: 'totalCalls', type: 'int'},
		{name: 'timeTotalCalls', type: 'int'},
		{name: 'username', type: 'string'},
		{name: 'turno', type: 'string'},
		{name: 'total_time', type: 'int'},
		{name: 'tiempoProductivo', type: 'string'},
		{name: 'efectivastotal', type: 'int'},
		{name: 'pause', type: 'int'},
		{name: 'ratio', type: 'float'},		
		{name: 'timeTotalEfectivas', type: 'int'},
		{name: 'barridos', type: 'string'},
		{name: 'status', type: 'string'},
		'idUserusername',
		'idUsername',
		'idCampaignname'		
	],
	proxy	  : {
		type  : 'uxproxy',
		module: 'cdrSumaryOperador'
	}
});
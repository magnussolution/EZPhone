/**
 * Classe que define a model "CdrSummary"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 17/08/2012
 */

Ext.define('CallCenter.model.CdrSummary', {
	extend    : 'Ext.data.Model',	
    	fields    : [
		{name: 'id', type: 'int'},
		{name: 'day', type: 'date', dateFormat: 'Y-m-d'},
		{name: 'starttime', type: 'date', dateFormat: 'Y-m-d'},
		{name: 'id_campaign', type: 'int'},
		{name: 'id_phonebook', type: 'int'},
		{name: 'sessiontime', type: 'int'},
		{name: 'aloc_success_calls', type: 'int'},
		{name: 'aloc_all_calls', type: 'int'},
		{name: 'nbcall', type: 'int'},
		{name: 'success_calls', type: 'int'},
		{name: 'categoriacion_completa', type: 'int'},
		'sumsessiontime',
		'sumsessionbill',
		'sumsuccess_calls',
		'sumaloc_all_calls',
		'sumnbcall',
		'sumcategoriacion_completa'
	],
	proxy	  : {
		type  : 'uxproxy',
		module: 'cdrSummary'
	}
});
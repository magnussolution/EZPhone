/**
 * Classe que define a model "Cdr"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 17/08/2012
 */

Ext.define('CallCenter.model.Cdr', {
	extend    : 'Ext.data.Model',
	fields    : [
		{name: 'id', type: 'int'},
		{name: 'id_category', type: 'int'},
		{name: 'id_user', type: 'int'},
		{name: 'id_campaign', type: 'int'},
		{name: 'id_phonebook', type: 'int'},
		{name: 'id_trunk', type: 'int'},
		{name: 'sessionid', type: 'string'},
		{name: 'uniqueid', type: 'string'},
		{name: 'starttime', type: 'date', dateFormat: 'Y-m-d H:i:s'},       
		{name: 'sessiontime', type: 'int'},
		{name: 'calledstation', type: 'string'},
		{name: 'dnid', type: 'string'},
		{name: 'terminatecauseid', type: 'int'},
		{name: 'hour', type: 'int'},      
		'idUserusername',
		'idCampaignname',
		'idTrunktrunkcode',
		'idPhonebookname',
		'idCategoryname'   
	],
	proxy	  : {
		type  : 'uxproxy',
		module: 'cdr'
	}
});
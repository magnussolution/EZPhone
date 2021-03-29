/**
 * Classe que define a model "LoginsCampaign"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 17/08/2012
 */

Ext.define('CallCenter.model.LoginsCampaign', {
	extend    : 'Ext.data.Model',
     fields    : [
		{name: 'id', type: 'int'},
		{name: 'id_user', type: 'int'},
		{name: 'starttime', type: 'date', dateFormat: 'Y-m-d H:i:s'},
		{name: 'stoptime', type: 'date', dateFormat: 'Y-m-d H:i:s'},     
		{name: 'total_time', type: 'int'},
		{name: 'id_campaign', type: 'int'},
		{name: 'turno', type: 'string'},
		{name: 'login_type', type: 'string'},
		{name: 'pause_type', type: 'int'},		
		'idUserusername',
		'idCampaignname'   
		],
	proxy	  : {
		type  : 'uxproxy',
		module: 'loginsCampaign'
	}
});
/**
 * Classe que define a model "CcCampaign"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 28/10/2012
 */

Ext.define('CallCenter.model.MassiveCallCampaign', {
	extend    : 'Ext.data.Model',
    	fields    : [
        {name: 'id', type: 'int'},
        {name: 'id_campaign', type: 'int'},
        {name: 'name', type: 'string'},
        {name: 'status', type: 'int'},
        {name: 'description', type: 'string'},
        {name: 'frequency', type: 'int'},
        {name: 'audio', type: 'string'},
        {name: 'audio_2', type: 'string'},
        {name: 'restrict_phone', type: 'int'},        
        {name: 'forward_number', type: 'int'},
        {name: 'description', type: 'string'},
        {name: 'creationdate', type: 'date', dateFormat: 'Y-m-d H:i:s'},
        {name: 'daily_start_time', type: 'date', dateFormat: 'H:i:s'},
        {name: 'daily_stop_time', type: 'date', dateFormat: 'H:i:s'},
        'idCampaignname' ,
        'subRecords',
        'id_massive_call_phonebook' 
    ],
	proxy: {
		type  : 'uxproxy',
		module: 'massiveCallCampaign'
	}
});
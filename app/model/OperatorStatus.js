/**
 * Classe que define a model "operatorStatus"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 10/08/2012
 */

 //ALTER TABLE `pkg_call_online` ADD `currentstatus` VARCHAR(15) NOT NULL , ADD `lastcall` INT(11) NOT NULL ;

Ext.define('CallCenter.model.OperatorStatus', {
	extend    : 'Ext.data.Model',
    fields    : [
        {name: 'id', type: 'int'},
        {name: 'id_user', type: 'int'},
        {name: 'id_campaign', type: 'int'},
        {name: 'canal', type: 'string'},
        {name: 'tronco', type: 'string'},
        {name: 'ndiscado', type: 'string'},
        {name: 'codec', type: 'string'},
        {name: 'status', type: 'string'},
        {name: 'duration', type: 'int'},
        {name: 'reinvite', type: 'string'},
        {name: 'id_campaign', type: 'string'},
        {name: 'currentstatus', type: 'string'},
        {name: 'peer_status', type: 'string'},
        {name: 'last_call', type: 'string'},
        {name: 'calls_taken', type: 'int'},
        {name: 'in_call', type: 'int'},
        {name: 'queue_status', type: 'int'}, 
        {name: 'categorizing', type: 'int'},              
        'idUserusername',
        'idCampaignname'
	],
	proxy  : {
		type  : 'uxproxy',
		module: 'operatorStatus'
	}
});


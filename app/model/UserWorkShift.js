/**
 * Classe que define a model "CcCampaign"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 28/10/2012
 */

Ext.define('CallCenter.model.UserWorkShift', {
	extend    : 'Ext.data.Model',
    	fields    : [
        {name: 'id', type: 'int'},
        {name: 'id_user', type: 'int'},
        {name: 'id_workShift', type: 'int'},
        'idUserusername',
        'idWorkShiftday',
        'idWorkShiftturno',
        'idUsername'
    ],
	proxy	  : {
		type  : 'uxproxy',
		module: 'userWorkShift'
	}
});
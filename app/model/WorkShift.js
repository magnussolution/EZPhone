/**
 * Classe que define a model "CcCampaign"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 28/10/2012
 */

Ext.define('CallCenter.model.WorkShift', {
	extend    : 'Ext.data.Model',
    	fields    : [
        {name: 'id', type: 'int'},
        {name: 'id_user', type: 'int'},
        {name: 'day', type: 'date', dateFormat: 'Y-m-d'},
        {name: 'day_start', type: 'date', dateFormat: 'Y-m-d'},
        {name: 'day_end', type: 'date', dateFormat: 'Y-m-d'},
        {name: 'turno', type: 'string'},
        {name: 'start_time', type: 'string'},
        {name: 'stop_time', type: 'string'},
        {name: 'week_day', type: 'string'},
        {name: 'countUser', type: 'int'},
        {name: 'signup', type: 'int'},
        {name: 'daily_morning_start_time', type: 'date', dateFormat: 'H:i:s'},
        {name: 'daily_morning_stop_time', type: 'date', dateFormat: 'H:i:s'},
        {name: 'daily_afternoon_start_time', type: 'date', dateFormat: 'H:i:s'},
        {name: 'daily_afternoon_stop_time', type: 'date', dateFormat: 'H:i:s'}

    ],
	proxy	  : {
		type  : 'uxproxy',
		module: 'workShift'
	}
});
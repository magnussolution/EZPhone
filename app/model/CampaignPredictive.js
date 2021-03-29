/**
 * Classe que define a model "CampaignPredictive"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 28/10/2012
 */

Ext.define('CallCenter.model.CampaignPredictive', {
	extend    : 'Ext.data.Model',
        fields    : [
        {name: 'id', type: 'int'},
        {name: 'name', type: 'string'},
        {name: 'total_calls', type: 'int'},
        {name: 'answered', type: 'int'},
        {name: 'error', type: 'int'},
        {name: 'ring_delay', type: 'string'},
        {name: 'phonebook', type: 'string'},
        {name: 'asr', type: 'string'}
    ],
	proxy: {
		type  : 'uxproxy',
		module: 'campaignPredictive',
        limitParam: undefined
	}
});
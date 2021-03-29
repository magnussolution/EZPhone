/**
 * Classe que define a model "CcCampaign"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 28/10/2012
 */

Ext.define('CallCenter.model.PortabilidadeCodigos', {
	extend    : 'Ext.data.Model',
    	fields    : [
		{name: 'id', type: 'int'},
		{name: 'prefix', type: 'int'},
		{name: 'favorito', type: 'int'},
		{name: 'company', type: 'string'}
    ],
	proxy	  : {
		type  : 'uxproxy',
		module: 'portabilidadeCodigos'
	}
});
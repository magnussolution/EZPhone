/**
 * Classe que define a model "PhoneBook"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 28/10/2012
 */

Ext.define('CallCenter.model.PhoneBook', {
	extend    : 'Ext.data.Model',
    fields    : [
        {name: 'id', type: 'int'},
        {name: 'id_trunk', type: 'int'},
        {name: 'status', type: 'int'},      
        {name: 'name', type: 'string'},        
        {name: 'description', type: 'string'},
        'idTrunktrunkcode',        
        {name: 'reprocessar', type: 'int'},
        {name: 'show_numbers_operator', type: 'int'},
        {name: 'portabilidadeFixed', type: 'int'},
        {name: 'portabilidadeMobile', type: 'int'}
	],
	proxy	  : {
		type  : 'uxproxy',
		module: 'phoneBook'
	}
});
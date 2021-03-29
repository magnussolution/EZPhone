/**
 * Classe que define a model "MassiveCallPhoneBook"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 28/03/2017
 */

Ext.define('CallCenter.model.MassiveCallPhoneBook', {
	extend    : 'Ext.data.Model',
    fields    : [
        {name: 'id', type: 'int'},
        {name: 'id_trunk', type: 'int'},
        {name: 'status', type: 'int'},      
        {name: 'name', type: 'string'},        
        {name: 'description', type: 'string'},
        'idTrunktrunkcode',
        {name: 'portabilidadeFixed', type: 'int'},
        {name: 'portabilidadeMobile', type: 'int'}
	],
	proxy	  : {
		type  : 'uxproxy',
		module: 'massiveCallPhoneBook'
	}
});
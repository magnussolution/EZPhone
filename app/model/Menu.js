/**
 * Classe que define a model para o store de menu
 *
 * MagnusBilling <info@magnusbilling.com>
 * 12/03/2012
 */

Ext.define('CallCenter.model.Menu', {
    extend	  : 'Ext.data.Model',
    idProperty: 'controller',
    fields	  : [
	    {name: 'text', convert: function(value) {
	    	return (value.indexOf('t(') !== -1) ? eval(value) : value;
	    }},
	    'module',
        'action',
        'iconCls',
        'rows'
    ]
});
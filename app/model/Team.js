/**
 * Classe que define a model "Provider"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 16/07/2012
 */
Ext.define('CallCenter.model.Team', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'name',
        type: 'string'
    }, {
        name: 'description',
        type: 'string'
    }],
    proxy: {
        type: 'uxproxy',
        module: 'Team'
    }
});
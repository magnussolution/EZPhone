/**
 * Classe que define a model "CcCampaign"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 28/10/2012
 */
Ext.define('CallCenter.model.Category', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'name',
        type: 'string'
    }, {
        name: 'status',
        type: 'int'
    }, {
        name: 'description',
        type: 'string'
    }, {
        name: 'type',
        type: 'string'
    }, {
        name: 'color',
        type: 'string'
    }, {
        name: 'use_in_efetiva',
        type: 'int'
    }],
    proxy: {
        type: 'uxproxy',
        module: 'category'
    }
});
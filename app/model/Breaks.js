/**
 * Classe que define a model "CcCampaign"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 28/10/2012
 */
Ext.define('CallCenter.model.Breaks', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'name',
        type: 'string'
    }, {
        name: 'mandatory',
        type: 'int'
    }, {
        name: 'start_time',
        type: 'date',
        dateFormat: 'H:i:s'
    }, {
        name: 'stop_time',
        type: 'date',
        dateFormat: 'H:i:s'
    }, {
        name: 'maximo',
        type: 'int'
    }, {
        name: 'status',
        type: 'int'
    }],
    proxy: {
        type: 'uxproxy',
        module: 'breaks'
    }
});
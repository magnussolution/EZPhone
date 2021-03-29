/**
 * Classe que define o store "CdrSummary"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 17/08/2012
 */

Ext.define('CallCenter.store.CdrSumaryOperador', {
	extend: 'Ext.data.Store',
    	model : 'CallCenter.model.CdrSumaryOperador',
    	groupField: 'status',
    	remoteSort : false,
    	sorters: [{
        	property: 'ratio',
        	direction: 'DESC'
    	}]
});
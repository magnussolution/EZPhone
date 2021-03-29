/**
 * Classe que define o store "Campaign"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 28/10/2012
 */

Ext.define('CallCenter.store.WorkShift', {
	extend: 'Ext.data.Store',
    model : 'CallCenter.model.WorkShift',
    groupField: 'day'
});
/**
 * Class to proxy default
 *
 * Adilson Magnus <info@magnussolution.com> 
 * 14/07/2014
 */

Ext.define('Ext.ux.data.proxy.Ajax', {
	extend: 'Ext.data.proxy.Ajax',
	alias: 'proxy.uxproxy',
    simpleSortMode: true,
    type: 'ajax',
    baseUrl: 'index.php',
    actionRead: 'read',
    actionCreate: 'save',
    actionUpdate: 'save',
    actionDestroy: 'destroy',
    actionReport: 'report',
    actionCsv: 'csv',
    actionFromCsv: 'importFromCsv',
    actionDestroyReport: 'destroyReport',
    reader: {
        type: 'json',
        rootProperty: 'rows',
        successProperty: 'success',
        totalProperty: 'count'
    },
    writer: {
        type: 'json',
        rootProperty: 'rows',
        writeAllFields: false,
        encode: true
    },
    
    constructor: function() {
		var me = this,
            module;

		me.callParent(arguments);

        module = me.config.module;

		if(!Ext.Object.getValues(me.api).length) {
            me.api.read = me.baseUrl + '/' + module + '/' + me.actionRead;
			me.api.create = me.baseUrl + '/' + module + '/' + me.actionCreate;
			me.api.update = me.baseUrl + '/' + module + '/' + me.actionUpdate;
			me.api.destroy = me.baseUrl + '/' + module + '/' + me.actionDestroy;
			me.api.report = me.baseUrl + '/' + module + '/' + me.actionReport;
            me.api.csv = me.baseUrl + '/' + module + '/' + me.actionCsv;
            me.api.fromCsv = me.baseUrl + '/' + module + '/' + me.actionFromCsv;
            me.api.destroyReport = me.baseUrl + '/' + module + '/' + me.actionDestroyReport;
        }
    }
});
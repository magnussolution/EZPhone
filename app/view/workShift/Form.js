/**
 * Classe que define o form de "Campaign"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 28/10/2012
 */

Ext.define('CallCenter.view.workShift.Form', {
	extend: 'Ext.ux.form.Panel',
	uses       : [
		'Ext.ux.form.field.DateTime',
		'Ext.form.RadioGroup'
	],
	alias : 'widget.workshiftform',

	initComponent: function() {
		var me = this;



		me.items = [{
				xtype     : 'datefield',
				name      : 'day_start',
				fieldLabel: t('Day') + ' '+ t('start') ,
				format    : 'Y-m-d',
				value     :  new Date(),
				readOnly: App.user.isOperator

			},{
				xtype     : 'datefield',
				name      : 'day_end',
				fieldLabel: t('Day') + ' '+ t('stop') ,
				format    : 'Y-m-d',
				value     :  new Date(),
				readOnly: App.user.isOperator
			},{
				xtype: 'timefield',
				format: 'H:i',
			    	altFormats:'H:i',
			    	forceSelection: true,
			    	editable: false,
			    	increment: 30,
			    	anchor: '100%',
				name	  : 'daily_morning_start_time',
				fieldLabel: t('daily_morning_start_time'),
				value     : '08:00',
				readOnly: App.user.isOperator
			},{
				xtype: 'timefield',
				format: 'H:i',
			    	altFormats:'H:i',
			    	forceSelection: true,
			    	editable: false,
			    	increment: 30,
			    	anchor: '100%',
				name	  : 'daily_morning_stop_time',
				fieldLabel: t('daily_morning_stop_time'),
				value     : '13:00',
				readOnly: App.user.isOperator
			},{
				xtype: 'timefield',
				format: 'H:i',
			    	altFormats:'H:i',
			    	forceSelection: true,
			    	editable: false,
			    	increment: 30,
			    	anchor: '100%',
				name	  : 'daily_afternoon_start_time',
				fieldLabel: t('daily_afternoon_start_time'),
				value     : '13:00',
				readOnly: App.user.isOperator
			},{
				xtype: 'timefield',
				format: 'H:i',
			    	altFormats:'H:i',
			    	forceSelection: true,
			    	editable: false,
			    	increment: 30,
			    	anchor: '100%',
				name	  : 'daily_afternoon_stop_time',
				fieldLabel: t('daily_afternoon_stop_time'),
				value     : '19:00',
				readOnly: App.user.isOperator
			},{
				xtype     : 'datefield',
				name      : 'day',
				fieldLabel: t('Day'),
				format     : 'Y-m-d',
				readOnly: true,
				hidden    : true
			},{
				xtype     : 'turnocombo',
				name      : 'turno',
				fieldLabel: t('Turno'),
				readOnly: true,
				hidden    : true
			},{
				//xtype     : 'timefield',
				name	  : 'start_time',
				fieldLabel: t('start_time'),
				hidden    : true,
				readOnly: App.user.isOperator
			},{
				//xtype     : 'timefield',
				name	  : 'stop_time',
				fieldLabel: t('stop_time'),
				hidden    : true,
				readOnly: App.user.isOperator
			},{
				hidden    : !App.user.isAdmin,
				xtype: 'userworkshiftlist',

				buttonCsv: false,
				filterableColumns: false,
				buttonCleanFilter: false,
				autoLoadStore: false,
				columnsHide: ['idWorkShiftday','idWorkShiftturno'],
				border: true,
				allowCreate: false,
				allowUpdate: false,
				allowDelete: false,
				buttonUpdateLot: false,
				pagination: false,
				buttonPrint: false,
				store: Ext.create('CallCenter.store.UserWorkShift', {
				    remoteSort: false
				})
			},{
				style: 'margin-top:25px',
				xtype: 'fieldset',
				title: t('Signup in this turno'),
				collapsible: true,
				collapsed: false,
				hidden     : !App.user.isOperator,
				defaults: {
					labelWidth: 190,
					anchor: '100%',
					layout: {
					    type: 'hbox',
					    defaultMargins: {top: 0, right: 5, bottom: 0, left: 0}
					}
				},
				items: [{
					xtype     : 'noyescombo',
					name	  : 'signup',
					fieldLabel: t('Signup'),
					hidden    : !App.user.isOperator
				}]
				
			
        	}];



        me.callParent(arguments);
    	}
});
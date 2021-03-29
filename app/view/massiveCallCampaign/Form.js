/**
 * Classe que define o form de "MassiveCallCampaign"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 28/10/2012
 */

Ext.define('CallCenter.view.massiveCallCampaign.Form', {
	extend: 'Ext.ux.form.Panel',
	alias : 'widget.massivecallcampaignform',
	fileUpload: true,
	fieldsHideUpdateLot: ['name','audio','audio_2','id_phonebook'],
	initComponent: function() {
		var me = this;

		me.items = [{
				name	  	: 'name',
			    fieldLabel : t('name')
			},{
				xtype     	: 'booleancombo',
				name      	: 'status',
				fieldLabel 	: t('status')
			},{
		    		xtype		: 'uploadfield',
		    		fieldLabel	: t('Audio'),
				emptyText	: 'Select an wav or gsm File',
				allowBlank	: true,
				name		: 'audio',
				extAllowed	: ['wav','gsm']
	        	},{
		    		xtype		: 'uploadfield',
		    		fieldLabel	: t('Audio') + '2',
				emptyText		: 'Select an wav or gsm File',
				allowBlank	: true,
				name			: 'audio_2',
				extAllowed	: ['wav','gsm']
	        	},{
				xtype: 'noyescombo',
				name: 'restrict_phone',
				fieldLabel: t('Restrict Phone'),
				hidden: App.user.isClient,
				allowBlank	: true
			},{
				xtype: 'numberfield',
				name      : 'frequency',
				fieldLabel: t('frequency'),
				value : 5,
				allowBlank 	: true
			},{
				name	  : 'daily_start_time',
				fieldLabel: t('daily_start_time'),
				value     : '09:00:00',
				xtype: 'timefield',
				format: 'H:i:s',
			    	altFormats:'H:i:s',
			    	forceSelection: true,
			    	editable: false,
			    	increment: 30,
			    	anchor: '100%'
			},{
				name	  : 'daily_stop_time',
				fieldLabel: t('daily_stop_time'),
				value     : '18:00:00',
				xtype: 'timefield',
				format: 'H:i:s',
			    	altFormats:'H:i:s',
			    	forceSelection: true,
			    	editable: false,
			    	increment: 30,
			    	anchor: '100%'
			},{
				xtype	  	: 'textareafield',
				name      	: 'description',
				fieldLabel 	: t('description'),
				allowBlank 	: true
			},{
				style: 'margin-top:25px',
				xtype: 'fieldset',
				title: t('Send to campaign'),
				collapsible: true,
				collapsed: false,
				defaults: {
					labelWidth: 190,
					anchor: '100%',
					layout: {
						type: 'hbox',
						defaultMargins: {top: 0, right: 5, bottom: 0, left: 0}
					}
				},
				items: [{
						xtype: 'numberfield',
						name: 'forward_number',
						fieldLabel: t('Number to Forward'),
						value: '-1',
						minValue: '-1',
						maxValue: 9,
						forceSelection: true,
							editable: false
					},{
						xtype: 'campaignlookup',
				          ownerForm: me,
				          name      : 'id_campaign',
				          fieldLabel: t('Campaign'),
				          allowBlank : true
					}]
			},{
			      style: 'margin-top:25px',
			      xtype: 'fieldset',
			      title: t('Select one or more phonebook'),
			      collapsible: true,
			      collapsed: false,
			      items: [{
			      	anchor: '100%',
			      	fieldLabel: '',
					xtype		: 'massivecallphonebooktag',
					allowBlank 	: true
				}]
			}];
	

		me.callParent(arguments);
	}
});
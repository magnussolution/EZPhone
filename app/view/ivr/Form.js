/**
 * Classe que define o form de "Ivr"
 *
 * =======================================
 * ###################################
 * MagnusBilling
 *
 * @package MagnusBilling
 * @author Adilson Leffa Magnus.
 * @copyright Copyright (C) 2005 - 2016 MagnusBilling. All rights reserved.
 * ###################################
 *
 * This software is released under the terms of the GNU Lesser General Public License v3
 * A copy of which is available from http://www.gnu.org/copyleft/lesser.html
 *
 * Please submit bug reports, patches, etc to https://github.com/magnusbilling/mbilling/issues
 * =======================================
 * MagnusSolution.com <info@magnussolution.com>
 * 28/10/2012
 */

Ext.define('CallCenter.view.ivr.Form', {
    extend: 'Ext.ux.form.Panel',
	alias : 'widget.ivrform',
	bodyPadding: 0,
	fileUpload: true,

	initComponent: function() {
		var me = this;

		me.items = [{
			xtype   : 'tabpanel',
			defaults: {
				border     : false,
				defaultType: 'textfield',
				layout     : 'anchor',
				bodyPadding: 5,
				defaults   : {
					plugins   : 'markallowblank',
					allowBlank: false,
					anchor    : '100%'
				}
			},
			items: [{
				title: t('general'),
				items: [{
					name      : 'name',
					fieldLabel: t('name')
				},{
					name      : 'TimeOfDay_monFri',
					fieldLabel: t('Mon-Fri'),
					value     :  '09:00-12:00|14:00-18:00',
					minLength : 11
				},{
					name      : 'TimeOfDay_sat',
					fieldLabel: t('Sat'),
					value     :  '09:00-12:00',
					allowBlank	: true
				},{
					name      : 'TimeOfDay_sun',
					fieldLabel: t('Sun'),
					value     :  '00:00',
					allowBlank	: true
				},{
					xtype		: 'uploadfield',
					fieldLabel	: t('workaudio'),
					emptyText		: 'Select an wav or gsm File',
					allowBlank	: true,
					name			: 'workaudio',
					extAllowed	: ['wav','gsm']
				},{
					xtype		: 'uploadfield',
					fieldLabel	: t('noworkaudio'),
					emptyText		: 'Select an wav or gsm File',
					allowBlank	: true,
					name			: 'noworkaudio',
					extAllowed	: ['wav','gsm']
				}]
			},{
				title : t('options') + ' '+ t('work'),
				itemId: 'option',
				defaults   : {
					xtype: 'fieldcontainer',
					layout: 'hbox',
					plugins   : 'markallowblank',
					allowBlank: true,
					anchor    : '100%',
					labelWidth: 70,
					defaults: {
						hideLabel: true,
						hidden :true,
						flex: 5,
						startX:100,
						allowBlank: true,
						ownerForm: me
					}
				},
				items : [{
					xtype : 'menuseparator',
					width : '100%'
				},{
					labelStyle: 'font-weight:bold',
					xtype: 'displayfield',
					fieldLabel: t('type'),
					value: '<span style="color:green;">' + t('options') + ' '+ t('work')+ '</span>',
					allowBlank: true
				},{
					xtype : 'menuseparator',
					width : '100%'
				},{
					fieldLabel: t('option') + ' 0',
					items: [{
						name : 'type_0',
						xtype: 'typedestinationcombo',
						hidden :false,
						flex: 2
					}, {
						xtype: 'ivrlookup',
						name      : 'id_ivr_0',
						displayField : 'id_ivr_0_name'
					},{
						xtype: 'campaignlookup',
						name      : 'id_campaign_0',
						displayField : 'id_campaign_0_name'
					},{
						xtype: 'userlookup',
						name      : 'id_user_0',
						displayField : 'id_user_0_name'
					}, {
						xtype	: 'textfield',
						name      : 'extension_0'
					}]
				},{
					fieldLabel: t('option') + ' 1',
					items: [{
						name : 'type_1',
						xtype: 'typedestinationcombo',
						hidden :false,
						flex: 2
					}, {
						xtype: 'ivrlookup',
						name      : 'id_ivr_1',
						displayField : 'id_ivr_1_name'
					},{
						xtype: 'campaignlookup',
						name      : 'id_campaign_1',
						displayField : 'id_campaign_1_name'
					},{
						xtype: 'userlookup',
						name      : 'id_user_1',
						displayField : 'id_user_1_name'
					},{
						xtype	: 'textfield',
						name      : 'extension_1'
					}]
				},{
					fieldLabel: t('option') + ' 2',
					items: [{
						name : 'type_2',
						xtype: 'typedestinationcombo',
						hidden :false,
						flex: 2
					}, {
						xtype: 'ivrlookup',
						name      : 'id_ivr_2',
						displayField : 'id_ivr_2_name'
					},{
						xtype: 'campaignlookup',
						name      : 'id_campaign_2',
						displayField : 'id_campaign_2_name'
					},{
						xtype: 'userlookup',
						name      : 'id_user_2',
						displayField : 'id_user_2_name'
					},{
						xtype	: 'textfield',
						name      : 'extension_2'
					}]
				},{
					fieldLabel: t('option') + ' 3',
					items: [{
						name : 'type_3',
						xtype: 'typedestinationcombo',
						hidden :false,
						flex: 2
					}, {
						xtype: 'ivrlookup',
						name      : 'id_ivr_3',
						displayField : 'id_ivr_3_name'
					},{
						xtype: 'campaignlookup',
						name      : 'id_campaign_3',
						displayField : 'id_campaign_3_name'
					},{
						xtype: 'userlookup',
						name      : 'id_user_3',
						displayField : 'id_user_3_name'
					}, {
						xtype	: 'textfield',
						name      : 'extension_3'
					}]
				},{
					fieldLabel: t('option') + ' 4',
					items: [{
						name : 'type_4',
						xtype: 'typedestinationcombo',
						hidden :false,
						flex: 2
					}, {
						xtype: 'ivrlookup',
						name      : 'id_ivr_4',
						displayField : 'id_ivr_4_name'
					},{
						xtype: 'campaignlookup',
						name      : 'id_campaign_4',
						displayField : 'id_campaign_4_name'
					},{
						xtype: 'userlookup',
						name      : 'id_user_4',
						displayField : 'id_user_4_name'
					}, {
						xtype	: 'textfield',
						name      : 'extension_4'
					}]
				},{
					fieldLabel: t('option') + ' 5',
					items: [{
						name : 'type_5',
						xtype: 'typedestinationcombo',
						hidden :false,
						flex: 2
					}, {
						xtype: 'ivrlookup',
						name      : 'id_ivr_5',
						displayField : 'id_ivr_5_name'
					},{
						xtype: 'campaignlookup',
						name      : 'id_campaign_5',
						displayField : 'id_campaign_5_name'
					},{
						xtype: 'userlookup',
						name      : 'id_user_5',
						displayField : 'id_user_5_name'
					}, {
						xtype	: 'textfield',
						name      : 'extension_5'
					}]
				},{
					fieldLabel: t('option') + ' 6',
					items: [{
						name : 'type_6',
						xtype: 'typedestinationcombo',
						hidden :false,
						flex: 2
					}, {
						xtype: 'ivrlookup',
						name      : 'id_ivr_6',
						displayField : 'id_ivr_6_name'
					},{
						xtype: 'campaignlookup',
						name      : 'id_campaign_6',
						displayField : 'id_campaign_6_name'
					},{
						xtype: 'userlookup',
						name      : 'id_user_6',
						displayField : 'id_user_6_name'
					}, {
						xtype	: 'textfield',
						name      : 'extension_6'
					}]
				},{
					fieldLabel: t('option') + ' 7',
					items: [{
						name : 'type_7',
						xtype: 'typedestinationcombo',
						hidden :false,
						flex: 2
					}, {
						xtype: 'ivrlookup',
						name      : 'id_ivr_7',
						displayField : 'id_ivr_7_name'
					},{
						xtype: 'campaignlookup',
						name      : 'id_campaign_7',
						displayField : 'id_campaign_7_name'
					},{
						xtype: 'userlookup',
						name      : 'id_user_7',
						displayField : 'id_user_7_name'
					}, {
						xtype	: 'textfield',
						name      : 'extension_7'
					}]
				},{
					fieldLabel: t('option') + ' 8',
					items: [{
						name : 'type_8',
						xtype: 'typedestinationcombo',
						hidden :false,
						flex: 2
					}, {
						xtype: 'ivrlookup',
						name      : 'id_ivr_8',
						displayField : 'id_ivr_8_name'
					},{
						xtype: 'campaignlookup',
						name      : 'id_campaign_8',
						displayField : 'id_campaign_8_name'
					},{
						xtype: 'userlookup',
						name      : 'id_user_8',
						displayField : 'id_user_8_name'
					}, {
						xtype	: 'textfield',
						name      : 'extension_8'
					}]
				},{
					fieldLabel: t('option') + ' 9',
					items: [{
						name : 'type_9',
						xtype: 'typedestinationcombo',
						hidden :false,
						flex: 2
					}, {
						xtype: 'ivrlookup',
						name      : 'id_ivr_9',
						displayField : 'id_ivr_9_name'
					},{
						xtype: 'campaignlookup',
						name      : 'id_campaign_9',
						displayField : 'id_campaign_9_name'
					},{
						xtype: 'userlookup',
						name      : 'id_user_9',
						displayField : 'id_user_9_name'
					}, {
						xtype	: 'textfield',
						name      : 'extension_9'
					}]
				},{
					fieldLabel: t('option') + ' default',
					items: [{
						name : 'type_10',
						xtype: 'typedestinationcombo',
						hidden :false,
						flex: 2
					}, {
						xtype: 'ivrlookup',
						name      : 'id_ivr_10',
						displayField : 'id_ivr_10_name'
					},{
						xtype: 'campaignlookup',
						name      : 'id_campaign_10',
						displayField : 'id_campaign_10_name'
					},{
						xtype: 'userlookup',
						
						name      : 'id_user_10',
						displayField : 'id_user_10_name'
					}, {
						xtype	: 'textfield',
						name      : 'extension_10'
					}]
				}]
			},{
				title : t('options') + ' '+ t('not')+ ' '+ t('work'),
				itemId: 'optionOut',
				defaults   : {
					xtype: 'fieldcontainer',
					layout: 'hbox',
					plugins   : 'markallowblank',
					allowBlank: true,
					anchor    : '100%',
					labelWidth: 70,
					defaults: {
						hideLabel: true,
						hidden :true,
						flex: 5,
						startX:100,
						allowBlank: true,
						ownerForm: me
					}
				},
				items : [{
					xtype : 'menuseparator',
					width : '100%'
				},{
					labelStyle: 'font-weight:bold',
					xtype: 'displayfield',
					fieldLabel: t('type'),
					value: '<span style="color:red;">' + t('options') + ' '+ t('not')+ ' '+ t('work')+ '</span>',
					allowBlank: true
				},{
					xtype : 'menuseparator',
					width : '100%'
				},{
					fieldLabel: t('option') + ' 0',
					items: [{
						name : 'type_out_0',
						xtype: 'typedestinationcombo',
						hidden :false,
						flex: 2
					}, {
						xtype: 'ivrlookup',
						name      : 'id_ivr_out_0',
						displayField : 'id_ivr_out_0_name'
					},{
						xtype: 'campaignlookup',
						name      : 'id_campaign_out_0',
						displayField : 'id_campaign_out_0_name'
					},{
						xtype: 'userlookup',
						name      : 'id_user_out_0',
						displayField : 'id_user_out_0_name'
					}, {
						xtype	: 'textfield',
						name      : 'extension_out_0'
					}]
				},{
					fieldLabel: t('option') + ' 1',
					items: [{
						name : 'type_out_1',
						xtype: 'typedestinationcombo',
						hidden :false,
						flex: 2
					}, {
						xtype: 'ivrlookup',
						name      : 'id_ivr_out_1',
						displayField : 'id_ivr_out_1_name'
					},{
						xtype: 'campaignlookup',
						name      : 'id_campaign_out_1',
						displayField : 'id_campaign_out_1_name'
					},{
						xtype: 'userlookup',
						name      : 'id_user_out_1',
						displayField : 'id_user_out_1_name'
					}, {
						xtype	: 'textfield',
						name      : 'extension_out_1'
					}]
				},{
					fieldLabel: t('option') + ' 2',
					items: [{
						name : 'type_out_2',
						xtype: 'typedestinationcombo',
						hidden :false,
						flex: 2
					}, {
						xtype: 'ivrlookup',
						name      : 'id_ivr_out_2',
						displayField : 'id_ivr_out_2_name'
					},{
						xtype: 'campaignlookup',
						name      : 'id_campaign_out_2',
						displayField : 'id_campaign_out_2_name'
					},{
						xtype: 'userlookup',
						name      : 'id_user_out_2',
						displayField : 'id_user_out_2_name'
					}, {
						xtype	: 'textfield',
						name      : 'extension_out_2'
					}]
				},{
					fieldLabel: t('option') + ' 3',
					items: [{
						name : 'type_out_3',
						xtype: 'typedestinationcombo',
						hidden :false,
						flex: 2
					}, {
						xtype: 'ivrlookup',
						name      : 'id_ivr_out_3',
						displayField : 'id_ivr_out_3_name'
					},{
						xtype: 'campaignlookup',
						name      : 'id_campaign_out_3',
						displayField : 'id_campaign_out_3_name'
					},{
						xtype: 'userlookup',
						name      : 'id_user_out_3',
						displayField : 'id_user_out_3_name'
					}, {
						xtype	: 'textfield',
						name      : 'extension_out_3'
					}]
				},{
					fieldLabel: t('option') + ' 4',
					items: [{
						name : 'type_out_4',
						xtype: 'typedestinationcombo',
						hidden :false,
						flex: 2
					}, {
						xtype: 'ivrlookup',
						name      : 'id_ivr_out_4',
						displayField : 'id_ivr_out_4_name'
					},{
						xtype: 'campaignlookup',
						name      : 'id_campaign_out_4',
						displayField : 'id_campaign_out_4_name'
					},{
						xtype: 'userlookup',
						name      : 'id_user_out_4',
						displayField : 'id_user_out_4_name'
					}, {
						xtype	: 'textfield',
						name      : 'extension_out_4'
					}]
				},{
					fieldLabel: t('option') + ' 5',
					items: [{
						name : 'type_out_5',
						xtype: 'typedestinationcombo',
						hidden :false,
						flex: 2
					}, {
						xtype: 'ivrlookup',
						name      : 'id_ivr_out_5',
						displayField : 'id_ivr_out_5_name'
					},{
						xtype: 'campaignlookup',
						name      : 'id_campaign_out_5',
						displayField : 'id_campaign_out_5_name'
					},{
						xtype: 'userlookup',
						name      : 'id_user_out_5',
						displayField : 'id_user_out_5_name'
					}, {
						xtype	: 'textfield',
						name      : 'extension_out_5'
					}]
				},{
					fieldLabel: t('option') + ' 6',
					items: [{
						name : 'type_out_6',
						xtype: 'typedestinationcombo',
						hidden :false,
						flex: 2
					}, {
						xtype: 'ivrlookup',
						name      : 'id_ivr_out_6',
						displayField : 'id_ivr_out_6_name'
					},{
						xtype: 'campaignlookup',
						name      : 'id_campaign_out_6',
						displayField : 'id_campaign_out_6_name'
					},{
						xtype: 'userlookup',
						name      : 'id_user_out_6',
						displayField : 'id_user_out_6_name'
					}, {
						xtype	: 'textfield',
						name      : 'extension_out_6'
					}]
				},{
					fieldLabel: t('option') + ' 7',
					items: [{
						name : 'type_out_7',
						xtype: 'typedestinationcombo',
						hidden :false,
						flex: 2
					}, {
						xtype: 'ivrlookup',
						name      : 'id_ivr_out_7',
						displayField : 'id_ivr_out_7_name'
					},{
						xtype: 'campaignlookup',
						name      : 'id_campaign_out_7',
						displayField : 'id_campaign_out_7_name'
					},{
						xtype: 'userlookup',
						name      : 'id_user_out_7',
						displayField : 'id_user_out_7_name'
					}, {
						xtype	: 'textfield',
						name      : 'extension_out_7'
					}]
				},{
					fieldLabel: t('option') + ' 8',
					items: [{
						name : 'type_out_8',
						xtype: 'typedestinationcombo',
						hidden :false,
						flex: 2
					}, {
						xtype: 'ivrlookup',
						name      : 'id_ivr_out_8',
						displayField : 'id_ivr_out_8_name'
					},{
						xtype: 'campaignlookup',
						name      : 'id_campaign_out_8',
						displayField : 'id_campaign_out_8_name'
					},{
						xtype: 'userlookup',
						name      : 'id_user_out_8',
						displayField : 'id_user_out_8_name'
					}, {
						xtype	: 'textfield',
						name      : 'extension_out_8'
					}]
				},{
					fieldLabel: t('option') + ' 9',
					items: [{
						name : 'type_out_9',
						xtype: 'typedestinationcombo',
						hidden :false,
						flex: 2
					}, {
						xtype: 'ivrlookup',
						name      : 'id_ivr_out_9',
						displayField : 'id_ivr_out_9_name'
					},{
						xtype: 'campaignlookup',
						name      : 'id_campaign_out_9',
						displayField : 'id_campaign_out_9_name'
					},{
						xtype: 'userlookup',
						name      : 'id_user_out_9',
						displayField : 'id_user_out_9_name'
					}, {
						xtype	: 'textfield',
						name      : 'extension_out_9'
					}]
				},{
					fieldLabel: t('option') + ' default',
					items: [{
						name : 'type_out_10',
						xtype: 'typedestinationcombo',
						hidden :false,
						flex: 2
					}, {
						xtype: 'ivrlookup',
						name      : 'id_ivr_out_10',
						displayField : 'id_ivr_out_10_name'
					},{
						xtype: 'campaignlookup',
						name      : 'id_campaign_out_10',
						displayField : 'id_campaign_out_10_name'
					},{
						xtype: 'userlookup',
						name      : 'id_user_out_10',
						displayField : 'id_user_out_10_name'
					}, {
						xtype	: 'textfield',
						name      : 'extension_out_10'
					}]
				}]
			}]
		}];
		me.callParent(arguments);
	}
});
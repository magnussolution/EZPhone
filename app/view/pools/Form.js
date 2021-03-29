/**
 * Classe que define o form de "UiAuthen"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 17/08/2012
 */

Ext.define('CallCenter.view.pools.Form', {
    extend: 'Ext.ux.form.Panel',
    alias : 'widget.poolsform',

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
					name : 'question',
					fieldLabel : 'question'
				},{
					xtype: 'typepollcombo',
					name : 'type',
					fieldLabel : 'type'
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
					xtype: 'button',
					text:  t('Add new Field'),
					iconCls: 'call',
					handler: 'addNewField',
					disabled: false,
					reference : 'addField',
					hidden :false
				},{
					xtype : 'menuseparator',
					width : '100%'
				},{
					
					items: [{

						xtype	: 'textfield',
						name: 'answer_0',
						displayField : 'answer',
						hidden :true,
						flex: 3
					}, {
						xtype: 'poolslookup',
						name      : 'id_polls_0',
						displayField : 'id_pools_0_name',
						hidden :true,
						flex: 2
					}]
				},{
					items: [{
						xtype	: 'textfield',
						name: 'answer_1',
						displayField : 'answer',
						hidden :true,
						flex: 3
					}, {
						xtype: 'poolslookup',
						name      : 'id_polls_1',
						displayField : 'id_pools_1_name',
						hidden :true,
						flex: 2
					}]
				},{
					items: [{
						xtype	: 'textfield',
						name: 'answer_2',
						displayField : 'answer',
						hidden :true,
						flex: 3
					}, {
						xtype: 'poolslookup',
						name      : 'id_polls_2',
						displayField : 'id_pools_2_name',
						hidden :true,
						flex: 2
					}]
				},{
					items: [{
						xtype	: 'textfield',
						name: 'answer_3',
						displayField : 'answer',
						hidden :true,
						flex: 3
					}, {
						xtype: 'poolslookup',
						name      : 'id_polls_3',
						displayField : 'id_pools_3_name',
						hidden :true,
						flex: 2
					}]
				},{
					items: [{
						xtype	: 'textfield',
						name: 'answer_4',
						displayField : 'answer',
						hidden :true,
						flex: 3
					}, {
						xtype: 'poolslookup',
						name      : 'id_polls_4',
						displayField : 'id_pools_4_name',
						hidden :true,
						flex: 2
					}]
				},{
					items: [{
						xtype	: 'textfield',
						name: 'answer_5',
						displayField : 'answer',
						hidden :true,
						flex: 3
					}, {
						xtype: 'poolslookup',
						name      : 'id_polls_5',
						displayField : 'id_pools_5_name',
						hidden :true,
						flex: 2
					}]
				},{
					items: [{
						xtype	: 'textfield',
						name: 'answer_6',
						displayField : 'answer',
						hidden :true,
						flex: 3
					}, {
						xtype: 'poolslookup',
						name      : 'id_polls_6',
						displayField : 'id_pools_6_name',
						hidden :true,
						flex: 2
					}]
				},{
					items: [{
						xtype	: 'textfield',
						name: 'answer_7',
						displayField : 'answer',
						hidden :true,
						flex: 3
					}, {
						xtype: 'poolslookup',
						name      : 'id_polls_7',
						displayField : 'id_pools_7_name',
						hidden :true,
						flex: 2
					}]
				},{
					items: [{
						xtype	: 'textfield',
						name: 'answer_8',
						displayField : 'answer',
						hidden :true,
						flex: 3
					}, {
						xtype: 'poolslookup',
						name      : 'id_polls_8',
						displayField : 'id_pools_8_name',
						hidden :true,
						flex: 2
					}]
				},{
					items: [{
						xtype	: 'textfield',
						name: 'answer_9',
						displayField : 'answer',
						hidden :true,
						flex: 3
					}, {
						xtype: 'poolslookup',
						name      : 'id_polls_9',
						displayField : 'id_pools_9_name',
						hidden :true,
						flex: 2
					}]
				}]
			}]
		}];
		me.callParent(arguments);
	}
});
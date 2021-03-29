/**
 * Classe que define o form de "PhoneBook"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 28/10/2012
 */

Ext.define('CallCenter.view.massiveCallPhoneBook.Form', {
	extend: 'Ext.ux.form.Panel',
	alias : 'widget.massivecallphonebookform',
	bodyPadding: 0,
	fieldsHideUpdateLot: ['name'],

	initComponent: function() {
		var me = this;

		me.items = [{
			name	  : 'name',
			fieldLabel: t('name')
		},{
			xtype      : 'trunkcombo',
			hidden     : App.user.isOperator,
			hideable   : !App.user.isOperator
	    	},{
			xtype     : 'booleancombo',
			name      : 'status',
			fieldLabel: t('status')
		},{
			xtype 	: 'noyescombo',
			name      : 'portabilidadeFixed',
			fieldLabel: t('Portabilidade Fixo')
		},{
			xtype 	: 'noyescombo',
			name      : 'portabilidadeMobile',
			fieldLabel: t('Portabilidade Celular')
		},{
			xtype	  : 'textareafield',
			name	  : 'description',
			fieldLabel: t('description'),
			allowBlank: true
		}];

		me.callParent(arguments);
	}
});
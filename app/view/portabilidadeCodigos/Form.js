/**
 * Classe que define o form de "Campaign"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 28/10/2012
 */

Ext.define('CallCenter.view.portabilidadeCodigos.Form', {
	extend: 'Ext.ux.form.Panel',
	alias : 'widget.portabilidadecodigosform',

	initComponent: function() {
		var me = this;

		me.items = [{
			name      : 'company',
			fieldLabel: t('Company')

		},{
			xtype : 'yesnocombo',
			name      : 'favorito',
			fieldLabel: t('Favorito')

		},{
			style: 'margin-top:25px',
			xtype: 'fieldset',
			title: t('Select one or more Trunks'),
			collapsible: true,
			collapsed: false,
			items: [{
				anchor: '100%',
				fieldLabel: '',
				xtype		: 'trunktag',
				allowBlank 	: true
			}]
		}];
       	me.callParent(arguments);
    }
});
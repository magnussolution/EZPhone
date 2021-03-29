/**
 * Classe que define o form de "provider"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 25/06/2012
 */

Ext.define('CallCenter.view.provider.Form', {
	extend: 'Ext.ux.form.Panel',
	alias : 'widget.providerform',
	items : [{
		name       : 'provider_name',
		fieldLabel : t('name')  
	},{
		xtype	   : 'textareafield',
		name	   : 'description',
		fieldLabel : t('description'),
		allowBlank : true
	}]
});
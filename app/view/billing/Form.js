/**
 * Classe que define o form de "Campaign"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 28/10/2012
 */

Ext.define('CallCenter.view.billing.Form', {
	extend: 'Ext.ux.form.Panel',
	alias : 'widget.billingform',

	initComponent: function() {
		var me = this;

		me.items = [{
			name      : 'total_time',
			fieldLabel: t('Total Trabajado')

		},{
			name      : 'efetivas',
			fieldLabel: t('Efetivas')

		},{
			name      : 'ratio',
			fieldLabel: t('Ratio')

		},{
			name      : 'ratio_total',
			fieldLabel: t('Ratio Total')

		},{
			xtype: 'moneyfield',
			mask: App.user.currency + ' #9.999.990,00',
			name      : 'total_price',
			fieldLabel: t('Total')

		},{
              xtype     : 'textareafield',
      	    name	  : 'description',
              fieldLabel: t('description'),
              allowBlank: true,
              anchor: '100%'
          }];
       	me.callParent(arguments);
    	}
});
/**
 * Classe que define a lista de "Provider"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 25/06/2012
 */

Ext.define('CallCenter.view.provider.List', {
    extend		: 'Ext.ux.grid.Panel',
    alias		: 'widget.providerlist',
    store		: 'Provider',
    
	initComponent: function() {
		var me = this;

		me.buttonUpdateLot = false;

		me.columns = [{
			header	 : t('name'),
			dataIndex: 'provider_name'
		},{
			header	 : t('description'),
			dataIndex: 'description'
		},{
			header	 : t('creationdate'),
            renderer : Helper.Util.formatDateTime,
			dataIndex: 'creationdate'
		}];

		me.callParent(arguments);
	}
});
/**
 * Classe que define a lista de "pools"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 17/08/2012
 */

Ext.define('CallCenter.view.pools.List', {
	extend		: 'Ext.ux.grid.Panel',
	alias		: 'widget.poolslist',
	store		: 'Pools',

	initComponent: function() {
		var me = this;


		me.columns = me.columns || [{
			header	     : t('Id'),
			dataIndex	 	: 'id',
			flex         	: 1
		},{
			header	     : t('question'),
			dataIndex	 	: 'question',
			flex         	: 3
		},{
			header	     : t('type'),
			dataIndex    	: 'type',
			flex         	: 2
		}]

		me.callParent(arguments);
	}
});
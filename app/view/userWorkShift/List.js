/**
 * Classe que define a lista de "Campaign"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 19/09/2012
 */

Ext.define('CallCenter.view.userWorkShift.List', {
	extend		: 'Ext.ux.grid.Panel',
	alias		: 'widget.userworkshiftlist',
	store		: 'UserWorkShift',

	initComponent: function() {
		var me = this;
		me.buttonUpdateLot = false;

		me.columns = me.columns || [{
			xtype 		: 'templatecolumn',
			tpl 		  	: '{idUserusername}',
			header		: t('Operador'),
			dataIndex	 	: 'id_user',
			comboFilter 	: 'usercombo',
			filter	     : {type: 'string', field: 'pkg_user.username'},
			flex           : 2
		},{
			header		: t('Name'),
			dataIndex	 	: 'idUsername',
			flex           : 2
		},{
			header		: t('day'),
			dataIndex	 	: 'idWorkShiftday',
			flex           : 2
		},{
			header	     : t('turno'),
			dataIndex    : 'idWorkShiftturno',
			flex         : 2
		}]

		me.callParent(arguments);
	}
});
/**
 * Classe que define a lista de "Campaign"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 19/09/2012
 */

Ext.define('CallCenter.view.portabilidadeCodigos.List', {
	extend		: 'Ext.ux.grid.Panel',
	alias		: 'widget.portabilidadecodigoslist',
	store		: 'PortabilidadeCodigos',
    fieldSearch : 'company',
	initComponent: function() {
		var me = this;

		me.buttonUpdateLot = false;
		me.allowDelete = false;
		me.allowCreate = false;
		me.buttonImportCsv  = App.user.isAdmin;


		me.columns = [{
			header	     : t('Company'),
			dataIndex    : 'company',
			flex         : 5
		},{
			header		 : 'Favorito',
			dataIndex	 : 'favorito',
			renderer	 : Helper.Util.formattyyesno,
			flex         : 2,
			filter		 : {
				type     : 'list',
				options  : [
					[0, t('no')],
					[1, t('yes')]
				]
			}
		}]

		me.callParent(arguments);
	}
});
/**
 * Classe que define a lista de "CcPhoneBook"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 28/10/2012
 */

Ext.define('CallCenter.view.massiveCallPhoneBook.List', {
	extend		: 'Ext.ux.grid.Panel',
	alias		: 'widget.massivecallphonebooklist',
	store		: 'MassiveCallPhoneBook',
	fieldSearch : 'name',
	
	initComponent: function() {
		var me = this;
		me.allowPrint     = !App.user.isOperator;
		me.buttonCsv       = !App.user.isOperator;

		me.buttonUpdateLot = App.user.updateAll;

		me.columns = me.columns || [{
			header	     : 'ID',
			dataIndex    : 'id',
			flex         : 1
		},{
			header	     : t('name'),
			dataIndex    : 'name',
			flex         : 3
		},{
			header		 : t('status'),
			dataIndex	 : 'status',
			renderer	 : Helper.Util.formatBooleanActive,
			comboRelated : 'booleancombo',
			flex         : 3,
			filter		 : {
				type     : 'list',
				options  : [
					[1, t('active')],
					[0, t('inactive')]
				]
			}
		},{
			header		 : 'Portabilidade Fixo',
			dataIndex	 : 'portabilidadeFixed',
			renderer	 : Helper.Util.formattyyesno,
			flex         : 2,
			filter		 : {
				type     : 'list',
				options  : [
					[0, t('no')],
					[1, t('yes')]
				]
			}
		},{
			header		 : 'Portabilidade Celular',
			dataIndex	 : 'portabilidadeMobile',
			renderer	 : Helper.Util.formattyyesno,
			flex         : 2,
			filter		 : {
				type     : 'list',
				options  : [
					[0, t('no')],
					[1, t('yes')]
				]
			}
		},{
			header	     : t('description'),
			dataIndex    : 'description',
			flex         : 5
		}]

		me.callParent(arguments);
	}
});
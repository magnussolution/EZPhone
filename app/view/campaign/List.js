/**
 * Classe que define a lista de "Campaign"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 19/09/2012
 */

Ext.define('CallCenter.view.campaign.List', {
	extend		: 'Ext.ux.grid.Panel',
	alias		: 'widget.campaignlist',
	store		: 'Campaign',
	fieldSearch : 'name',
	initComponent: function() {
		var me = this;
		me.buttonUpdateLot = App.user.updateAll;


		me.extraButtons = [{
			text: t('Test') + ' ' + t('Check Campaign'),
			iconCls: 'call',
			handler: 'checkCampaign',
			disabled: true,
			hidden : !App.user.isAdmin,
			reference : 'checkCampaign'
		}];


		me.columns = me.columns || [{
			header	     : 'ID',
			dataIndex    : 'id',
			flex         : 1
		},{
			header	     : t('name'),
			dataIndex    : 'name',
			flex         : 5
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
		}]

		me.callParent(arguments);
	}

});
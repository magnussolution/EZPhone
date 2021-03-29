/**
 * Classe que define a lista de "loginsCampaign"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 17/08/2012
 */

Ext.define('CallCenter.view.loginsCampaign.List', {
	extend		: 'Ext.ux.grid.Panel',
	alias		: 'widget.loginscampaignlist',
	store		: 'LoginsCampaign',
	

	initComponent: function() {
		var me = this;

		me.allowDelete  = false;
		me.buttonUpdateLot = false;

		me.columns = [{
			xtype 		: 'templatecolumn',
			tpl 		  	: '{idUserusername}',
			header		: t('username'),
			dataIndex	 	: 'id_user',
			comboFilter 	: 'usercombo',
			filter	     : {type: 'string', field: 'pkg_user.username'},
			flex           : 2
		},{
			xtype 		: 'templatecolumn',
			tpl 		  	: '{idCampaignname}',
			header		: t('Campaign'),
			dataIndex	 	: 'id_campaign',
			comboFilter 	: 'campaigncombo',
			flex         	: 4
		},{
			header	 	: t('starttime'),
			renderer 	 	: Helper.Util.formatDateTime,
			dataIndex	 	: 'starttime',
			filter	     : {field: 'starttime', type: 'date', dateFormat: 'Y-m-d'},
			flex         	: 4
		},{
			header	 	: t('stoptime'),
			renderer     	: Helper.Util.formatDateTime,
			filter	     : {field: 'stoptime', type: 'date', dateFormat: 'Y-m-d'},
			dataIndex	 	: 'stoptime',
			flex         	: 4
		},{
			header	     : t('sessiontime'),
			dataIndex    	: 'total_time',
			renderer     	: Helper.Util.formatsecondsToTime,
			flex         	: 3
		},{
			header	     : t('Turno'),
			renderer     	: Helper.Util.formatTurno,
			dataIndex    	: 'turno',
			flex         	: 2,
			filter		: {
				type     : 'list',
				options  : [
					['M', t('Mañana')],
					['T', t('Tarde')]
				]
			}
		},{
			header	     : t('Type'),
			dataIndex    	: 'login_type',
			flex         	: 2
		}],

		

		me.callParent(arguments);
	}
});
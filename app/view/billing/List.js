/**
 * Classe que define a lista de "Campaign"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 19/09/2012
 */

Ext.define('CallCenter.view.billing.List', {
	extend		: 'Ext.ux.grid.Panel',
	alias		: 'widget.billinglist',
	store		: 'Billing',
     fieldSearch : 'username',
	initComponent: function() {
		var me = this;

		me.groupingsummary = true;
		me.buttonUpdateLot = App.user.updateAll;
		me.allowDelete = false;
		me.allowCreate = false;

		me.columns = [{
			header	: t('date'),
			dataIndex    : 'date',
			renderer  : Ext.util.Format.dateRenderer('Y-m-d'),
			flex         : 2
		},{
			xtype: 'templatecolumn',
			tpl: '{idUserusername}',
			header: t('user'),
			dataIndex: 'idUserusername',
			comboFilter: 'usercombo',
			filter: {
				type: 'string',
				field: 'c.username'
			},
			flex: 2

		},{
			xtype: 'templatecolumn',
			tpl: '{idUsername}',
			header: t('Name'),
			dataIndex: 'idUsername',
			comboFilter: 'usercombo',
			filter: {
				type: 'string',
				field: 'c.name'
			},
			flex: 3

		},{
			xtype: 'templatecolumn',
			tpl: '{idCampaignname}',
			header: t('Campaign'),
			dataIndex: 'id_campaign',
			comboFilter: 'campaingcombo',
			filter: {
				type: 'string',
				field: 'd.name'
			},
			flex: 6

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
			header	     : t('Total Trabajado'),
			dataIndex    : 'total_time',
			renderer:Helper.Util.formatsecondsToTime,
			flex         : 3
		},{
			header	     : t('Efetivas'),
			dataIndex    : 'efetivas',
			flex         : 2
		},{
			header	     : t('Ratio'),
			dataIndex    : 'ratio',
			flex         : 2
		},{
			header	     : t('Ratio Total'),
			dataIndex    : 'ratio_total',
			flex         : 2
		},{
			header	     : t('Incremento'),
			dataIndex    : 'incremento',
			flex         : 2
		},{
			header	     : t('Total'),
			dataIndex    : 'total_price',
			renderer: Helper.Util.formatMoneyDecimal2,
			flex         : 4,
			summaryType: 'sum',
			summaryRenderer: function(value, summaryData, dataIndex) {
				var format = Ext.util.Format.numberRenderer('0.00');
                	return '<b>TOTAL: $' + format(value) + ' </b>';
            	}
		}]

		me.callParent(arguments);
	}
});
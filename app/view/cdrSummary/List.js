/**
 * Classe que define a lista de "CdrSummary"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 17/08/2012
 */

Ext.define('CallCenter.view.cdrSummary.List', {
    	extend		: 'Ext.ux.grid.Panel',
    	alias		: 'widget.cdrsummarylist',
    	store		: 'CdrSummary',
    	extraButtons: [{
    		text   : t('charts'),	
    		iconCls: 'icon-chart-column',
		handler: 'onChart',
		reference: 'chart',
		hidden : true
    	}],


    
	initComponent: function() {
		var me = this;
		me.buttonUpdateLot = false;
		me.allowPrint = false;

		if (!App.user.isOperator) {
			me.extraFilters = [{
				field: 'pkg_trunk.trunkcode',
				label: t('trunk'),
				type : 'string'
			},{
				field: 'c.username',
				label: t('user'),
				type : 'string'
			},{
				field: 't.calledstation',
				label: t('destination'),
				type : 'string'
			},{
				field: 'pkg_campaign.name',
				label: t('campaign'),
				type : 'string'
			},{
				field: 'pkg_phonebook.name',
				label: t('phonebook'),
				type : 'string'
			}];
		};	

		me.columns = [{
			header	 	 : t('day'),
			renderer 	 : Ext.util.Format.dateRenderer('Y-m-d'),
			dataIndex	 : 'day',
			filter	     : {type: 'date', field: 'starttime'},
			flex         : 3
		},{
			menuDisabled : true,
			header	     : t('sessiontime') + ' Min',
			dataIndex    : 'sessiontime',
			renderer     : Helper.Util.formatsecondsToTime,
			flex         : 2
		},{
			menuDisabled : true,
			header	     : t('aloc_all_calls'),
			dataIndex    : 'aloc_all_calls',
			renderer     : Helper.Util.formatsecondsToTime,
			flex         : 3
		},{
			menuDisabled : true,
			header	     : t('aloc_success_calls'),
			dataIndex    : 'aloc_success_calls',
			renderer     : Helper.Util.formatsecondsToTime,
			flex         : 3
		},{
			menuDisabled : true,
			header	     : t('nbcall'),
			dataIndex    : 'nbcall',
			flex         : 3
		},{
			menuDisabled : true,
			header	     : t('successCall'),
			dataIndex    : 'success_calls',
			flex         : 3
		},{
			menuDisabled : true,
			header	     : t('sumcategoriacion_completa'),
			dataIndex    : 'categoriacion_completa',
			flex         : 3
		}]

		me.callParent(arguments);
	}
});
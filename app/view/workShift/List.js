/**
 * Classe que define a lista de "Campaign"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 19/09/2012
 */

Ext.define('CallCenter.view.workShift.List', {
	extend		: 'Ext.ux.grid.Panel',
	alias		: 'widget.workshiftlist',
	store		: 'WorkShift',

	initComponent: function() {
		var me = this;
		me.buttonUpdateLot = App.user.updateAll;
		me.buttonCsv = false;
		me.allowPrint  = false;

		me.extraButtons = [{
			text: t('Signup'),
			iconCls: 'call',
			handler: 'onSignup',
			disabled: true,
			hidden : !App.user.isOperator,
			reference : 'signupbutton'
		}];


		me.columns = me.columns || [{
			header	     : t('day'),
			renderer 		: Ext.util.Format.dateRenderer('Y-m-d'),
			dataIndex    : 'day',
			flex         : 4
		},{
			header	     : t('week_day'),
			renderer 		: Helper.Util.translate,
			dataIndex    : 'week_day',
			flex         : 4
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
			header	     : t('start_time'),
			dataIndex    : 'start_time',
			flex         : 4
		},{
			header	     : t('stop_time'),
			dataIndex    : 'stop_time',
			flex         : 4
		},{
			header	     : t('Total Operadores'),
			dataIndex    : 'countUser',
			flex         : 4,
			hidden    : !App.user.isAdmin
		},{
			header       : t('Signup'),            
            	dataIndex    : 'signup',
            	renderer     : Helper.Util.formatBoolean,            
            	comboRelated : 'booleancombo',
            	flex         : 3,
            	filter		 : {
				type     : 'list',
				options  : [
					[1, t('yes')],
					[0, t('no')]
				]
			},
			hidden    : !App.user.isOperator
        	}]

		me.callParent(arguments);
	}
});
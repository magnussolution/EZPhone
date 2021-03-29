/**
 * Classe que define a lista de "Callerid"
 *
 * =======================================
 * ###################################
 * MagnusBilling
 *
 * @package	MagnusBilling
 * @author	Adilson Leffa Magnus.
 * @copyright	Todos os direitos reservados.
 * ###################################
 * =======================================
 * MagnusSolution.com <info@magnussolution.com>
 * 19/09/2012
 */

Ext.define('CallCenter.view.logUsers.List', {
    extend		: 'Ext.ux.grid.Panel',
    alias		: 'widget.loguserslist',
    store		: 'LogUsers',

	initComponent: function() {
		var me = this;

		me.buttonUpdateLot = false;
		me.allowDelete  = false;
		me.allowCreate       = false;
		me.allowUpdate      = false;
		

		me.columns = [{
			header		 : t('user'),
			dataIndex	 : 'idUserusername',
			flex         : 4,
            	hidden       : App.user.isOperator,
			hideable     : !App.user.isOperator
		},{
			header	     : t('action'),
			dataIndex    : 'idLogActionsname',
			renderer : Helper.Util.translate,
			flex         : 3
		},{
			header	     : t('description'),
			dataIndex    : 'description',
			flex         : 7
		},{
			header	     : t('IP'),
			dataIndex    : 'ip',
			flex         : 4
		}, {
			header: t('date'),
			renderer: Helper.Util.formatDateTime,
			dataIndex: 'date',
			flex: 4
		}]

		me.callParent(arguments);
	}
});
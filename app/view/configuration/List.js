/**
 * Classe que define a lista de "Configuration"
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
 * 17/08/2012
 */

Ext.define('CallCenter.view.configuration.List', {
    extend: 'Ext.ux.grid.Panel',
    alias		: 'widget.configurationlist',
    store		: 'Configuration',

	initComponent: function() {
		var me = this;
		me.allowPrint     = false;
		me.buttonCsv       = false;
		me.buttonUpdateLot = false;
		
		me.columns = [{
			header	 : t('name'),
			dataIndex: 'config_title'
		},{
			header	 : t('value'),
			dataIndex: 'config_value'
		}];

		me.callParent(arguments);
	}
});
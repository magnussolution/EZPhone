/**
 * Classe que define o form de "Call"
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

Ext.define('CallCenter.view.logUsers.Form', {
    extend: 'Ext.ux.form.Panel',
	alias : 'widget.logusersform',

	initComponent: function() {
		var me = this;

		me.items = [{
			xtype     : 'usercombo',
			allowBlank: true,
			readOnly: true
		},{
			name	  : 'id_log_actions',
		    	fieldLabel: t('action'),
			readOnly: true
		},{
			name      : 'ip',
			fieldLabel: t('ip'),
			readOnly: true
		},{
			xtype: 'textareafield',
			name	  : 'description',
		    	fieldLabel: t('description'),
		    	height: 400,
               anchor: '100%',
               allowBlank: true,
               readOnly : true
		}];
	me.callParent(arguments);
	}
});
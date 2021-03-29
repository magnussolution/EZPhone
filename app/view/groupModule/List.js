/**
 * Class to define list of "GroupModule"
 *
 * Adilson Magnus <info@magnussolution.com> 
 * 15/04/2013
 */

Ext.define('CallCenter.view.groupModule.List', {
    extend: 'Ext.ux.grid.Panel',
    alias : 'widget.groupmodulelist',
    store : 'GroupModule',

	initComponent: function() {
		var me = this;

		me.columns = [{
			xtype:  'templatecolumn',
			tpl:  '{idGroupname}',
			text	 : t('IdGroup'),
			dataIndex: 'id_group',
			comboFilter: 'groupusercombo'
		},{
			xtype:  'templatecolumn',
			tpl:  '{idModuletext}',
			text	 : t('IdModule'),
			dataIndex: 'id_module',
			comboFilter: 'modulecombo'
		}];

		me.callParent(arguments);
	}
});
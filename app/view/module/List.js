/**
 * Class to define list of "Module"
 *
 * Adilson Magnus <info@magnussolution.com> 
 * 15/04/2013
 */

Ext.define('CallCenter.view.module.List', {
    extend: 'Ext.ux.grid.Panel',
    alias : 'widget.modulelist',
    store : 'Module',

	initComponent: function() {
		var me = this;

		me.columns = [{
			text	 : t('Id'),
			dataIndex: 'id'
		},{
			text	 : t('Text'),
			dataIndex: 'text'
		},{
			text	 : t('Module'),
			dataIndex: 'module'
		},{
			text	 : t('IconCls'),
			dataIndex: 'icon_cls'
		},{
			xtype:  'templatecolumn',
			tpl:  '{idModuletext}',
			text	 : t('Module Owner'),
			dataIndex: 'id_module',
			comboFilter: 'modulecombo'
		}];

		me.callParent(arguments);
	}
});
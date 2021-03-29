/**
 * Class to define form to "Module"
 *
 * Adilson Magnus <info@magnussolution.com> 
 * 15/04/2013
 */

Ext.define('CallCenter.view.module.Form', {
    extend: 'Ext.ux.form.Panel',
    alias : 'widget.moduleform',
    items : [{
		name	  : 'id',
		fieldLabel: t('Id'),
		disabled  : true
	},{
		name	  : 'text',
		fieldLabel: t('Text'),
		maxLength : 100
	},{
		name	  : 'module',
		fieldLabel: t('Module'),
		allowBlank: true,
		maxLength : 100
	},{
		name	  : 'icon_cls',
		fieldLabel: t('IconCls'),
		allowBlank: true,
		maxLength : 100
	},{
		xtype: 'modulecombo',
		fieldLabel: t('Module Owner'),
		allowBlank: true
	// },{
	// 	xtype: 'groupusertag',
	// 	allowBlank: true
	}]
});
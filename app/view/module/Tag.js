/**
 * Class to define tag of "module"
 *
 * Adilson Magnus <info@magnussolution.com> 
 * 15/04/2013
 */
 
Ext.define('CallCenter.view.module.Tag', {
    extend      : 'Ext.form.field.Tag',
    alias       : 'widget.moduletag',
    name        : 'id_module',
    fieldLabel  : t('Module'),
    displayField: 'text',
    valueField  : 'id',
    store		: Ext.create('CallCenter.store.Module', {
    	proxy : {
			type  : 'uxproxy',
			module: 'module',
			limitParam: undefined
		}
    })
});
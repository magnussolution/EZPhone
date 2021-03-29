/**
 * Class to define form to "GroupModule"
 *
 * Adilson Magnus <info@magnussolution.com> 
 * 15/04/2013
 */

Ext.define('CallCenter.view.groupModule.Form', {
    extend: 'Ext.ux.form.Panel',
    alias : 'widget.groupmoduleform',
    items : [{
		xtype: 'groupusercombo'
	},{
		xtype: 'modulecombo'
	}]
});
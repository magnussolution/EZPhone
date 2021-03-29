/**
 * Module to management of "GroupUser"
 *
 * Adilson Magnus <info@magnussolution.com> 
 * 15/04/2013
 */

Ext.define('CallCenter.view.groupUser.Module', {
	extend  		:'Ext.ux.panel.Module',
	alias		: 'widget.groupusermodule',
	controller 	: 'groupuser',
	cfgEast 		: {flex: 3},
	collapsedForm  : false,
	collapsibleForm: false,
	widthForm	     : '60%'
});
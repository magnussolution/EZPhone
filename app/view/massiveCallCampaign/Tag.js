/**
 * Class to define tag of "phoneBook"
 *
 * Adilson Magnus <info@magnussolution.com> 
 * 15/04/2013
 */
 
Ext.define('CallCenter.view.massiveCallCampaign.Tag', {
    extend      : 'Ext.form.field.Tag',
    alias       : 'widget.massivecallcampaigntag',
    name        : 'id_massivecallcampaign',
    fieldLabel  : t('massivecallcampaign'),
    displayField: 'name',
    valueField  : 'id',
    store		: Ext.create('CallCenter.store.MassiveCallCampaign', {
    	proxy : {
			type  : 'uxproxy',
			module: 'massiveCallCampaign',
			limitParam: undefined
		}
    })
});
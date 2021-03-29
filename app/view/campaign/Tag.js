/**
 * Class to define tag of "phoneBook"
 *
 * Adilson Magnus <info@magnussolution.com> 
 * 15/04/2013
 */
 
Ext.define('CallCenter.view.campaign.Tag', {
    extend      : 'Ext.form.field.Tag',
    alias       : 'widget.campaigntag',
    name        : 'id_campaign',
    fieldLabel  : t('campaign'),
    displayField: 'name',
    valueField  : 'id',
    store		: Ext.create('CallCenter.store.Campaign', {
    	proxy : {
			type  : 'uxproxy',
			module: 'campaign',
			limitParam: undefined
		}
    })
});
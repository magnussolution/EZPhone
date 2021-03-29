/**
 * Classe que define a combo de "MassiveCallCampaignCombo"
 *
 * MagnusSolution.com <info@magnussolution.com>  
 * 28/10/2012
 */

Ext.define('CallCenter.view.massiveCallCampaign.Combo', {
	extend      : 'Ext.form.field.ComboBox',
	alias       : 'widget.massivecallcampaigncombo',
	name        : 'id_massivecallcampaign',
	fieldLabel  : t('Massive Call Campaign'),
	displayField: 'name',
	valueField  : 'id',
	forceSelection: true,
    editable: false,
	store		: Ext.create('CallCenter.store.MassiveCallCampaign', {
		proxy : {
			type  : 'uxproxy',
			module: 'massiveCallCampaign',
			limitParam: undefined
		}
	})
});
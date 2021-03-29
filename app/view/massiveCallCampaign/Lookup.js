/**
 * Class to define lookup of "user"
 *
 * Adilson Magnus <info@magnussolution.com> 
 * 05/09/2014
 */

Ext.define('CallCenter.view.massiveCallCampaign.Lookup', {
    extend      : 'Ext.ux.form.field.Lookup',
    alias       : 'widget.massivecallcampaignlookup',
    name        : 'id_massivecallcampaign',
    fieldLabel  : t('MassiveCallCampaign'),
    displayField: 'idMassiveCallCampaignname',
    displayFieldList: 'name',
    gridConfig  : {
        xtype       : 'massivecallcampaignlist',
        fieldSearch : 'name',
        columns     : [{
            header     : t('name'),
            dataIndex  : 'name',
            flex       : 2
        }]
    }
});
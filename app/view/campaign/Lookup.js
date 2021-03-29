/**
 * Class to define lookup of "user"
 *
 * Adilson Magnus <info@magnussolution.com> 
 * 05/09/2014
 */

Ext.define('CallCenter.view.campaign.Lookup', {
    extend      : 'Ext.ux.form.field.Lookup',
    alias       : 'widget.campaignlookup',
    name        : 'id_campaign',
    fieldLabel  : t('Campaign'),
    displayField: 'idCampaignname',
    displayFieldList: 'name',
    gridConfig  : {
        xtype       : 'campaignlist',
        fieldSearch : 'name',
        columns     : [{
            header     : t('name'),
            dataIndex  : 'name',
            flex       : 2
        }]
    }
});
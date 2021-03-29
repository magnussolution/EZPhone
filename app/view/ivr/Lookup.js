/**
 * Class to define lookup of "user"
 *
 * Adilson L. Magnus <info@magnusbilling.com> 
 * 05/09/2014
 */

Ext.define('CallCenter.view.ivr.Lookup', {
    extend      : 'Ext.ux.form.field.Lookup',
    alias       : 'widget.ivrlookup',
    name        : 'id_ivr',
    fieldLabel  : t('Ivr'),
    displayField: 'idIvrname',
    displayFieldList: 'name',
    gridConfig  : {
        xtype       : 'ivrlist',
        fieldSearch : 'name',
        columns     : [{
            header       : t('name'),
            dataIndex    : 'name',

            flex         : 5
        }]
    }
});
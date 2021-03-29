/**
 * Class to define lookup of "user"
 *
 * Adilson Magnus <info@magnussolution.com> 
 * 05/09/2014
 */

Ext.define('CallCenter.view.pools.Lookup', {
    extend      : 'Ext.ux.form.field.Lookup',
    alias       : 'widget.poolslookup',
    name        : 'id_pools',
    fieldLabel  : t('Pool'),
    displayField: 'question',
    displayFieldList: 'question',
    gridConfig  : {
        xtype       : 'poolslist',
        fieldSearch : 'question',
        columns     : [{
            header     : t('Id'),
            dataIndex  : 'id',
            flex       : 1
        },{
            header     : t('question'),
            dataIndex  : 'question',
            flex       : 2
        }]
    }
});
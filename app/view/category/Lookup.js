/**
 * Class to define lookup of "user"
 *
 * Adilson Magnus <info@magnussolution.com> 
 * 05/09/2014
 */

Ext.define('CallCenter.view.category.Lookup', {
    extend      : 'Ext.ux.form.field.Lookup',
    alias       : 'widget.categorylookup',
    name        : 'id_category',
    fieldLabel  : t('Category'),
    displayField: 'idCategoryname',
    displayFieldList: 'name',
    gridConfig  : {
        xtype       : 'categorylist',
        fieldSearch : 'name',
        columns     : [{
            header       : t('name'),
            dataIndex    : 'name',
            flex         : 5
        }]
    }
});
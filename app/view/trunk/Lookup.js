/**
 * Class to define lookup of "user"
 *
 * Adilson L. Magnus <info@magnusbilling.com> 
 * 05/09/2017
 */
Ext.define('CallCenter.view.trunk.Lookup', {
    extend: 'Ext.ux.form.field.Lookup',
    alias: 'widget.trunklookup',
    name: 'id_trunk',
    fieldLabel: t('Trunk'),
    displayField: 'idTrunktrunkcode',
    displayFieldList: 'trunkcode',
    gridConfig: {
        xtype: 'trunklist',
        fieldSearch: 'trunkcode',
        columns: [{
            header: t('trunkcode'),
            dataIndex: 'trunkcode'
        }]
    }
});
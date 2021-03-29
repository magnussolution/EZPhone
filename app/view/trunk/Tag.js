/**
 * Classe que define a tag de "Trunk"
 *
 * MagnusSolution.com <info@magnussolution.com>  
 * 04/07/2012
 */

Ext.define('CallCenter.view.trunk.Tag', {
    extend      : 'Ext.form.field.Tag',
    alias       : 'widget.trunktag',
    name        : 'id_trunk',
    fieldLabel  : t('trunk'),
    displayField: 'trunkcode',
    valueField  : 'id',
    store       : Ext.create('CallCenter.store.Trunk', {
        proxy : {
            type  : 'uxproxy',
            module: 'trunk',
            limitParam: undefined
        }
    })
});
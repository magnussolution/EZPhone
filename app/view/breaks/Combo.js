/**
 * Classe que define a combo de "Trunkcombobackup"
 *
 * MagnusSolution.com <info@magnussolution.com>  
 * 04/07/2012
 */


Ext.define('CallCenter.view.breaks.Combo', {
    extend      : 'Ext.form.field.ComboBox',
    alias       : 'widget.breakscombo',
    name        : 'id_breaks',
    fieldLabel  : t('Break'),
    forceSelection: true,
    editable: false,
    displayField: 'name',
    valueField  : 'id',
    store       : Ext.create('CallCenter.store.Breaks', {
        proxy : {
            type  : 'uxproxy',
            module: 'breaks',
            limitParam: undefined
        }
    })
});
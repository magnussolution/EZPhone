/**
 * Classe que define a combo de "Providercombo"
 *
 * MagnusSolution.com <info@magnussolution.com>  
 * 04/07/2012
 */
Ext.define('CallCenter.view.provider.Combo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.providercombo',
    name: 'id_provider',
    fieldLabel: t('provider'),
    displayField: 'provider_name',
    valueField: 'id',
    forceSelection: true,
    editable: false,
    store: Ext.create('CallCenter.store.Provider', {
        proxy: {
            type: 'uxproxy',
            module: 'provider',
            limitParam: undefined
        }
    })
});
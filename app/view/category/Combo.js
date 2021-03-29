/**
 * Classe que define a combo de "CampaignCombo"
 *
 * MagnusSolution.com <info@magnussolution.com>  
 * 28/10/2012
 */
Ext.define('CallCenter.view.category.Combo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.categorycombo',
    name: 'id_category',
    fieldLabel: t('category'),
    displayField: 'name',
    valueField: 'id',
    forceSelection: true,
    editable: false,
    store: Ext.create('CallCenter.store.Category', {
        proxy: {
            type: 'uxproxy',
            module: 'category',
            limitParam: undefined
        }
    }),
    tpl: Ext.create('Ext.XTemplate', '<tpl for=".">', '<div class="x-boundlist-item" style="border-bottom:1px solid #f0f0f0; background-color: {color};">', '<div>{name}</div></div>', '</tpl>'),
    displayTpl: Ext.create('Ext.XTemplate', '<tpl for=".">', '{name}', '</tpl>')
});
/**
 * Classe que define o form de "Campaign"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 28/10/2012
 */
Ext.define('CallCenter.view.category.Form', {
    extend: 'Ext.ux.form.Panel',
    uses: ['Ext.ux.form.field.DateTime', 'Ext.form.RadioGroup'],
    alias: 'widget.categoryform',
    initComponent: function() {
        var me = this;
        me.items = [{
            name: 'name',
            fieldLabel: t('name')
        }, {
            name: 'color',
            fieldLabel: t('Color')
        }, {
            xtype: 'colorpicker',
            name: 'color2',
            value: 'FF00FF',
            fieldLabel: t('color')
        }, {
            xtype: 'booleancombo',
            name: 'status',
            fieldLabel: t('status')
        }, {
            xtype: 'noyescombo',
            name: 'use_in_efetiva',
            fieldLabel: t('Use to success')
        }, {
            xtype: 'textareafield',
            name: 'description',
            fieldLabel: t('description'),
            allowBlank: true
        }];
        me.callParent(arguments);
    }
});
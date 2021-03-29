/**
 * Classe que define o form de "PhoneBook"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 28/10/2012
 */
Ext.define('CallCenter.view.phoneBook.Form', {
    extend: 'Ext.ux.form.Panel',
    uses: ['Ext.ux.form.field.DateTime', 'Ext.form.RadioGroup'],
    alias: 'widget.phonebookform',
    bodyPadding: 0,
    fieldsHideUpdateLot: ['name'],
    initComponent: function() {
        var me = this;
        me.items = [{
            name: 'name',
            fieldLabel: t('name')
        }, {
            xtype: 'trunkcombo',
            hidden: App.user.isOperator,
            hideable: !App.user.isOperator
        }, {
            xtype: 'booleancombo',
            name: 'status',
            fieldLabel: t('status')
        }, {
            xtype: 'numberfield',
            name: 'reprocessar',
            value: '0',
            minValue: '0',
            maxValue: '10',
            fieldLabel: t('Reprocessar Inativos')
        }, {
            xtype: 'yesnocombo',
            name: 'show_numbers_operator',
            fieldLabel: t('Mostrar para Operadores')
        }, {
            xtype: 'noyescombo',
            name: 'portabilidadeFixed',
            fieldLabel: t('Portabilidade Fixo'),
            hidden: true
        }, {
            xtype: 'noyescombo',
            name: 'portabilidadeMobile',
            fieldLabel: t('Portabilidade Celular'),
            hidden: true
        }, {
            xtype: 'textareafield',
            name: 'description',
            fieldLabel: t('description'),
            allowBlank: true
        }];
        me.callParent(arguments);
    }
});
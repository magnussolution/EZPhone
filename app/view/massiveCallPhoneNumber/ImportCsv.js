/**
 * Classe que define a window import csv de "Rate"
 *
 * =======================================
 * ###################################
 * MagnusBilling
 *
 * @package MagnusBilling
 * @author  Adilson Leffa Magnus.
 * @copyright   Todos os direitos reservados.
 * ###################################
 * =======================================
 * MagnusSolution.com <info@magnussolution.com>
 * 08/11/2012
 */
Ext.define('CallCenter.view.massiveCallPhoneNumber.ImportCsv', {
    extend: 'Ext.ux.window.ImportCsv',
    alias: 'widget.massivecallphonenumberimportcsv',
    labelWidthFields: 160,
    height: 240,
    fieldsImport: [{
        xtype: 'massivecallphonebookcombo',
        width: 350
    }, {
        xtype: 'combobox',
        name: 'delimiter',
        fieldLabel: t('Delimiter'),
        width: 230,
        forceSelection: true,
        editable: false,
        value: ';',
        store: [
            [';', '; (' + t('Semicolon') + ')'],
            [',', ', (' + t('Comma') + ')']
        ]
    }, {
        xtype: 'noyescombo',
        name: 'allowDuplicate',
        fieldLabel: t('Remove duplicated numbers')
    }]
});
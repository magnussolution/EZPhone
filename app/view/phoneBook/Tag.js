/**
 * Class to define tag of "phoneBook"
 *
 * Adilson Magnus <info@magnussolution.com> 
 * 15/04/2013
 */
 
Ext.define('CallCenter.view.phonebook.Tag', {
    extend      : 'Ext.form.field.Tag',
    alias       : 'widget.phonebooktag',
    name        : 'id_phonebook',
    fieldLabel  : t('phonebook'),
    displayField: 'name',
    valueField  : 'id',
    store       : Ext.create('CallCenter.store.PhoneBook', {
        proxy : {
            type  : 'uxproxy',
            module: 'phoneBook',
            limitParam: undefined
        }
    })
});
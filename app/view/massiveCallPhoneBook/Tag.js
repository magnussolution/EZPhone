/**
 * Class to define tag of "phoneBook"
 *
 * Adilson Magnus <info@magnussolution.com> 
 * 15/04/2013
 */
 
Ext.define('CallCenter.view.massiveCallPhoneBook.Tag', {
    extend      : 'Ext.form.field.Tag',
    alias       : 'widget.massivecallphonebooktag',
    name        : 'id_massive_call_phonebook',
    fieldLabel  : t('Massive Call phonebook'),
    displayField: 'name',
    valueField  : 'id',
    store       : Ext.create('CallCenter.store.MassiveCallPhoneBook', {
        proxy : {
            type  : 'uxproxy',
            module: 'massiveCallPhoneBook',
            limitParam: undefined
        }
    })
});
/**
 * Classe que define a combo de "PhoneBookCombo"
 *
 * MagnusSolution.com <info@magnussolution.com>  
 * 28/10/2012
 */

Ext.define('CallCenter.view.phoneBook.Combo', {
	extend      : 'Ext.form.field.ComboBox',
	alias       : 'widget.phonebookcombo',
	name        : 'id_phonebook',
	fieldLabel  : t('phonebook'),
	displayField: 'name',
    forceSelection: true,
    editable: false,
	valueField  : 'id',
	store		: Ext.create('CallCenter.store.PhoneBook', {
		proxy : {
			type  : 'uxproxy',
			module: 'phoneBook',
			limitParam: undefined
		}
	})
});

/**
 * Classe que define a combo de "PhoneBookCombo"
 *
 * MagnusSolution.com <info@magnussolution.com>  
 * 28/10/2012
 */

Ext.define('CallCenter.view.massiveCallPhoneBook.Combo', {
	extend      : 'Ext.form.field.ComboBox',
	alias       : 'widget.massivecallphonebookcombo',
	name        : 'id_massive_call_phonebook',
	fieldLabel  : t('Massive Call phonebook'),
	displayField: 'name',
    forceSelection: true,
    editable: false,
	valueField  : 'id',
	store		: Ext.create('CallCenter.store.MassiveCallPhoneBook', {
		proxy : {
			type  : 'uxproxy',
			module: 'massiveCallPhoneBook',
			limitParam: undefined
		}
	})
});

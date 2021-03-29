/**
 * Classe que define a lista de "PhoneNumber"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 19/09/2012
 */
Ext.define('CallCenter.view.massiveCallPhoneNumber.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.massivecallphonenumberlist',
    store: 'MassiveCallPhoneNumber',
    fieldSearch: 'number',
    initComponent: function() {
        var me = this,
            columns = [];
        me.buttonImportCsv = App.user.isAdmin,
            me.allowPrint = !App.user.isOperator;
        me.buttonUpdateLot = App.user.isAadmin;
        me.buttonCsv = !App.user.isOperator;
        me.buttonUpdateLot = App.user.updateAll;
        me.columns = [{
            header: t('ID'),
            dataIndex: 'id',
            flex: 1
        }, {
            header: t('number'),
            dataIndex: 'number',
            flex: 4,
            menuDisabled: !App.user.isAdmin
        }, {
            header: t('name'),
            dataIndex: 'name',
            flex: 4
        }, {
            xtype: 'templatecolumn',
            tpl: '{idMassiveCallPhonebookname}',
            header: t('Massive Call phonebook'),
            dataIndex: 'id_massive_call_phonebook',
            comboFilter: 'massivecallphonebookcombo',
            flex: 4
            //filter	     : {type: 'string', field: 'pkg_phonebook.name'}
        }, {
            header: t('status'),
            dataIndex: 'status',
            renderer: Helper.Util.formatBooleanActive,
            comboRelated: 'statuscombo',
            flex: 2,
            filter: {
                type: 'list',
                options: [
                    [1, t('active')],
                    [0, t('inactive')],
                    [2, t('pending')],
                    [3, t('send')],
                    [4, t('blocked')]
                ]
            }
        }, {
            header: t('creationdate'),
            dataIndex: 'creationdate',
            renderer: Helper.Util.formatDateTime,
            flex: 4,
            hidden: true
        }, {
            header: t('description'),
            dataIndex: 'info',
            flex: 4,
            hidden: true
        }, {
            header: t('city'),
            dataIndex: 'city',
            flex: 4,
            hidden: true
        }, {
            header: t('state'),
            dataIndex: 'state',
            flex: 4,
            hidden: true
        }, {
            header: t('email'),
            dataIndex: 'email',
            flex: 4,
            hidden: true
        }, {
            header: t('address'),
            dataIndex: 'address',
            flex: 4,
            hidden: true
        }, {
            header: t('country'),
            dataIndex: 'country',
            flex: 4,
            hidden: true
        }, {
            header: 'dni',
            dataIndex: 'dni',
            flex: 4,
            hidden: true
        }, {
            header: t('mobile'),
            dataIndex: 'mobile',
            flex: 4,
            hidden: true
        }, {
            header: 'mobile_2',
            dataIndex: 'mobile_2',
            flex: 4,
            hidden: true
        }, {
            header: t('number') + ' ' + t('homes'),
            dataIndex: 'number_home',
            flex: 4,
            hidden: true
        }, {
            header: t('number') + ' ' + t('office'),
            dataIndex: 'number_office',
            flex: 4,
            hidden: true
        }, {
            header: t('type') + ' ' + t('user'),
            dataIndex: 'type_user',
            flex: 4,
            hidden: true
        }, {
            header: t('birth_date'),
            dataIndex: 'birth_date',
            flex: 4,
            renderer: Ext.util.Format.dateRenderer('Y-m-d'),
            hidden: true
        }, {
            header: t('company'),
            dataIndex: 'company',
            flex: 4,
            hidden: true
        }, {
            header: t('edad'),
            dataIndex: 'edad',
            flex: 4,
            hidden: true
        }, {
            header: t('profesion'),
            dataIndex: 'profesion',
            flex: 4,
            hidden: true
        }, {
            header: t('sexo'),
            dataIndex: 'sexo',
            flex: 4,
            hidden: true
        }, {
            header: t('description'),
            dataIndex: 'info',
            flex: 4,
            hidden: true
        }];
        me.callParent(arguments);
    }
});
/**
 * Classe que define a lista de "PhoneNumber"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 19/09/2012
 */
Ext.define('CallCenter.view.phoneNumber.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.phonenumberlist',
    store: 'PhoneNumber',
    initComponent: function() {
        var me = this,
            columns = [];
        if (!App.user.isOperator) {
            me.fieldSearch = 'number';
        }
        me.buttonImportCsv = !App.user.isOperator;
        me.allowPrint = !App.user.isOperator;
        me.buttonUpdateLot = App.user.isAadmin;
        me.buttonCsv = !App.user.isOperator;
        me.buttonUpdateLot = App.user.updateAll;
        me.extraButtons = [{
            text: t('Reprocessar'),
            iconCls: 'callshop',
            handler: 'reprocesar',
            hidden: App.user.isOperator,
            reference: 'reprocesar'
        }, {
            text: t('Inat/Act'),
            glyph: icons.support,
            handler: 'inactveActive',
            hidden: App.user.isOperator,
            reference: 'inactveActive'
        }, {
            text: t('Map'),
            glyph: icons.support,
            handler: 'handleMapReady',
            hidden: true,
            reference: 'map'
        }];
        columns = [{
            header: t('ID'),
            dataIndex: 'id',
            flex: 1
        }, {
            header: t('number'),
            dataIndex: 'number',
            flex: 4,
            menuDisabled: App.user.isOperator
        }, {
            header: t('name'),
            dataIndex: 'name',
            flex: 4
        }, {
            xtype: 'templatecolumn',
            tpl: '{idPhonebookname}',
            header: t('phonebook'),
            dataIndex: 'id_phonebook',
            comboFilter: 'phonebookcombo',
            flex: 4
            //filter         : {type: 'string', field: 'pkg_phonebook.name'}
        }, {
            xtype: 'templatecolumn',
            tpl: '{idCategoryname}',
            header: t('category'),
            dataIndex: 'id_category',
            comboFilter: 'categorycombo',
            flex: 4
        }, {
            header: t('creationdate'),
            dataIndex: 'creationdate',
            renderer: Helper.Util.formatDateTime,
            flex: 4,
            hidden: true
        }, {
            header: t('datebackcall'),
            dataIndex: 'datebackcall',
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
            header: t('dni'),
            dataIndex: 'dni',
            flex: 4,
            hidden: true
        }, {
            header: t('CPF'),
            dataIndex: 'cpf',
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
            header: t('option') + ' 1',
            dataIndex: 'option_1',
            flex: 4,
            hidden: true
        }, {
            header: t('option') + ' 2',
            dataIndex: 'option_2',
            flex: 4,
            hidden: true
        }, {
            header: t('option') + ' 3',
            dataIndex: 'option_3',
            flex: 4,
            hidden: true
        }, {
            header: t('option') + ' 4',
            dataIndex: 'option_4',
            flex: 4,
            hidden: true
        }, {
            header: t('option') + ' 5',
            dataIndex: 'option_5',
            flex: 4,
            hidden: true
        }, {
            header: t('description'),
            dataIndex: 'info',
            flex: 4,
            hidden: true
        }];
        me.columns = [];
        Ext.each(columns, function(col) {
            if ((me.module.fieldsAllow.indexOf(col.dataIndex) !== -1) || App.user.isAdmin || App.user.isTeam) {
                me.columns.push(col);
            }
        });
        me.callParent(arguments);
    }
});
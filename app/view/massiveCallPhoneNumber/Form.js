/**
 * Classe que define o form de "PhoneNumber"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 28/10/2012
 */
Ext.define('CallCenter.view.massiveCallPhoneNumber.Form', {
    extend: 'Ext.ux.form.Panel',
    alias: 'widget.massivecallphonenumberform',
    fieldsHideUpdateLot: ['number', 'id_massive_call_phonebook', 'name', 'email', 'address', 'description'],
    header: false,
    bodyPadding: 0,
    initComponent: function() {
        var me = this;
        me.items = [{
            xtype: 'tabpanel',
            defaults: {
                border: false,
                defaultType: 'textfield',
                layout: 'anchor',
                bodyPadding: 0,
                defaults: {
                    labelAlign: 'right',
                    labelWidth: 150,
                    width: 280,
                    allowBlank: false,
                    msgTarget: 'side',
                    enableKeyEvents: true,
                    plugins: 'markallowblank',
                    anchor: '100%',
                    layout: {
                        type: 'hbox',
                        defaultMargins: {
                            top: 0,
                            right: 5,
                            bottom: 0,
                            left: 0
                        }
                    }
                }
            },
            items: [{
                title: t('general'),
                items: [{
                    fieldLabel: t('phonebook'),
                    xtype: 'massivecallphonebookcombo',
                    name: 'id_massive_call_phonebook'
                }, {
                    xtype: 'numberfield',
                    name: 'number',
                    fieldLabel: t('number'),
                    maxLength: 30,
                    minLength: 2
                }, {
                    xtype: 'statuscombo',
                    name: 'status',
                    fieldLabel: t('status')
                }, {
                    name: 'name',
                    fieldLabel: t('name'),
                    allowBlank: true
                }, {
                    name: 'email',
                    fieldLabel: t('email'),
                    allowBlank: true
                }, {
                    name: 'email2',
                    fieldLabel: t('email') + ' 2',
                    allowBlank: true
                }, {
                    name: 'email3',
                    fieldLabel: t('email') + ' 3',
                    allowBlank: true
                }, {
                    name: 'dni',
                    fieldLabel: t('dni'),
                    allowBlank: true
                }, {
                    name: 'address',
                    fieldLabel: t('address'),
                    allowBlank: true
                }, {
                    name: 'city',
                    fieldLabel: t('city'),
                    allowBlank: true
                }, {
                    name: 'state',
                    fieldLabel: t('state'),
                    allowBlank: true
                }, {
                    xtype: 'numberfield',
                    name: 'zip_code',
                    fieldLabel: t('zipcode'),
                    allowBlank: true
                }, {
                    name: 'country',
                    fieldLabel: t('country'),
                    allowBlank: true
                }, {
                    name: 'company',
                    fieldLabel: t('company'),
                    allowBlank: true
                }, {
                    xtype: 'textareafield',
                    name: 'info',
                    fieldLabel: t('description'),
                    allowBlank: true
                }]
            }, {
                title: t('suplementaryInfo'),
                items: [{
                    xtype: 'numberfield',
                    name: 'mobile',
                    fieldLabel: t('mobile'),
                    allowBlank: true,
                    maxLength: 30,
                    minLength: 2
                }, {
                    xtype: 'numberfield',
                    name: 'mobile_2',
                    fieldLabel: t('mobile') + ' 2',
                    allowBlank: true,
                    maxLength: 30,
                    minLength: 2
                }, {
                    xtype: 'numberfield',
                    name: 'number_home',
                    fieldLabel: t('number') + ' ' + t('homes'),
                    allowBlank: true,
                    maxLength: 30,
                    minLength: 2
                }, {
                    xtype: 'numberfield',
                    name: 'number_office',
                    maxLength: 30,
                    minLength: 2,
                    fieldLabel: t('number') + ' ' + t('office'),
                    allowBlank: true
                }, {
                    name: 'type_user',
                    fieldLabel: t('type') + ' ' + t('user'),
                    allowBlank: true
                }, {
                    name: 'birth_date',
                    fieldLabel: t('birth_date'),
                    allowBlank: true
                }, {
                    xtype: 'numberfield',
                    name: 'edad',
                    fieldLabel: t('edad'),
                    allowBlank: true
                }, {
                    name: 'profesion',
                    fieldLabel: t('profesion'),
                    maxLength: 50,
                    minLength: 4,
                    allowBlank: true
                }, {
                    name: 'sexo',
                    fieldLabel: t('sexo'),
                    maxLength: 10,
                    minLength: 1,
                    allowBlank: true
                }]
            }, {
                title: t('Dados do Cliente'),
                items: [{
                    xtype: 'numberfield',
                    name: 'beneficio_number',
                    fieldLabel: t('Numero de beneficio'),
                    allowBlank: true
                }, {
                    xtype: 'numberfield',
                    name: 'quantidade_transacoes',
                    fieldLabel: t('Quantidade de transações'),
                    allowBlank: true
                }, {
                    name: 'inicio_beneficio',
                    fieldLabel: t('Data do Inicio do beneficio'),
                    allowBlank: true
                }, {
                    xtype: 'moneyfield',
                    mask: 'R$ #9.999.990,00',
                    name: 'beneficio_valor',
                    fieldLabel: t('Valor do Beneficio'),
                    allowBlank: true
                }, {
                    name: 'banco',
                    fieldLabel: t('Banco'),
                    allowBlank: true
                }, {
                    name: 'agencia',
                    fieldLabel: t('Agencia'),
                    allowBlank: true
                }, {
                    name: 'conta',
                    fieldLabel: t('Conta corrente '),
                    allowBlank: true
                }, {
                    name: 'address_complement',
                    fieldLabel: t('Endereço complementar'),
                    allowBlank: true
                }, {
                    name: 'telefone_fixo1',
                    fieldLabel: t('Telefone fixo 1'),
                    allowBlank: true
                }, {
                    name: 'telefone_fixo2',
                    fieldLabel: t('Telefone fixo 2'),
                    allowBlank: true
                }, {
                    name: 'telefone_fixo3',
                    fieldLabel: t('Telefone fixo 3'),
                    allowBlank: true
                }, {
                    name: 'telefone_celular1',
                    fieldLabel: t('Telefone celular 1'),
                    allowBlank: true
                }, {
                    name: 'telefone_celular2',
                    fieldLabel: t('Telefone celular 2'),
                    allowBlank: true
                }, {
                    name: 'telefone_celular3',
                    fieldLabel: t('Telefone celular 3'),
                    allowBlank: true
                }]
            }, {
                title: t('Informação Extra'),
                items: [{
                    name: 'telefone_fixo_comercial1',
                    fieldLabel: t('Telefone fixo comercial 1'),
                    allowBlank: true
                }, {
                    name: 'telefone_fixo_comercial2',
                    fieldLabel: t('Telefone fixo comercial 2'),
                    allowBlank: true
                }, {
                    name: 'telefone_fixo_comercial3',
                    fieldLabel: t('Telefone fixo comercial 3'),
                    allowBlank: true
                }, {
                    name: 'parente1',
                    fieldLabel: t('Parente 1'),
                    allowBlank: true
                }, {
                    name: 'fone_parente1',
                    fieldLabel: t('Telefone parente 1'),
                    allowBlank: true
                }, {
                    name: 'parente2',
                    fieldLabel: t('Parente 2'),
                    allowBlank: true
                }, {
                    name: 'fone_parente2',
                    fieldLabel: t('Telefone parente 2'),
                    allowBlank: true
                }, {
                    name: 'parente3',
                    fieldLabel: t('Parente 3'),
                    allowBlank: true
                }, {
                    name: 'fone_parente3',
                    fieldLabel: t('Telefone parente 3'),
                    allowBlank: true
                }, {
                    name: 'vizinho1',
                    fieldLabel: t('Vizinho 1'),
                    allowBlank: true
                }, {
                    name: 'telefone_vizinho1',
                    fieldLabel: t('Telefone Vizinho 1'),
                    allowBlank: true
                }, {
                    name: 'vizinho2',
                    fieldLabel: t('Vizinho 2'),
                    allowBlank: true
                }, {
                    name: 'telefone_vizinho2',
                    fieldLabel: t('Telefone Vizinho 2'),
                    allowBlank: true
                }, {
                    name: 'vizinho3',
                    fieldLabel: t('Vizinho 3'),
                    allowBlank: true
                }, {
                    name: 'telefone_vizinho3',
                    fieldLabel: t('Telefone Vizinho 3'),
                    allowBlank: true
                }]
            }]
        }];
        me.callParent(arguments);
    }
});
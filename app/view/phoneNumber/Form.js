/**
 * Classe que define o form de "PhoneNumber"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 28/10/2012
 */
Ext.define('CallCenter.view.phoneNumber.Form', {
    extend: 'Ext.ux.form.Panel',
    alias: 'widget.phonenumberform',
    fieldsHideUpdateLot: ['number', 'id_phonebook', 'name', 'email', 'address', 'description', 'hours', 'minutes', 'seconds'],
    header: false,
    bodyPadding: 0,
    initComponent: function() {
        var me = this;
        /* me.extraButtons = [{
             text: '<font color=green>' + t('sendCall') + '</font>',
             iconCls: 'call',
             handler: 'addCall',
             width: 100,
             height: 30,
             hidden: App.user.isAdmin,
             reference: 'addcall'
         }];*/
        me.items = [{
            xtype: 'tabpanel',
            defaults: {
                border: false,
                defaultType: 'textfield',
                layout: 'anchor',
                bodyPadding: 5,
                defaults: {
                    labelAlign: 'right',
                    plugins: 'markallowblank',
                    allowBlank: false,
                    anchor: '100%',
                    enableKeyEvents: true,
                    labelWidth: 150
                }
            },
            items: [{
                    title: t('general'),
                    items: [{
                        fieldLabel: t('phonebook'),
                        xtype: 'phonebookcombo',
                        name: 'id_phonebook',
                        value: App.user.isOperator ? parseFloat(App.user.phonebookID) : '',
                        hidden: (me.module.fieldsAllow.indexOf('id_phonebook') === -1) && App.user.isOperator
                    }, {
                        xtype: 'categorycombo',
                        name: 'id_category'
                    }, {
                        xtype: 'datetimefield',
                        forceSelection: true,
                        editable: false,
                        name: 'datebackcall',
                        fieldLabel: t('datebackcall'),
                        format: 'Y-m-d H:i:s',
                        value: new Date(),
                        allowBlank: true,
                        hidden: true
                    }, {
                        xtype: 'typedatebackcall',
                        name: 'cita_concreta',
                        fieldLabel: t('Cita concreta'),
                        allowBlank: true,
                        hidden: true
                    }, {
                        xtype: 'userlookup',
                        ownerForm: me,
                        name: 'id_user',
                        displayField: 'idUsername',
                        hidden: true
                    }, {
                        hidden: (me.module.fieldsAllow.indexOf('number') === -1) && App.user.isOperator,
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        labelWidth: 100,
                        defaults: {
                            xtype: 'textfield',
                            labelAlign: 'right',
                            labelWidth: 150,
                            flex: 1
                        },
                        items: [{
                            xtype: 'numberfield',
                            name: 'number',
                            fieldLabel: '<b>' + t('number') + '</b>',
                            allowBlank: true,
                            maxLength: 30,
                            minLength: 2,
                            flex: 8
                        }, {
                            xtype: 'button',
                            iconCls: 'call',
                            handler: 'addCall',
                            width: 5,
                            style: 'margin-top:0px;',
                            hidden: App.user.isAdmin,
                            reference: 'addcall',
                            name: 'number',
                            flex: 1
                        }]
                    }, {
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        labelAlign: 'right',
                        defaults: {
                            xtype: 'textfield',
                            labelAlign: 'right',
                            flex: 1,
                            allowBlank: true
                        },
                        items: [{
                            hidden: (me.module.fieldsAllow.indexOf('mobile') === -1) && App.user.isOperator,
                            xtype: 'fieldcontainer',
                            layout: 'hbox',
                            labelWidth: 100,
                            defaults: {
                                xtype: 'textfield',
                                labelAlign: 'right',
                                labelWidth: 150,
                                flex: 1
                            },
                            items: [{
                                xtype: 'numberfield',
                                name: 'mobile',
                                fieldLabel: '<b>' + t('mobile') + '</b>',
                                allowBlank: true,
                                maxLength: 30,
                                minLength: 2,
                                flex: 8
                            }, {
                                xtype: 'button',
                                iconCls: 'call',
                                handler: 'addCall',
                                width: 5,
                                style: 'margin-top:0px;',
                                hidden: App.user.isAdmin,
                                reference: 'addcall',
                                name: 'mobile',
                                flex: 1
                            }]
                        }, {
                            hidden: (me.module.fieldsAllow.indexOf('mobile_2') === -1) && App.user.isOperator,
                            xtype: 'fieldcontainer',
                            layout: 'hbox',
                            defaults: {
                                xtype: 'textfield',
                                labelAlign: 'right',
                                labelWidth: 80,
                                flex: 1
                            },
                            items: [{
                                xtype: 'numberfield',
                                name: 'mobile_2',
                                fieldLabel: '<b>' + t('mobile') + ' 2' + '</b>',
                                allowBlank: true,
                                maxLength: 30,
                                minLength: 2,
                                flex: 8
                            }, {
                                xtype: 'button',
                                iconCls: 'call',
                                handler: 'addCall',
                                width: 5,
                                style: 'margin-top:0px;',
                                hidden: App.user.isAdmin,
                                reference: 'addcall',
                                name: 'mobile_2',
                                flex: 1
                            }]
                        }]
                    }, {
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        labelAlign: 'right',
                        defaults: {
                            xtype: 'textfield',
                            labelAlign: 'right',
                            flex: 1,
                            allowBlank: true
                        },
                        items: [{
                            hidden: (me.module.fieldsAllow.indexOf('number_home') === -1) && App.user.isOperator,
                            xtype: 'fieldcontainer',
                            layout: 'hbox',
                            labelWidth: 100,
                            defaults: {
                                xtype: 'textfield',
                                labelAlign: 'right',
                                labelWidth: 150,
                                flex: 1
                            },
                            items: [{
                                xtype: 'numberfield',
                                name: 'number_home',
                                fieldLabel: '<b>' + t('homes') + '</b>',
                                allowBlank: true,
                                maxLength: 30,
                                minLength: 2,
                                flex: 8
                            }, {
                                xtype: 'button',
                                iconCls: 'call',
                                handler: 'addCall',
                                width: 5,
                                style: 'margin-top:0px;',
                                hidden: App.user.isAdmin,
                                reference: 'addcall',
                                name: 'number_home',
                                flex: 1
                            }]
                        }, {
                            hidden: (me.module.fieldsAllow.indexOf('number_office') === -1) && App.user.isOperator,
                            xtype: 'fieldcontainer',
                            layout: 'hbox',
                            defaults: {
                                xtype: 'textfield',
                                labelAlign: 'right',
                                labelWidth: 80,
                                flex: 1
                            },
                            items: [{
                                xtype: 'numberfield',
                                name: 'number_office',
                                fieldLabel: '<b>' + t('office') + '</b>',
                                allowBlank: true,
                                maxLength: 30,
                                minLength: 2,
                                flex: 8
                            }, {
                                xtype: 'button',
                                iconCls: 'call',
                                handler: 'addCall',
                                width: 5,
                                style: 'margin-top:0px;',
                                hidden: App.user.isAdmin,
                                reference: 'addcall',
                                name: 'number_office',
                                flex: 1
                            }]
                        }]
                    }, {
                        name: 'name',
                        fieldLabel: t('name'),
                        allowBlank: true,
                        hidden: (me.module.fieldsAllow.indexOf('name') === -1) && App.user.isOperator
                    }, {
                        name: 'email',
                        fieldLabel: t('email'),
                        allowBlank: true,
                        hidden: (me.module.fieldsAllow.indexOf('email') === -1) && App.user.isOperator
                    }, {
                        name: 'email2',
                        fieldLabel: t('email') + ' 2',
                        allowBlank: true,
                        hidden: (me.module.fieldsAllow.indexOf('email2') === -1) && App.user.isOperator
                    }, {
                        name: 'email3',
                        fieldLabel: t('email') + ' 3',
                        allowBlank: true,
                        hidden: (me.module.fieldsAllow.indexOf('email3') === -1) && App.user.isOperator
                    }, {
                        name: 'dni',
                        fieldLabel: t('dni'),
                        allowBlank: true,
                        hidden: (me.module.fieldsAllow.indexOf('dni') === -1) && App.user.isOperator
                    }, {
                        name: 'cpf',
                        fieldLabel: t('cpf'),
                        allowBlank: true,
                        hidden: (me.module.fieldsAllow.indexOf('cpf') === -1) && App.user.isOperator
                    }, {
                        name: 'address',
                        fieldLabel: t('address'),
                        allowBlank: true,
                        hidden: (me.module.fieldsAllow.indexOf('address') === -1) && App.user.isOperator
                    }, {
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        labelAlign: 'right',
                        defaults: {
                            xtype: 'textfield',
                            labelAlign: 'right',
                            flex: 1
                        },
                        items: [{
                            xtype: 'numberfield',
                            name: 'address_number',
                            fieldLabel: t('Número'),
                            maxValue: 999999,
                            minValue: 0,
                            labelWidth: 150,
                            allowBlank: true,
                            flex: 3,
                            hidden: (me.module.fieldsAllow.indexOf('address_number') === -1) && App.user.isOperator
                        }, {
                            name: 'address_complement',
                            fieldLabel: t('Complement'),
                            labelWidth: 90,
                            allowBlank: true,
                            flex: 5,
                            hidden: (me.module.fieldsAllow.indexOf('address_complement') === -1) && App.user.isOperator
                        }]
                    }, {
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        labelAlign: 'right',
                        defaults: {
                            xtype: 'textfield',
                            labelAlign: 'right',
                            flex: 1,
                            allowBlank: true
                        },
                        items: [{
                            name: 'neighborhood',
                            fieldLabel: t('neighborhood'),
                            labelWidth: 150,
                            hidden: (me.module.fieldsAllow.indexOf('neighborhood') === -1) && App.user.isOperator
                        }, {
                            name: 'zip_code',
                            fieldLabel: t('zip_code'),
                            labelWidth: 90,
                            hidden: (me.module.fieldsAllow.indexOf('zip_code') === -1) && App.user.isOperator
                        }]
                    }, {
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        labelAlign: 'right',
                        defaults: {
                            xtype: 'textfield',
                            labelAlign: 'right',
                            flex: 1,
                            allowBlank: true
                        },
                        items: [{
                            name: 'city',
                            fieldLabel: t('city'),
                            labelWidth: 150,
                            hidden: (me.module.fieldsAllow.indexOf('city') === -1) && App.user.isOperator
                        }, {
                            name: 'state',
                            fieldLabel: t('state'),
                            labelWidth: 90,
                            hidden: (me.module.fieldsAllow.indexOf('state') === -1) && App.user.isOperator
                        }]
                    }, {
                        layout: {
                            type: 'hbox',
                            defaultMargins: {
                                top: 0,
                                right: 5,
                                bottom: 0,
                                left: 0
                            }
                        },
                        xtype: 'fieldcontainer',
                        hidden: true,
                        //hidden: (me.module.fieldsAllow.indexOf('sessiontime') === -1) && App.user.isOperator,
                        fieldLabel: t('Tiempo de Llamada'),
                        combineErrors: true,
                        defaults: {
                            hideLabel: true
                        },
                        items: [{
                            name: 'hours',
                            xtype: 'numberfield',
                            width: 95,
                            allowBlank: true,
                            value: 0,
                            maxValue: 23,
                            minValue: 0
                        }, {
                            xtype: 'displayfield',
                            value: 'hours '
                        }, {
                            name: 'minutes',
                            xtype: 'numberfield',
                            width: 95,
                            allowBlank: true,
                            value: 0,
                            maxValue: 59,
                            minValue: 0
                        }, {
                            xtype: 'displayfield',
                            value: 'mins '
                        }, {
                            name: 'seconds',
                            xtype: 'numberfield',
                            width: 95,
                            allowBlank: true,
                            value: 0,
                            maxValue: 59,
                            minValue: 0
                        }, {
                            xtype: 'displayfield',
                            value: 'secs'
                        }]
                    }]
                }, {
                    title: t('suplementaryInfo'),
                    items: [{
                        name: 'type_user',
                        fieldLabel: t('type') + ' ' + t('user'),
                        allowBlank: true,
                        hidden: (me.module.fieldsAllow.indexOf('type_user') === -1) && App.user.isOperator
                    }, {
                        name: 'birth_date',
                        fieldLabel: t('birth_date'),
                        allowBlank: true,
                        hidden: (me.module.fieldsAllow.indexOf('birth_date') === -1) && App.user.isOperator
                    }, {
                        xtype: 'numberfield',
                        name: 'edad',
                        fieldLabel: t('edad'),
                        allowBlank: true,
                        hidden: (me.module.fieldsAllow.indexOf('edad') === -1) && App.user.isOperator
                    }, {
                        name: 'profesion',
                        fieldLabel: t('profesion'),
                        maxLength: 50,
                        minLength: 4,
                        allowBlank: true,
                        hidden: (me.module.fieldsAllow.indexOf('profesion') === -1) && App.user.isOperator
                    }, {
                        name: 'sexo',
                        fieldLabel: t('sexo'),
                        maxLength: 10,
                        minLength: 1,
                        allowBlank: true,
                        hidden: (me.module.fieldsAllow.indexOf('sexo') === -1) && App.user.isOperator
                    }, {
                        name: 'company',
                        fieldLabel: t('company'),
                        allowBlank: true,
                        hidden: (me.module.fieldsAllow.indexOf('company') === -1) && App.user.isOperator
                    }, {
                        name: 'country',
                        fieldLabel: t('country'),
                        allowBlank: true,
                        hidden: (me.module.fieldsAllow.indexOf('country') === -1) && App.user.isOperator
                    }, {
                        xtype: 'textareafield',
                        name: 'info',
                        fieldLabel: t('description'),
                        allowBlank: true,
                        hidden: (me.module.fieldsAllow.indexOf('info') === -1) && App.user.isOperator
                    }, {
                        xtype: me.module.labelExtraFieldsType.option_1 || 'textfield',
                        name: 'option_1',
                        fieldLabel: me.module.labelExtraFields.option_1 || t('option') + ' 1',
                        allowBlank: true,
                        hidden: (me.module.fieldsAllow.indexOf('option_1') === -1) && App.user.isOperator
                    }, {
                        xtype: me.module.labelExtraFieldsType.option_2 || 'textfield',
                        name: 'option_2',
                        fieldLabel: me.module.labelExtraFields.option_2 || t('option') + ' 2',
                        allowBlank: true,
                        hidden: (me.module.fieldsAllow.indexOf('option_2') === -1) && App.user.isOperator
                    }, {
                        xtype: me.module.labelExtraFieldsType.option_3 || 'textfield',
                        name: 'option_3',
                        fieldLabel: me.module.labelExtraFields.option_3 || t('option') + ' 3',
                        allowBlank: true,
                        hidden: (me.module.fieldsAllow.indexOf('option_3') === -1) && App.user.isOperator
                    }, {
                        xtype: me.module.labelExtraFieldsType.option_4 || 'textfield',
                        name: 'option_4',
                        fieldLabel: me.module.labelExtraFields.option_4 || t('option') + ' 4',
                        allowBlank: true,
                        hidden: (me.module.fieldsAllow.indexOf('option_4') === -1) && App.user.isOperator
                    }, {
                        xtype: me.module.labelExtraFieldsType.option_5 || 'textfield',
                        name: 'option_5',
                        fieldLabel: me.module.labelExtraFields.option_5 || t('option') + ' 5',
                        allowBlank: true,
                        hidden: (me.module.fieldsAllow.indexOf('option_5') === -1) && App.user.isOperator
                    }, {
                        xtype: me.module.labelExtraFields.option_6 ? 'combo' : 'textfield',
                        queryMode: 'local',
                        forceSelection: true,
                        editable: false,
                        store: me.module.labelExtraFields.option_6 ? me.module.labelExtraFieldsType.option_6.split(/\:/) : [],
                        name: 'option_6',
                        fieldLabel: me.module.labelExtraFields.option_6 || t('option') + ' 6',
                        allowBlank: true,
                        hidden: (me.module.fieldsAllow.indexOf('option_6') === -1) && App.user.isOperator
                    }, {
                        xtype: me.module.labelExtraFields.option_7 ? 'combo' : 'textfield',
                        queryMode: 'local',
                        forceSelection: true,
                        editable: false,
                        store: me.module.labelExtraFields.option_7 ? me.module.labelExtraFieldsType.option_7.split(/\:/) : [],
                        name: 'option_7',
                        fieldLabel: me.module.labelExtraFields.option_7 || t('option') + ' 7',
                        allowBlank: true,
                        hidden: (me.module.fieldsAllow.indexOf('option_7') === -1) && App.user.isOperator
                    }, {
                        xtype: me.module.labelExtraFields.option_8 ? 'combo' : 'textfield',
                        queryMode: 'local',
                        forceSelection: true,
                        editable: false,
                        store: me.module.labelExtraFields.option_8 ? me.module.labelExtraFieldsType.option_8.split(/\:/) : [],
                        name: 'option_8',
                        fieldLabel: me.module.labelExtraFields.option_8 || t('option') + ' 8',
                        allowBlank: true,
                        hidden: (me.module.fieldsAllow.indexOf('option_8') === -1) && App.user.isOperator
                    }]
                }, {
                    title: t('Dados INSS'),
                    items: [{
                        xtype: 'numberfield',
                        name: 'beneficio_number',
                        fieldLabel: t('Numero de beneficio'),
                        allowBlank: true,
                        hidden: (me.module.fieldsAllow.indexOf('beneficio_number') === -1) && App.user.isOperator
                    }, {
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        labelAlign: 'right',
                        defaults: {
                            xtype: 'textfield',
                            labelAlign: 'right',
                            flex: 1,
                            allowBlank: true
                        },
                        items: [{
                            xtype: 'numberfield',
                            name: 'quantidade_transacoes',
                            fieldLabel: t('Quantidade de transações'),
                            labelWidth: 150,
                            hidden: (me.module.fieldsAllow.indexOf('quantidade_transacoes') === -1) && App.user.isOperator
                        }, {
                            name: 'beneficio_especie',
                            fieldLabel: t('Beneficio Espécie'),
                            labelWidth: 90,
                            hidden: (me.module.fieldsAllow.indexOf('beneficio_especie') === -1) && App.user.isOperator
                        }]
                    }, {
                        xtype: 'datefield',
                        name: 'inicio_beneficio',
                        fieldLabel: t('Data do Inicio do beneficio'),
                        format: 'Y-m-d',
                        value: new Date(),
                        allowBlank: true,
                        hidden: (me.module.fieldsAllow.indexOf('inicio_beneficio') === -1) && App.user.isOperator
                    }, {
                        xtype: 'moneyfield',
                        mask: 'R$ #9.999.990,00',
                        name: 'beneficio_valor',
                        fieldLabel: t('Valor do Beneficio'),
                        allowBlank: true,
                        hidden: (me.module.fieldsAllow.indexOf('beneficio_valor') === -1) && App.user.isOperator
                    }, {
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        labelAlign: 'right',
                        defaults: {
                            xtype: 'textfield',
                            labelAlign: 'right',
                            flex: 1,
                            allowBlank: true
                        },
                        items: [{
                            xtype: 'moneyfield',
                            mask: 'R$ #9.999.990,00',
                            name: 'valor_proposta',
                            fieldLabel: t('Valor da Proposta'),
                            labelWidth: 150,
                            hidden: (me.module.fieldsAllow.indexOf('valor_proposta') === -1) && App.user.isOperator
                        }, {
                            xtype: 'moneyfield',
                            mask: 'R$ #9.999.990,00',
                            name: 'valor_parcela',
                            fieldLabel: t('Valor Parcela'),
                            labelWidth: 90,
                            hidden: (me.module.fieldsAllow.indexOf('valor_parcela') === -1) && App.user.isOperator
                        }]
                    }, {
                        name: 'telefone_fixo1',
                        fieldLabel: t('Telefone fixo 1'),
                        allowBlank: true,
                        hidden: (me.module.fieldsAllow.indexOf('telefone_fixo1') === -1) && App.user.isOperator
                    }, {
                        name: 'telefone_fixo2',
                        fieldLabel: t('Telefone fixo 2'),
                        allowBlank: true,
                        hidden: (me.module.fieldsAllow.indexOf('telefone_fixo2') === -1) && App.user.isOperator
                    }, {
                        name: 'telefone_fixo3',
                        fieldLabel: t('Telefone fixo 3'),
                        allowBlank: true,
                        hidden: (me.module.fieldsAllow.indexOf('telefone_fixo3') === -1) && App.user.isOperator
                    }, {
                        name: 'telefone_celular1',
                        fieldLabel: t('Telefone celular 1'),
                        allowBlank: true,
                        hidden: (me.module.fieldsAllow.indexOf('telefone_celular1') === -1) && App.user.isOperator
                    }, {
                        name: 'telefone_celular2',
                        fieldLabel: t('Telefone celular 2'),
                        allowBlank: true,
                        hidden: (me.module.fieldsAllow.indexOf('telefone_celular2') === -1) && App.user.isOperator
                    }, {
                        name: 'telefone_celular3',
                        fieldLabel: t('Telefone celular 3'),
                        allowBlank: true,
                        hidden: (me.module.fieldsAllow.indexOf('telefone_celular3') === -1) && App.user.isOperator
                    }]
                }, {
                    title: t('Financeiro'),
                    items: [{
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        labelAlign: 'right',
                        defaults: {
                            xtype: 'textfield',
                            labelAlign: 'right',
                            flex: 1,
                            allowBlank: true
                        },
                        items: [{
                            name: 'banco',
                            fieldLabel: t('Banco'),
                            allowBlank: true,
                            hidden: (me.module.fieldsAllow.indexOf('banco') === -1) && App.user.isOperator,
                            labelWidth: 150
                        }, {
                            name: 'conta_tipo',
                            fieldLabel: t('Tipo de conta'),
                            labelWidth: 90,
                            hidden: (me.module.fieldsAllow.indexOf('conta_tipo') === -1) && App.user.isOperator
                        }]
                    }, {
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        labelAlign: 'right',
                        defaults: {
                            xtype: 'textfield',
                            labelAlign: 'right',
                            flex: 1,
                            allowBlank: true
                        },
                        items: [{
                            name: 'agencia',
                            fieldLabel: t('agencia'),
                            labelWidth: 150,
                            hidden: (me.module.fieldsAllow.indexOf('agencia') === -1) && App.user.isOperator
                        }, {
                            name: 'conta',
                            fieldLabel: t('Conta corrente'),
                            labelWidth: 90,
                            hidden: (me.module.fieldsAllow.indexOf('conta') === -1) && App.user.isOperator
                        }]
                    }, {
                        xtype: 'box',
                        hidden: false,
                        autoEl: {
                            tag: 'br'
                        }
                    }, {
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        labelAlign: 'right',
                        defaults: {
                            xtype: 'textfield',
                            labelAlign: 'right',
                            allowBlank: true
                        },
                        items: [{
                            name: 'credit_card_name',
                            fieldLabel: t('Cartão de Credito nome'),
                            labelWidth: 150,
                            flex: 3,
                            hidden: (me.module.fieldsAllow.indexOf('credit_card_name') === -1) && App.user.isOperator
                        }, {
                            name: 'credit_card_type',
                            fieldLabel: t('Bandeira'),
                            labelWidth: 90,
                            flex: 2,
                            hidden: (me.module.fieldsAllow.indexOf('credit_card_type') === -1) && App.user.isOperator
                        }]
                    }, {
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        labelAlign: 'right',
                        defaults: {
                            xtype: 'textfield',
                            labelAlign: 'right',
                            allowBlank: true
                        },
                        items: [{
                            name: 'credit_card_number',
                            fieldLabel: t('Numero'),
                            labelWidth: 150,
                            flex: 3,
                            hidden: (me.module.fieldsAllow.indexOf('credit_card_number') === -1) && App.user.isOperator
                        }, {
                            name: 'credit_card_code',
                            fieldLabel: t('Nº Validador'),
                            labelWidth: 90,
                            flex: 2,
                            hidden: (me.module.fieldsAllow.indexOf('credit_card_code') === -1) && App.user.isOperator
                        }]
                    }]
                }, {
                    title: t('Informação Extra'),
                    items: [{
                        name: 'telefone_fixo_comercial1',
                        fieldLabel: t('Telefone fixo comercial 1'),
                        allowBlank: true,
                        hidden: (me.module.fieldsAllow.indexOf('telefone_fixo_comercial1') === -1) && App.user.isOperator
                    }, {
                        name: 'telefone_fixo_comercial2',
                        fieldLabel: t('Telefone fixo comercial 2'),
                        allowBlank: true,
                        hidden: (me.module.fieldsAllow.indexOf('telefone_fixo_comercial2') === -1) && App.user.isOperator
                    }, {
                        name: 'telefone_fixo_comercial3',
                        fieldLabel: t('Telefone fixo comercial 3'),
                        allowBlank: true,
                        hidden: (me.module.fieldsAllow.indexOf('telefone_fixo_comercial3') === -1) && App.user.isOperator
                    }, {
                        name: 'parente1',
                        fieldLabel: t('Parente 1'),
                        allowBlank: true,
                        hidden: (me.module.fieldsAllow.indexOf('parente1') === -1) && App.user.isOperator
                    }, {
                        name: 'fone_parente1',
                        fieldLabel: t('Telefone parente 1'),
                        allowBlank: true,
                        hidden: (me.module.fieldsAllow.indexOf('fone_parente1') === -1) && App.user.isOperator
                    }, {
                        name: 'parente2',
                        fieldLabel: t('Parente 2'),
                        allowBlank: true,
                        hidden: (me.module.fieldsAllow.indexOf('parente2') === -1) && App.user.isOperator
                    }, {
                        name: 'fone_parente2',
                        fieldLabel: t('Telefone parente 2'),
                        allowBlank: true,
                        hidden: (me.module.fieldsAllow.indexOf('fone_parente2') === -1) && App.user.isOperator
                    }, {
                        name: 'parente3',
                        fieldLabel: t('Parente 3'),
                        allowBlank: true,
                        hidden: (me.module.fieldsAllow.indexOf('parente3') === -1) && App.user.isOperator
                    }, {
                        name: 'fone_parente3',
                        fieldLabel: t('Telefone parente 3'),
                        allowBlank: true,
                        hidden: (me.module.fieldsAllow.indexOf('fone_parente3') === -1) && App.user.isOperator
                    }, {
                        name: 'vizinho1',
                        fieldLabel: t('Vizinho 1'),
                        allowBlank: true,
                        hidden: (me.module.fieldsAllow.indexOf('vizinho1') === -1) && App.user.isOperator
                    }, {
                        name: 'telefone_vizinho1',
                        fieldLabel: t('Telefone Vizinho 1'),
                        allowBlank: true,
                        hidden: (me.module.fieldsAllow.indexOf('telefone_vizinho1') === -1) && App.user.isOperator
                    }, {
                        name: 'vizinho2',
                        fieldLabel: t('Vizinho 2'),
                        allowBlank: true,
                        hidden: (me.module.fieldsAllow.indexOf('vizinho2') === -1) && App.user.isOperator
                    }, {
                        name: 'telefone_vizinho2',
                        fieldLabel: t('Telefone Vizinho 2'),
                        allowBlank: true,
                        hidden: (me.module.fieldsAllow.indexOf('telefone_vizinho2') === -1) && App.user.isOperator
                    }, {
                        name: 'vizinho3',
                        fieldLabel: t('Vizinho 3'),
                        allowBlank: true,
                        hidden: (me.module.fieldsAllow.indexOf('vizinho3') === -1) && App.user.isOperator
                    }, {
                        name: 'telefone_vizinho3',
                        fieldLabel: t('Telefone Vizinho 3'),
                        allowBlank: true,
                        hidden: (me.module.fieldsAllow.indexOf('telefone_vizinho3') === -1) && App.user.isOperator
                    }]
                }
                /*,{
                                    title : t('googleMAP'),                 
                                    items : [{
                                        reference: 'mapData',
                                        xtype     : 'gmappanel',
                                        name : 'mapfield',
                                        gmapType: 'map',
                                        width: 450,
                                            height: 250,
                                        center: {
                                              geoCodeAddr: "avellaneda 1737, santa fe, argentina",
                                              marker: {
                                                   title: 'Holmes Home'
                                              }
                                         },
                                         mapOptions: {
                                            mapTypeId: google.maps.MapTypeId.TERRAIN
                                            },
                                            listeners: {
                                                    boxready: 'handleMapReady'
                                            },
                                            markers: [{
                                                geoCodeAddr: '25 de mayo, santo tome, santa fe argentina',
                                                 marker: {
                                                    title: 'casa da nelida'
                                                 }
                                            },{
                                                lat:  31.39.49.48,
                                                lng: 144.99804139137268,
                                                marker: {title: 'Richmond Church'}                           
                                                
                                            }]
                                    }]
                            }*/
            ]
        }];
        me.callParent(arguments);
    }
});
/**
 * Classe que define o form de "Campaign"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 28/10/2012
 */
Ext.define('CallCenter.view.campaign.Form', {
    extend: 'Ext.ux.form.Panel',
    uses: ['Ext.ux.form.field.DateTime', 'Ext.form.RadioGroup'],
    alias: 'widget.campaignform',
    fileUpload: true,
    fieldsHideUpdateLot: ['name', 'id_phonebook', 'description'],
    initComponent: function() {
        var me = this;
        me.items = [{
            xtype: 'tabpanel',
            defaults: {
                border: false,
                defaultType: 'textfield',
                layout: 'anchor',
                bodyPadding: 2,
                defaults: {
                    plugins: 'markallowblank',
                    allowBlank: false,
                    anchor: '100%'
                }
            },
            items: [{
                title: t('general'),
                items: [{
                    name: 'name',
                    fieldLabel: t('name')
                }, {
                    xtype: 'booleancombo',
                    name: 'status',
                    fieldLabel: t('status')
                }, {
                    name: 'daily_morning_start_time',
                    fieldLabel: t('daily_morning_start_time'),
                    value: '08:00:00',
                    xtype: 'timefield',
                    format: 'H:i:s',
                    altFormats: 'H:i:s',
                    forceSelection: true,
                    editable: false,
                    increment: 30,
                    anchor: '100%'
                }, {
                    name: 'daily_morning_stop_time',
                    fieldLabel: t('daily_morning_stop_time'),
                    value: '13:00:00',
                    xtype: 'timefield',
                    format: 'H:i:s',
                    altFormats: 'H:i:s',
                    forceSelection: true,
                    editable: false,
                    increment: 30,
                    anchor: '100%'
                }, {
                    name: 'daily_afternoon_start_time',
                    fieldLabel: t('daily_afternoon_start_time'),
                    value: '13:00:00',
                    xtype: 'timefield',
                    format: 'H:i:s',
                    altFormats: 'H:i:s',
                    forceSelection: true,
                    editable: false,
                    increment: 30,
                    anchor: '100%'
                }, {
                    name: 'daily_afternoon_stop_time',
                    fieldLabel: t('daily_afternoon_stop_time'),
                    value: '20:00:00',
                    xtype: 'timefield',
                    format: 'H:i:s',
                    altFormats: 'H:i:s',
                    forceSelection: true,
                    editable: false,
                    increment: 30,
                    anchor: '100%'
                }, {
                    style: 'margin-top:2px',
                    xtype: 'fieldset',
                    title: t('Select one or more phonebook'),
                    collapsible: true,
                    collapsed: false,
                    items: [{
                        anchor: '100%',
                        fieldLabel: '',
                        xtype: 'phonebooktag',
                        allowBlank: true
                    }]
                }, {
                    fieldLabel: t('Show URL'),
                    name: 'open_url',
                    allowBlank: true
                }, {
                    fieldLabel: t('Open URL'),
                    name: 'open_url_when_answer_call',
                    allowBlank: true
                }, {
                    xtype: 'textareafield',
                    name: 'description',
                    fieldLabel: t('description'),
                    allowBlank: true
                }]
            }, {
                title: t('permisions'),
                defaults: {
                    labelAlign: 'right',
                    labelWidth: 200,
                    anchor: '100%'
                },
                items: [{
                    xtype: 'radiogroup',
                    fieldLabel: t('phonebook'),
                    columns: [50, 100],
                    vertical: true,
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_id_phonebook',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_id_phonebook',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('name'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_name',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_name',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('email'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_email',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_email',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('email') + ' 2',
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_email2',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_email2',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('email') + ' 3',
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_email3',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_email3',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('city'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_city',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_city',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('neighborhood'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_neighborhood',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_neighborhood',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('address'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_address',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_address',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('address') + ' ' + t('Número'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_address_number',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_address_number',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('address') + ' ' + t('Complement'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_address_complement',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_address_complement',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('state'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_state',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_state',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('country'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_country',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_country',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('dni'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_dni',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_dni',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('cpf'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_cpf',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_cpf',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('mobile'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_mobile',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_mobile',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('mobile') + ' 2',
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_mobile_2',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_mobile_2',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('number') + ' ' + t('homes'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_number_home',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_number_home',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('number') + ' ' + t('office'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_number_office',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_number_office',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('zip_code'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_zip_code',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_zip_code',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('company'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_company',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_company',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('birth_date'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_birth_date',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_birth_date',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('type') + ' ' + t('user'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_type_user',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_type_user',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('sexo'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_sexo',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_sexo',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('edad'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_edad',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_edad',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('profesion'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_profesion',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_profesion',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('Tiempo de Llamada'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_sessiontime',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_sessiontime',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('Numero de beneficio'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_beneficio_number',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_beneficio_number',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('Beneficio Espécie'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_beneficio_especie',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_beneficio_especie',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('Quantidade de transações'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_quantidade_transacoes',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_quantidade_transacoes',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('Data do Inicio do beneficio'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_inicio_beneficio',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_inicio_beneficio',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('Valor do Beneficio'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_beneficio_valor',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_beneficio_valor',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('Valor da proposta'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_valor_proposta',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_valor_proposta',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('Valor da parcela'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_valor_parcela',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_valor_parcela',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('Banco'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_banco',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_banco',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('Conta tipo'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_conta_tipo',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_conta_tipo',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('Agencia'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_agencia',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_agencia',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('Conta'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_conta',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_conta',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('Cartão de crédito Nome'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_credit_card_name',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_credit_card_name',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('Cartão de crédito bandeira'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_credit_card_type',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_credit_card_type',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('Cartão de crédito número'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_credit_card_number',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_credit_card_number',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('Cartão de crédito número Codigo'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_credit_card_code',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_credit_card_code',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('Telefone fixo 1'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_telefone_fixo1',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_telefone_fixo1',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('Telefone fixo 2'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_telefone_fixo2',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_telefone_fixo2',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('Telefone fixo 3'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_telefone_fixo3',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_telefone_fixo3',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('Telefone celular 1'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_telefone_celular1',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_telefone_celular1',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('Telefone celular 2'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_telefone_celular2',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_telefone_celular2',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('Telefone celular 3'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_telefone_celular3',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_telefone_celular3',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('Telefone fixo comercial 1'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_telefone_fixo_comercial1',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_telefone_fixo_comercial1',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('Telefone fixo comercial 2'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_telefone_fixo_comercial2',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_telefone_fixo_comercial2',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('Telefone fixo comercial 3'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_telefone_fixo_comercial3',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_telefone_fixo_comercial3',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('Parente 01'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_parente1',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_parente1',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('Fone parente 01'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_fone_parente1',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_fone_parente1',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('Parente 02'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_parente2',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_parente2',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('Fone parente 02'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_fone_parente2',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_fone_parente2',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('Parente 03'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_parente3',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_parente3',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('Fone parente 03'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_fone_parente3',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_fone_parente3',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('Vizinho 01'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_vizinho1',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_vizinho1',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('Telefone Vizinho 1'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_telefone_vizinho1',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_telefone_vizinho1',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('Vizinho 02'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_vizinho2',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_vizinho2',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('Telefone Vizinho 2'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_telefone_vizinho2',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_telefone_vizinho2',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('Vizinho 03'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_vizinho3',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_vizinho3',
                        inputValue: '0'
                    }]
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: t('Telefone Vizinho 3'),
                    columns: [50, 100],
                    items: [{
                        boxLabel: t('yes'),
                        name: 'allow_telefone_vizinho3',
                        inputValue: '1',
                        checked: true
                    }, {
                        boxLabel: t('no'),
                        name: 'allow_telefone_vizinho3',
                        inputValue: '0'
                    }]
                }]
            }, {
                title: t('extraFields'),
                defaults: {
                    combineErrors: true,
                    layout: 'hbox',
                    defaultType: 'textfield',
                    margin: '0 6 0 0',
                    defaults: {
                        labelAlign: 'right',
                        labelWidth: 85,
                        allowBlank: true
                    }
                },
                items: [{
                    xtype: 'fieldcontainer',
                    items: [{
                        fieldLabel: t('Text') + ' 1',
                        name: 'allow_option_1',
                        flex: 3
                    }, {
                        fieldLabel: t('Type'),
                        name: 'allow_option_1_type',
                        xtype: 'fieldtypescombo',
                        flex: 2
                    }]
                }, {
                    xtype: 'fieldcontainer',
                    items: [{
                        fieldLabel: t('Text') + ' 2',
                        name: 'allow_option_2',
                        flex: 3
                    }, {
                        fieldLabel: t('Type'),
                        name: 'allow_option_2_type',
                        xtype: 'fieldtypescombo',
                        flex: 2
                    }]
                }, {
                    xtype: 'fieldcontainer',
                    items: [{
                        fieldLabel: t('Text') + ' 3',
                        name: 'allow_option_3',
                        flex: 3
                    }, {
                        fieldLabel: t('Type'),
                        name: 'allow_option_3_type',
                        xtype: 'fieldtypescombo',
                        flex: 2
                    }]
                }, {
                    xtype: 'fieldcontainer',
                    items: [{
                        fieldLabel: t('Text') + ' 4',
                        name: 'allow_option_4',
                        flex: 3
                    }, {
                        fieldLabel: t('Type'),
                        name: 'allow_option_4_type',
                        xtype: 'fieldtypescombo',
                        flex: 2
                    }]
                }, {
                    xtype: 'fieldcontainer',
                    items: [{
                        fieldLabel: t('Text') + ' 5',
                        name: 'allow_option_5',
                        flex: 3
                    }, {
                        fieldLabel: t('Type'),
                        name: 'allow_option_5_type',
                        xtype: 'fieldtypescombo',
                        flex: 2
                    }]
                }, {
                    xtype: 'box',
                    hidden: false,
                    autoEl: {
                        tag: 'br'
                    }
                }, {
                    xtype: 'fieldcontainer',
                    items: [{
                        fieldLabel: t('Combo Text') + ' 6',
                        name: 'allow_option_6',
                        flex: 2
                    }, {
                        fieldLabel: t('Values'),
                        name: 'allow_option_6_type',
                        xtype: 'textfield',
                        flex: 3
                    }]
                }, {
                    xtype: 'fieldcontainer',
                    items: [{
                        fieldLabel: t('Combo Text') + ' 7',
                        name: 'allow_option_7',
                        flex: 2
                    }, {
                        fieldLabel: t('Values'),
                        name: 'allow_option_7_type',
                        xtype: 'textfield',
                        flex: 3
                    }]
                }, {
                    xtype: 'fieldcontainer',
                    items: [{
                        fieldLabel: t('Combo Text') + ' 8',
                        name: 'allow_option_8',
                        flex: 2
                    }, {
                        fieldLabel: t('Values'),
                        name: 'allow_option_8_type',
                        xtype: 'textfield',
                        flex: 3
                    }]
                }]
            }, {
                title: t('Campaign Options'),
                items: [{
                    xtype: 'queuestrategycombo',
                    name: 'strategy',
                    fieldLabel: t('Strategy')
                }, {
                    xtype: 'noyesstringcombo',
                    name: 'autopause',
                    fieldLabel: t('Auto pause')
                }, {
                    xtype: 'noyesstringcombo',
                    name: 'ringinuse',
                    fieldLabel: t('Ringinuse')
                }, {
                    xtype: 'numberfield',
                    name: 'timeout',
                    fieldLabel: t('Ring Agent per'),
                    value: 10
                }, {
                    xtype: 'numberfield',
                    name: 'retry',
                    fieldLabel: t('Retry other agent'),
                    value: 1
                }, {
                    xtype: 'numberfield',
                    name: 'wrapuptime',
                    fieldLabel: t('Time next calls'),
                    value: 10
                }, {
                    xtype: 'numberfield',
                    name: 'weight',
                    fieldLabel: t('Weigh'),
                    value: 0
                }, {
                    name: 'periodic-announce', //audio para anuncio
                    fieldLabel: t('Periodic announce'),
                    value: 'queue-periodic-announce'
                }, {
                    xtype: 'numberfield',
                    name: 'periodic-announce-frequency', //cada cuanto executar el anuncio
                    fieldLabel: t('Periodic frequency'),
                    value: 30
                }, {
                    xtype: 'yesnostringcombo',
                    name: 'announce-position', //anuncioar la posicion en la cola
                    fieldLabel: t('Announce position')
                }, {
                    xtype: 'yesnostringcombo',
                    name: 'announce-holdtime', //anuncioar tiempo de espera
                    fieldLabel: t('Announce Holdtime')
                }, {
                    xtype: 'numberfield',
                    name: 'announce-frequency', //frequencia del los avisos
                    fieldLabel: t('Announce Frequency'),
                    value: 45
                }, {
                    xtype: 'combobox',
                    forceSelection: true,
                    editable: false,
                    value: 'inuse,paused,unavailable,invalid,unknown',
                    store: [
                        ['no', t('No')],
                        ['yes', t('Yes')],
                        ['inuse,paused,unavailable,invalid,unknown', t('inuse,paused,unavailable,invalid,unknown')],
                        ['paused,invalid,unavailable', t('paused,invalid,unavailable')]
                    ],
                    name: 'joinempty',
                    fieldLabel: t('Join empty')
                }, {
                    xtype: 'combobox',
                    forceSelection: true,
                    editable: false,
                    value: 'inuse,paused,unavailable,invalid,unknown',
                    store: [
                        ['no', t('No')],
                        ['yes', t('Yes')],
                        ['inuse,paused,unavailable,invalid,unknown', t('inuse,paused,unavailable,invalid,unknown')],
                        ['paused,invalid,unavailable', t('paused,invalid,unavailable')]
                    ],
                    fieldLabel: t('Leave when empty'),
                    name: 'leavewhenempty'
                }, {
                    name: 'musiconhold',
                    fieldLabel: t('musiconhold'),
                    value: 'default'
                }, {
                    xtype: 'numberfield',
                    name: 'max_wait_time',
                    fieldLabel: t('Max wait time'),
                    value: 30,
                    allowBlank: true
                }, {
                    name: 'max_wait_time_action',
                    fieldLabel: t('Max wait time action'),
                    allowBlank: true
                }]
            }, {
                title: t('Predictive'),
                defaults: {
                    labelWidth: 220
                },
                items: [{
                    xtype: 'yesnocombo',
                    name: 'predictive',
                    fieldLabel: t('Predictive')
                }, {
                    xtype: 'numberfield',
                    fieldLabel: t('Quantidade de chamada por operador livre'),
                    name: 'call_limit',
                    value: '5',
                    allowBlank: true
                }, {
                    xtype: 'numberfield',
                    fieldLabel: t('Tempo entre tentativas de envio'),
                    name: 'call_next_try',
                    value: '10',
                    allowBlank: true
                }]
            }]
        }];
        me.callParent(arguments);
    }
});
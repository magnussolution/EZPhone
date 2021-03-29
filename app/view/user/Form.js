/**
 * Class to define form to "User"
 *
 * Adilson Magnus <info@magnussolution.com> 
 * 15/04/2013
 */
Ext.define('CallCenter.view.user.Form', {
    extend: 'Ext.ux.form.Panel',
    alias: 'widget.userform',
    autoHeight: 300,
    bodyPadding: 0,
    fieldsHideUpdateLot: ['username', 'password', 'id_campaign'],
    initComponent: function() {
        var me = this;
        me.items = [{
            xtype: 'tabpanel',
            defaults: {
                border: false,
                defaultType: 'textfield',
                layout: 'anchor',
                bodyPadding: 5,
                defaults: {
                    plugins: 'markallowblank',
                    allowBlank: false,
                    anchor: '100%',
                    enableKeyEvents: true
                }
            },
            items: [{
                title: t('general'),
                items: [{
                    name: 'username',
                    fieldLabel: t('username'),
                    maxLength: 20,
                    minLength: 4,
                    readOnly: App.user.isOperator
                }, {
                    name: 'password',
                    fieldLabel: t('Password'),
                    minLength: 4,
                    xtype: 'textfield',
                    inputType: 'password',
                    hidden: App.user.isOperator,
                    allowBlank: App.user.isOperator
                }, {
                    name: 'name',
                    fieldLabel: t('name'),
                    minLength: 4
                }, {
                    xtype: 'noyescombo',
                    name: 'webphone',
                    fieldLabel: t('Webphone'),
                    hidden: App.user.isOperator,
                    allowBlank: true
                }, {
                    name: 'usuario_tns',
                    fieldLabel: t('Usuario TNS'),
                    hidden: !App.user.isAdmin,
                    allowBlank: true
                }, {
                    xtype: 'teamcombo',
                    hidden: !App.user.isAdmin
                }, {
                    xtype: 'groupusercombo',
                    hidden: !App.user.isAdmin,
                    allowBlank: !App.user.isAdmin
                }, {
                    xtype: 'yesnocombo',
                    name: 'status',
                    fieldLabel: t('Active'),
                    hidden: App.user.isOperator,
                    allowBlank: true
                }, {
                    xtype: 'noyescombo',
                    name: 'allow_direct_call_campaign',
                    fieldLabel: t('Allow Direct Call'),
                    hidden: App.user.isOperator,
                    allowBlank: true
                }, {
                    style: 'margin-top:25px',
                    xtype: 'fieldset',
                    title: t('Select one or more Campaign'),
                    collapsible: true,
                    collapsed: false,
                    items: [{
                        anchor: '100%',
                        fieldLabel: '',
                        xtype: 'campaigntag',
                        allowBlank: true
                    }]
                }]
            }, {
                title: t('personalData'),
                itemId: 'personalData',
                items: [{
                    name: 'hometown',
                    fieldLabel: t('Hometown'),
                    allowBlank: true,
                    maxLength: 40,
                    minLength: 4
                }, {
                    xtype: 'datefield',
                    format: 'Y-m-d',
                    name: 'birthday',
                    fieldLabel: t('Birthday'),
                    allowBlank: true,
                    maxLength: 40,
                    minLength: 4
                }, {
                    name: 'cpf',
                    fieldLabel: t('cpf'),
                    allowBlank: true,
                    maxLength: 40,
                    minLength: 4
                }, {
                    name: 'dni',
                    fieldLabel: t('Dni'),
                    allowBlank: true,
                    maxLength: 40,
                    minLength: 4
                }, {
                    name: 'address',
                    fieldLabel: t('address'),
                    allowBlank: true
                }, {
                    name: 'city',
                    fieldLabel: t('city'),
                    allowBlank: true
                }, , {
                    name: 'state',
                    fieldLabel: t('state'),
                    allowBlank: true,
                    maxLength: 20,
                    minLength: 2
                }, {
                    name: 'zipcode',
                    fieldLabel: t('zipcode'),
                    allowBlank: true
                }, {
                    name: 'phone',
                    fieldLabel: t('phone'),
                    allowBlank: true,
                    maxLength: 13,
                    minLength: 8
                }, {
                    name: 'mobile',
                    fieldLabel: t('mobile'),
                    allowBlank: true,
                    maxLength: 20,
                    minLength: 8
                }, {
                    name: 'email',
                    fieldLabel: t('email'),
                    allowBlank: true,
                    vtype: 'email'
                }, {
                    name: 'fathername',
                    fieldLabel: t('Father Name'),
                    allowBlank: true
                }, {
                    name: 'mothername',
                    fieldLabel: t('Mother Name'),
                    allowBlank: true
                }, {
                    name: 'escolaridade',
                    fieldLabel: t('Escolaridade'),
                    allowBlank: true,
                    xtype: 'combobox',
                    forceSelection: true,
                    editable: false,
                    value: '',
                    store: [
                        ['primario', t('Primario')],
                        ['secundario', t('Secundario')],
                        ['superior', t('Superior')]
                    ]
                }, {
                    name: 'estadocivil',
                    fieldLabel: t('Estado Civil'),
                    allowBlank: true,
                    xtype: 'combobox',
                    forceSelection: true,
                    editable: false,
                    value: '',
                    store: [
                        ['solteriro', t('Solteriro')],
                        ['casado', t('Casado')],
                        ['divorsiado', t('Divorsiado')],
                        ['viuvo', t('Viuvo')]
                    ]
                }]
            }, {
                title: t('contrato'),
                itemId: 'DadosContrato',
                items: [, {
                    name: 'worktime',
                    fieldLabel: t('Worktime'),
                    allowBlank: true
                }, {
                    xtype: 'datefield',
                    format: 'Y-m-d',
                    name: 'startcontract',
                    fieldLabel: t('Start Contract'),
                    allowBlank: true,
                    maxLength: 40,
                    minLength: 4
                }, {
                    xtype: 'datefield',
                    format: 'Y-m-d',
                    name: 'stoptcontract',
                    fieldLabel: t('Stop Contract'),
                    allowBlank: true,
                    maxLength: 40,
                    minLength: 4
                }, {
                    name: 'cargo',
                    fieldLabel: t('Cargo'),
                    allowBlank: true,
                    maxLength: 40,
                    minLength: 4
                }, {
                    xtype: 'moneyfield',
                    mask: App.user.currency + ' #9.999.990,00',
                    name: 'salary',
                    fieldLabel: t('salary'),
                    allowBlank: true,
                    maxLength: 20,
                    minLength: 2
                }]
            }, {
                title: t('billing'),
                itemId: 'Pagamentos',
                items: [, {
                    name: 'banck',
                    fieldLabel: t('banck'),
                    allowBlank: true
                }, {
                    name: 'agencia',
                    fieldLabel: t('Agencia'),
                    allowBlank: true,
                    maxLength: 40,
                    minLength: 4
                }, {
                    name: 'conta',
                    fieldLabel: t('Conta'),
                    allowBlank: true,
                    maxLength: 40,
                    minLength: 4
                }]
            }]
        }];
        me.callParent(arguments);
    }
});
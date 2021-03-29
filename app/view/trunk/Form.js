/**
 * Classe que define o form de "Trunk"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 25/06/2012
 */
Ext.define('CallCenter.view.trunk.Form', {
    extend: 'Ext.ux.form.Panel',
    alias: 'widget.trunkform',
    autoHeight: 300,
    bodyPadding: 0,
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
                    labelAlign: 'right',
                    plugins: 'markallowblank',
                    allowBlank: false,
                    anchor: '100%',
                    enableKeyEvents: true,
                    labelWidth: 142
                }
            },
            items: [{
                title: 'Geral',
                items: [{
                    xtype: 'providercombo'
                }, {
                    name: 'trunkcode',
                    fieldLabel: t('trunkcode')
                }, {
                    name: 'user',
                    fieldLabel: t('user'),
                    allowBlank: true
                }, {
                    name: 'secret',
                    fieldLabel: t('password'),
                    allowBlank: true
                }, {
                    name: 'host',
                    fieldLabel: t('host')
                }, {
                    name: 'trunkprefix',
                    fieldLabel: t('add') + ' ' + t('prefix'),
                    allowBlank: true
                }, {
                    name: 'removeprefix',
                    fieldLabel: t('remove') + ' ' + t('prefix'),
                    allowBlank: true
                }, {
                    xtype: 'checkboxgroup',
                    columns: 3,
                    fieldLabel: t('codec'),
                    items: [{
                        boxLabel: 'g729',
                        name: 'allow',
                        inputValue: 'g729',
                        checked: true
                    }, {
                        boxLabel: 'g723',
                        name: 'allow',
                        inputValue: 'g723'
                    }, {
                        boxLabel: 'gsm',
                        name: 'allow',
                        inputValue: 'gsm',
                        checked: true
                    }, {
                        boxLabel: 'g726',
                        name: 'allow',
                        inputValue: 'g726'
                    }, {
                        boxLabel: 'opus',
                        name: 'allow',
                        inputValue: 'opus',
                        checked: true
                    }, {
                        boxLabel: 'alaw',
                        name: 'allow',
                        inputValue: 'alaw'
                    }, {
                        boxLabel: 'ulaw',
                        name: 'allow',
                        inputValue: 'ulaw'
                    }],
                    allowBlank: true
                }, {
                    xtype: 'sipcombo',
                    name: 'providertech',
                    fieldLabel: t('providertech')
                }, {
                    xtype: 'trunklookup',
                    ownerForm: me,
                    name: 'failover_trunk',
                    fieldLabel: t('failover_trunk'),
                    displayField: 'failover_trunktrunkcode',
                    allowBlank: true
                }, {
                    xtype: 'booleancombo',
                    name: 'status',
                    fieldLabel: t('status')
                }, {
                    xtype: 'noyescombo',
                    name: 'register',
                    fieldLabel: t('registertrunk')
                }]
            }, {
                title: t('suplementaryInfo'),
                items: [{
                    name: 'fromuser',
                    fieldLabel: 'fromuser',
                    allowBlank: true
                }, {
                    name: 'fromdomain',
                    fieldLabel: 'Fromdomain',
                    allowBlank: true
                }, {
                    name: 'directmedia',
                    allowBlank: true,
                    value: 'no',
                    fieldLabel: 'directmedia'
                }, {
                    name: 'context',
                    fieldLabel: t('context'),
                    allowBlank: true,
                    value: 'magnuscallcenter'
                }, {
                    xtype: 'numberfield',
                    name: 'qualify',
                    fieldLabel: 'qualify',
                    allowBlank: true,
                    value: '180'
                }, {
                    name: 'disallow',
                    fieldLabel: 'disallow',
                    allowBlank: true,
                    value: 'all'
                }, {
                    name: 'addparameter',
                    fieldLabel: t('addparameter'),
                    allowBlank: true,
                    emptyText: t('parameterdial')
                }]
            }, {
                title: t('AMD'),
                defaults: {
                    labelAlign: 'right',
                    labelWidth: 180,
                    anchor: '100%'
                },
                items: [{
                    xtype: 'noyescombo',
                    name: 'AMD_active',
                    fieldLabel: t('Use AMD')
                }, {
                    name: 'AMD_totalAnalysisTime',
                    fieldLabel: t('Total Analysis Time'),
                    value: 5
                }, {
                    name: 'AMD_maximumNumberOfWords',
                    value: '3',
                    fieldLabel: t('Maximum Number Of Words')
                }]
            }]
        }];
        me.callParent(arguments);
    }
});
/**
 * Classe que define a lista de "CdrSummary"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 17/08/2012
 */
Ext.define('CallCenter.view.cdrSumaryOperador.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.cdrsumaryoperadorlist',
    store: 'CdrSumaryOperador',
    fieldSearch: 'username',
    refreshTime: 5,
    viewConfig: {
        loadMask: false,
        stripeRows: false,
        getRowClass: function(record) {
            var promedio = this.store.getProxy().getReader().rawData.sum,
                promedioUp = promedio * 1.3,
                promedioDow = promedio * 0.7;
            if (record.get('ratio') >= promedioUp) {
                value = 'blue';
            } else if (record.get('ratio') <= promedioDow) {
                value = 'red';
            } else {
                value = '';
            }
            return value;
        }
    },
    initComponent: function() {
        var me = this;
        me.buttonUpdateLot = false;
        me.allowPrint = false;
        //me.buttonCsv = false;
        me.textDelete = t('Desloguear Operador');
        me.refreshTime = (localStorage && localStorage.getItem('cdrsumaryoperadorlist')) || me.refreshTime;
        me.extraButtons = [{
            text: t('Tiempo no Produtivo'),
            glyph: icons.info2,
            handler: 'onNotProduction',
            hidden: !App.user.isAdmin
        }, {
            xtype: 'numberfield',
            field: 'jmlhBrg',
            fieldLabel: t('Refresh Time'),
            editable: false,
            minValue: 4,
            labelWidth: 90,
            width: 150,
            selectOnFocus: true,
            allowDecimals: true,
            decimalPrecision: 2,
            value: me.refreshTime,
            listeners: {
                change: function(field) {
                    if (field.value > 0) {
                        me.refreshTime = field.value;
                        localStorage.setItem('cdrsumaryoperadorerefresh', field.value);
                    };
                }
            }
        }];
        me.groupingsummary = true;
        me.columns = [{
                header: t('day'),
                renderer: Ext.util.Format.dateRenderer('Y-m-d'),
                dataIndex: 'day',
                filter: {
                    type: 'date',
                    field: 'starttime'
                },
                flex: 3
            }, {
                xtype: 'templatecolumn',
                tpl: '{idUserusername}',
                header: t('user'),
                dataIndex: 'id_user',
                comboFilter: 'usercombo',
                filter: {
                    type: 'string',
                    field: 'pkg_user.username'
                },
                flex: 2,
                hidden: !App.user.isAdmin,
                hideable: App.user.isAdmin
            }, {
                xtype: 'templatecolumn',
                tpl: '{idUsername}',
                header: t('name'),
                dataIndex: 'id_user',
                comboFilter: 'usercombo',
                filter: {
                    type: 'string',
                    field: 'pkg_user.name'
                },
                flex: 2,
                hidden: !App.user.isAdmin,
                hideable: App.user.isAdmin
            }, {
                xtype: 'templatecolumn',
                tpl: '{idCampaignname}',
                header: t('campaign'),
                dataIndex: 'id_campaign',
                comboFilter: 'campaigncombo',
                flex: 4
            }, {
                header: t('Shift'),
                renderer: Helper.Util.formatTurno,
                dataIndex: 'turno',
                flex: 2,
                filter: {
                    type: 'list',
                    options: [
                        ['M', t('Mañana')],
                        ['T', t('Tarde')]
                    ]
                }
            }, {
                //menuDisabled : true,
                header: t('Login at'),
                renderer: Helper.Util.formatDateTime,
                dataIndex: 'starttime',
                flex: 4
            },
            /*{
                        menuDisabled : true,
                        header    : t('Ultimo logueo'),
                        renderer     : Helper.Util.formatDateTime,
                        dataIndex    : 'stoptime',
                        filter       : {type: 'date', field: 'starttime'},
                        flex         : 4
                    },*/
            {
                header: t('Logueado'),
                dataIndex: 'total_time',
                renderer: Helper.Util.formatsecondsToTime,
                flex: 2
            }
            /*,{
                        menuDisabled : true,
                        header       : t('Tiempo Productivo'),
                        dataIndex    : 'tiempoProductivo',
                        renderer: Helper.Util.formatsecondsToTime,
                        flex         : 2
                    }*/
            , {
                header: t('Descanso'),
                dataIndex: 'total_pause',
                renderer: Helper.Util.formatsecondsToTime,
                flex: 2
            }, {
                menuDisabled: true,
                header: t('Llamadas'),
                dataIndex: 'totalCalls',
                flex: 2
            }, {
                menuDisabled: true,
                header: t('Llamando'),
                dataIndex: 'timeTotalCalls',
                renderer: Helper.Util.formatsecondsToTime,
                flex: 2
            }, {
                menuDisabled: true,
                header: t('Total tiempo Efectivas'),
                dataIndex: 'timeTotalEfectivas',
                renderer: Helper.Util.formatsecondsToTime,
                flex: 2,
                summaryType: 'average',
                summaryRenderer: Helper.Util.formatsecondsToTime
            }, {
                menuDisabled: true,
                header: t('Efectivas Total'),
                dataIndex: 'efectivastotal',
                flex: 2,
                summaryType: 'sum',
                summaryRenderer: function(value, summaryData, dataIndex) {
                    return '<b>' + value + ' Efectivas </b>';
                }
            }, {
                header: t('ratio'),
                dataIndex: 'ratio',
                flex: 2,
                summaryType: 'average'
            }, {
                header: t('Chamadas/hora'),
                dataIndex: 'barridos',
                flex: 2
            }, {
                header: t('status'),
                renderer: Helper.Util.formatPause,
                dataIndex: 'status',
                flex: 2,
                filter: {
                    type: 'list',
                    options: [
                        ['LOGIN', t('working')],
                        ['PAUSE', t('pause')],
                        ['LOGOUT', t('theEnd')]
                    ]
                }
            }
        ]
        me.sessionLoad = Ext.create('Ext.util.DelayedTask', function() {
            me.store.load();
        }, me);
        me.callParent(arguments);
        me.store.on('load', me.onLoadStore, me);
    },
    onLoadStore: function() {
        var me = this;
        me.onDeactivateModule();
        me.onActivateModule();
    },
    onRender: function() {
        var me = this;
        me.module.on('activate', me.onActivateModule, me);
        me.module.on('deactivate', me.onDeactivateModule, me);
        me.module.on('close', me.onCloseModule, me);
        me.callParent(arguments);
    },
    onActivateModule: function() {
        this.sessionLoad && this.sessionLoad.delay(this.refreshTime * 1000);
    },
    onDeactivateModule: function() {
        this.sessionLoad && this.sessionLoad.cancel();
    },
    onCloseModule: function() {
        this.onDeactivateModule();
        this.sessionLoad = null;
    }
});
Ext.define('CallCenter.view.cdrSumaryOperador.List2', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.cdrsumaryoperadorlist2',
    store: 'CdrSumaryOperador',
    refreshTime: 7,
    viewConfig: {
        loadMask: false,
        stripeRows: false,
        getRowClass: function(record) {
            var promedio = this.store.getProxy().getReader().rawData.sum,
                promedioUp = promedio * 1.3,
                promedioDow = promedio * 0.7;
            if (record.get('ratio') >= promedioUp) {
                value = 'blue';
            } else if (record.get('ratio') <= promedioDow) {
                value = 'red';
            } else {
                value = '';
            }
            return value;
        }
    },
    initComponent: function() {
        var me = this;
        me.buttonCsv = false;
        me.allowPrint = false;
        me.buttonUpdateLot = false;
        me.allowCreate = false;
        me.buttonCleanFilter = false;
        me.allowUpdate = false;
        me.allowDelete = false;
        me.pagination = false;
        me.textDelete = t('Desloguear Usuario'),
            me.refreshTime = (localStorage && localStorage.getItem('cdrsumaryoperadorfresh')) || me.refreshTime;
        me.extraButtons = [{
            xtype: 'numberfield',
            field: 'jmlhBrg',
            fieldLabel: t('Refresh Time'),
            editable: false,
            minValue: 3,
            labelWidth: 90,
            width: 150,
            selectOnFocus: true,
            allowDecimals: true,
            decimalPrecision: 2,
            value: me.refreshTime,
            listeners: {
                change: function(field) {
                    if (field.value > 0) {
                        me.refreshTime = field.value;
                        localStorage.setItem('operatorstatusrefresh', field.value);
                    };
                }
            }
        }];
        me.columns = [{
                header: t('day'),
                renderer: Ext.util.Format.dateRenderer('Y-m-d'),
                dataIndex: 'day',
                filter: {
                    type: 'date',
                    field: 'starttime'
                },
                flex: 3
            }, {
                xtype: 'templatecolumn',
                tpl: '{idUserusername}',
                header: t('user'),
                dataIndex: 'id_user',
                comboFilter: 'usercombo',
                filter: {
                    type: 'string',
                    field: 'pkg_user.username'
                },
                flex: 2,
                hidden: !App.user.isAdmin,
                hideable: App.user.isAdmin
            }, {
                xtype: 'templatecolumn',
                tpl: '{idUsername}',
                header: t('name'),
                dataIndex: 'id_user',
                comboFilter: 'usercombo',
                filter: {
                    type: 'string',
                    field: 'pkg_user.name'
                },
                flex: 2,
                hidden: !App.user.isAdmin,
                hideable: App.user.isAdmin
            }, {
                xtype: 'templatecolumn',
                tpl: '{idCampaignname}',
                header: t('campaign'),
                dataIndex: 'id_campaign',
                comboFilter: 'campaigncombo',
                flex: 4
            }, {
                header: t('Turno'),
                renderer: Helper.Util.formatTurno,
                dataIndex: 'turno',
                flex: 2,
                filter: {
                    type: 'list',
                    options: [
                        ['M', t('Mañana')],
                        ['T', t('Tarde')]
                    ]
                }
            },
            /*{
                        menuDisabled : true,
                        header    : t('Ultimo logueo'),
                        renderer     : Helper.Util.formatDateTime,
                        dataIndex    : 'stoptime',
                        filter       : {type: 'date', field: 'starttime'},
                        flex         : 4
                    },*/
            {
                header: t('Logueado'),
                dataIndex: 'total_time',
                renderer: Helper.Util.formatsecondsToTime,
                flex: 2
            }
            /*,{
                        menuDisabled : true,
                        header       : t('Tiempo Productivo'),
                        dataIndex    : 'tiempoProductivo',
                        renderer: Helper.Util.formatsecondsToTime,
                        flex         : 2
                    }*/
            , {
                header: t('Descanso'),
                dataIndex: 'total_pause',
                renderer: Helper.Util.formatsecondsToTime,
                flex: 2
            }, {
                menuDisabled: true,
                header: t('Llamadas'),
                dataIndex: 'totalCalls',
                flex: 2
            }, {
                menuDisabled: true,
                header: t('Llamando'),
                dataIndex: 'timeTotalCalls',
                renderer: Helper.Util.formatsecondsToTime,
                flex: 2
            }, {
                menuDisabled: true,
                header: t('Efectivas Total'),
                dataIndex: 'efectivastotal',
                flex: 2
            }, {
                header: t('ratio'),
                dataIndex: 'ratio',
                flex: 2
            }, {
                header: t('status'),
                renderer: Helper.Util.formatPause,
                dataIndex: 'status',
                flex: 2,
                filter: {
                    type: 'list',
                    options: [
                        ['LOGIN', t('working')],
                        ['PAUSE', t('pause')],
                        ['LOGOUT', t('theEnd')]
                    ]
                }
            }
        ];
        me.sessionLoad = Ext.create('Ext.util.DelayedTask', function() {
            me.store.load();
        }, me);
        me.callParent(arguments);
        me.store.on('load', me.onLoadStore, me);
    },
    onLoadStore: function() {
        var me = this;
        me.onDeactivateModule();
        me.onActivateModule();
    },
    onRender: function() {
        var me = this;
        if (Ext.isObject(me.module)) {
            me.module.on('activate', me.onActivateModule, me);
            me.module.on('deactivate', me.onDeactivateModule, me);
            me.module.on('close', me.onCloseModule, me);
        };
        me.callParent(arguments);
    },
    onActivateModule: function() {
        this.sessionLoad && this.sessionLoad.delay(this.refreshTime * 1000);
    },
    onDeactivateModule: function() {
        this.sessionLoad && this.sessionLoad.cancel();
    },
    onCloseModule: function() {
        this.onDeactivateModule();
        this.sessionLoad = null;
    }
});
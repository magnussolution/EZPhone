/**
 * Classe que define a lista de "operatorStatus"
 *
 * MagnusSolution.com <info@magnussolution.com>
 * 10/08/2012
 */
Ext.define('CallCenter.view.operatorStatus.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.operatorstatuslist',
    store: 'OperatorStatus',
    refreshTime: 5,
    initComponent: function() {
        var me = this;
        me.buttonCsv = false;
        me.allowCreate = false;
        me.allowPrint = false;
        me.buttonUpdateLot = false;
        me.refreshTime = (localStorage && localStorage.getItem('operatorstatusrefresh')) || me.refreshTime;
        me.textDelete = t('Desloguear Operador');
        me.labelAll = '';
        me.extraButtons = [{
            text: t('Spy') + ' ' + t('call'),
            iconCls: 'call',
            handler: 'spyCall',
            disabled: true,
            hidden: !App.user.isAdmin,
            reference: 'spycall'
        }, {
            text: t('UnPause') + ' ' + t('Pause'),
            handler: 'onUnPause',
            disabled: true,
            hidden: !App.user.isAdmin,
            reference: 'unPause'
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
                        localStorage.setItem('operatorstatusrefresh', field.value);
                    };
                }
            }
        }];
        me.columns = [{
            header: t('status'),
            dataIndex: 'queue_status',
            flex: 3,
            renderer: Helper.Util.formatStatusQueue
        }, {
            header: t('Peer status'),
            dataIndex: 'peer_status',
            renderer: Helper.Util.translate,
            flex: 3
        }, {
            xtype: 'templatecolumn',
            tpl: '{idUserusername}',
            header: t('user'),
            dataIndex: 'id_user',
            comboFilter: 'usercombo',
            filter: {
                type: 'string',
                field: 'c.username'
            },
            flex: 2
        }, {
            xtype: 'templatecolumn',
            tpl: '{idUsername}',
            header: t('Name'),
            dataIndex: 'id_user',
            comboFilter: 'usercombo',
            filter: {
                type: 'string',
                field: 'c.name'
            },
            flex: 2
        }, {
            header: t('Ultima llamada'),
            dataIndex: 'last_call',
            renderer: Helper.Util.formatTimeStampToTime,
            flex: 2
        }, {
            xtype: 'templatecolumn',
            tpl: '{idCampaignname}',
            header: t('Campaign'),
            dataIndex: 'id_campaign',
            comboFilter: 'campaigncombo',
            flex: 2
        }, {
            header: t('Calls taken'),
            dataIndex: 'calls_taken',
            flex: 2
        }, {
            header: t('Media') + ' ' + t('Time') + ' ' + t('Categorizing'),
            dataIndex: 'media_to_cat',
            renderer: Helper.Util.formatsecondsToTime,
            flex: 2
        }];
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
Ext.define('CallCenter.view.operatorStatus.List2', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.operatorstatuslist2',
    store: 'OperatorStatus',
    refreshTime: 10,
    initComponent: function() {
        var me = this;
        me.buttonCsv = false;
        me.buttonNew = false;
        me.allowPrint = false;
        me.buttonUpdateLot = false;
        me.pagination = false;
        me.refreshTime = (localStorage && localStorage.getItem('operatorstatusfresh')) || me.refreshTime;
        me.columns = [{
            header: t('status'),
            dataIndex: 'queue_status',
            flex: 3,
            renderer: Helper.Util.formatStatusQueue
        }, {
            xtype: 'templatecolumn',
            tpl: '{idUserusername}',
            header: t('user'),
            dataIndex: 'id_user',
            comboFilter: 'usercombo',
            filter: {
                type: 'string',
                field: 'c.username'
            },
            flex: 3
        }, {
            header: t('campaign'),
            dataIndex: 'id_campaign',
            flex: 5
        }, {
            header: t('Ultima llamada'),
            dataIndex: 'last_call',
            renderer: Helper.Util.formatTimeStampToTime,
            flex: 2
        }, {
            header: t('Calls taken'),
            dataIndex: 'calls_taken',
            flex: 2
        }];
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
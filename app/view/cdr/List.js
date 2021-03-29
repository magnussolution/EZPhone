/**
 * Classe que define a lista de "Cdr"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 17/08/2012
 */
Ext.define('CallCenter.view.cdr.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.cdrlist',
    store: 'Cdr',
    standardSubmit: true,
    actions: {
        download: {
            iconCls: 'call',
            handler: 'onSellClick'
        }
    },
    initComponent: function() {
        var me = this;
        me.extraButtons = [{
            text: t('Download Rec'),
            iconCls: 'call',
            handler: 'recordCall',
            disabled: false
        }];
        me.columns = [{
            xtype: 'actioncolumn',
            width: 1,
            sortable: false,
            menuDisabled: true,
            header: t('Rec'),
            dataIndex: 'id',
            items: [{
                iconCls: 'icon-play',
                tooltip: t('Download Rec'),
                handler: 'onDownloadClick'
            }]
        }, {
            header: t('date'),
            renderer: Helper.Util.formatDateTime,
            dataIndex: 'starttime',
            flex: 5
        }, {
            header: t('number'),
            dataIndex: 'calledstation',
            flex: 4
        }, {
            header: t('sessiontime'),
            dataIndex: 'sessiontime',
            renderer: Helper.Util.formatsecondsToTime,
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
            flex: 3,
            hidden: App.user.isOperador
        }, {
            xtype: 'templatecolumn',
            tpl: '{idCampaignname}',
            header: t('campaign'),
            dataIndex: 'id_campaign',
            comboFilter: 'campaigncombo',
            flex: 5
        }, {
            xtype: 'templatecolumn',
            tpl: '{idPhonebookname}',
            header: t('phonebook'),
            dataIndex: 'id_phonebook',
            comboFilter: 'phonebookcombo',
            flex: 5
        }, {
            xtype: 'templatecolumn',
            tpl: '{idTrunktrunkcode}',
            header: t('trunk'),
            dataIndex: 'id_trunk',
            comboRelated: 'trunkcombo',
            flex: 4,
            hidden: App.user.isOperador
        }, {
            header: t('status') + ' ' + t('system'),
            dataIndex: 'terminatecauseid',
            renderer: Helper.Util.formatDialStatus,
            flex: 3,
            filter: {
                type: 'list',
                options: [
                    [1, t('answer')],
                    [2, t('busy')],
                    [3, t('no') + ' ' + t('answer')],
                    [4, t('cancelcall')],
                    [5, 'congestion'],
                    [6, 'chanunavail'],
                    [7, 'dontcall'],
                    [8, 'torture'],
                    [9, 'invalidargs']
                ]
            }
        }, {
            xtype: 'templatecolumn',
            tpl: '{idCategoryname}',
            header: t('category'),
            dataIndex: 'id_category',
            comboFilter: 'categorycombo',
            flex: 5
        }]
        me.callParent(arguments);
    }
});
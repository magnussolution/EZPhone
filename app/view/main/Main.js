/**
 * Class to main layout of the app
 *
 * Adilson Magnus <info@magnussolution.com>
 * 09/07/2014
 */
Ext.define('CallCenter.view.main.Main', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.main',
    layout: 'border',
    controller: 'main',
    initComponent: function() {
        var me = this;
        me.items = [{
            region: 'north',
            border: false,
            hidden: window.isTablet,
            reference: 'header',
            height: App.user.webphone == 1 ? 75 : 60,
            dockedItems: [{
                xtype: 'toolbar',
                items: [{
                        xtype: 'image',
                        hidden: true,
                        src: window.logo + '.png',
                        height: App.user.webphone == 1 ? 60 : 45
                    }, {
                        xtype: 'webphone'
                    }, '->',
                    /*{
                                       xtype: 'locale',
                                       hidden: !App.user.isAdmin
                                   }, '-',*/
                    {
                        xtype: 'statusoperador'
                    }, '-', {
                        xtype: 'splitbutton',
                        hidden: App.user.idOperator,
                        scale: 'medium',
                        iconAlign: 'top',
                        glyph: icons.user,
                        handler: function() {
                            this.showMenu()
                        },
                        text: me.user,
                        menu: [{
                            text: t('Settings') + ' ' + t('Theme'),
                            glyph: icons.cog,
                            handler: 'openSettings',
                            hidden: !App.user.isAdmin
                        }, {
                            text: t('Import Logo'),
                            glyph: icons.cog,
                            handler: 'importLogo',
                            hidden: !App.user.isAdmin || window.isTablet || window.isTablets
                        }, '-', {
                            glyph: icons.exit,
                            text: t('Exit'),
                            handler: 'logout'
                        }]
                    }
                ]
            }]
        }, {
            reference: 'tabPanelMenu',
            region: 'west',
            title: t('Menu'),
            width: window.isTablet ? 215 : 200,
            minWidth: 150,
            maxWidth: 400,
            split: true,
            collapsible: true,
            collapsed: false,
            layout: window.isTablet ? '' : 'accordion',
            defaultType: 'treepanel',
            header: window.isTablet ? false : '',
            autoScroll: true,
            defaults: {
                animFloat: false,
                border: false,
                autoScroll: window.isTablet ? false : true,
                rootVisible: false,
                listeners: {
                    itemclick: 'createTabStandard'
                }
            },
            listeners: {
                render: 'loadMenuStandard'
            }
        }, {
            region: 'center',
            xtype: 'tabpanel',
            reference: 'tabPanelCenter',
            listeners: {
                tabchange: 'stopStatusBar'
            },
            items: [{
                //xtype: 'dashboardmodule',
                listeners: {
                    activate: 'setRunnerInfoSystem'
                },
                glyph: icons.home,
                title: t('Home'),
                stateful: false,
                dockedItems: {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    reference: 'statusBar',
                    hidden: true,
                    defaults: {
                        handleMouseEvents: false
                    },
                    items: [{
                        reference: 'avgCpuCount',
                        iconCls: 'icon-processor',
                        tooltip: t('cpuCount')
                    }, {
                        reference: 'avgCpuModel',
                        tooltip: t('cpuModel')
                    }, '-', {
                        reference: 'avgCpuMediaUso',
                        iconCls: 'icon-processor',
                        tooltip: t('averageCpuUsage')
                    }, '-', {
                        reference: 'avgCpuPercent',
                        iconCls: 'icon-processor',
                        tooltip: t('cpupercent')
                    }, '-', {
                        reference: 'avgMemTotal',
                        iconCls: 'icon-memory',
                        tooltip: t('memTotal')
                    }, '-', {
                        reference: 'avgMemUsed',
                        iconCls: 'icon-memory',
                        tooltip: t('memUsed')
                    }, '-', {
                        reference: 'avgNetworkin',
                        iconCls: 'icon-networkIn',
                        tooltip: t('networkIn')
                    }, '-', {
                        reference: 'avgNetworkout',
                        iconCls: 'icon-networkOut',
                        tooltip: t('networkOut')
                    }, '-', {
                        reference: 'avgUptime',
                        iconCls: 'icon-uptime',
                        tooltip: t('uptime')
                    }]
                },
                items: [{
                    xtype: 'dashboardmodule'
                }]
            }]
        }];
        me.callParent(arguments);
    }
});
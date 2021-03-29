Ext.define('CallCenter.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    requires: ['Ext.Img', 'Ext.button.Split', 'Ext.layout.container.Accordion', 'Ext.tab.Panel', 'Ext.dashboard.Dashboard'],
    msgLogout: t('Do you really want to leave the system?'),
    textLogout: t('Exit'),
    init: function() {
        var me = this;
        me.runnerInfoSystem = Ext.create('Ext.util.TaskRunner');
        me.callParent(arguments);
        App.callLogout = me.callLogout;
    },
    loadMenuStandard: function(menu) {
        var me = this,
            modules = [],
            menuText,
            text,
            iconCls;
        menu.setLoading();
        Ext.each(App.user.menu, function(menuItem) {
            if (!Ext.isEmpty(menuItem.rows)) {
                Ext.each(menuItem.rows, function(item) {
                    text = (item.text.indexOf('t(') !== -1) ? eval(item.text) : item.text;
                    modules.push({
                        text: text,
                        iconCls: 'modules',
                        module: item.module,
                        leaf: item.leaf,
                        children: me.formatSubModuleStandard(item.rows),
                        action: item.action,
                        fieldsAllow: item.fieldsAllow,
                        labelExtraFields: item.labelExtraFields,
                        labelExtraFieldsType: item.labelExtraFieldsType
                    });
                }, me);
            }
            menuText = (menuItem.text.indexOf('t(') !== -1) ? eval(menuItem.text) : menuItem.text;
            menu.add({
                title: menuText,
                root: {
                    children: modules
                },
                iconCls: ''
            });
            modules = [];
        }, me);
        menu.setLoading(false);
    },
    formatSubModuleStandard: function(menu) {
        var me = this,
            text;
        Ext.each(menu, function(item) {
            text = (item.text.indexOf('t(') !== -1) ? eval(item.text) : item.text;
            item.text = text;
            item.children = me.formatSubModuleStandard(item.rows);
        }, me);
        return menu;
    },
    createTabStandard: function(view, record) {
        var me = this,
            tabOpen,
            module,
            action,
            hasAction,
            txt = record.get('text'),
            iconCls = record.get('iconCls') || 'file3',
            tabPanelCenter = me.lookupReference('tabPanelCenter');
        if (record.get('leaf')) {
            tabOpen = tabPanelCenter.items.findBy(function(tab) {
                return tab.title === txt;
            });
            if (!tabOpen) {
                module = record.get('module');
                action = record.get('action');
                hasAction = Ext.isDefined(action);
                tabPanelCenter.add({
                    title: txt,
                    autoDestroy: true,
                    closable: true,
                    iconCls: iconCls,
                    xtype: module + 'module',
                    module: module,
                    titleModule: txt,
                    allowCreate: hasAction ? action.search('c') !== -1 : false,
                    allowUpdate: hasAction ? action.search('u') !== -1 : false,
                    allowDelete: hasAction ? action.search('d') !== -1 : false,
                    fieldsAllow: record.raw.fieldsAllow,
                    labelExtraFieldsType: record.raw.labelExtraFieldsType,
                    labelExtraFields: record.raw.labelExtraFields
                }).show();
            } else {
                tabPanelCenter.setActiveTab(tabOpen);
            }
        }
    },
    importLogo: function(menuItem) {
        var me = this;
        if (me.winLogo && me.winLogo.isVisible()) {
            return;
        }
        me.winLogo = Ext.widget('importlogo', {
            title: menuItem.text,
            glyph: menuItem.glyph
        });
    },
    saveLogo: function() {
        var me = this,
            view = me.getView(),
            btnSave = me.lookupReference('saveImportLogo'),
            formPanel = me.lookupReference('formImportLogo'),
            fieldImportLogo = formPanel.getForm().findField('logo'),
            values = Ext.apply(formPanel.getValues(), {
                formImportLogo: fieldImportLogo.getValue()
            });
        if (!formPanel.isValid()) {
            Ext.ux.Alert.alert(view.titleWarning, view.msgFormInvalid, 'warning');
            return;
        }
        btnSave.disable();
        formPanel.setLoading();
        formPanel.getForm().submit({
            url: window.isDesktop ? 'index.php/authentication/importWallpapers' : 'index.php/authentication/importLogo',
            params: values,
            success: function(form, action) {
                var obj = Ext.decode(action.response.responseText);
                if (obj.success) {
                    Ext.ux.Alert.alert(me.titleSuccess, t(obj.msg), 'success');
                } else {
                    errors = Helper.Util.convertErrorsJsonToString(obj.msg);
                    if (!Ext.isObject(obj.errors)) {
                        Ext.ux.Alert.alert(me.titleError, errors, 'error');
                    } else {
                        Ext.ux.Alert.alert(me.titleWarning, me.msgFormInvalid, 'warning');
                    }
                }
                formPanel.setLoading(false);
                btnSave.enable();
            }
        });
    },
    openHelp: function(menuItem) {
        var me = this;
        if (me.winHelp && me.winHelp.isVisible()) {
            return;
        }
        me.winHelp = Ext.widget('window', {
            title: menuItem.text,
            glyph: menuItem.glyph,
            autoShow: true,
            width: 800,
            height: 450,
            layout: 'fit',
            border: false,
            items: {
                xtype: 'help'
            }
        });
    },
    openChangePassword: function(menuItem) {
        var me = this;
        if (me.winChangePassword && me.winChangePassword.isVisible()) {
            return;
        }
        me.winChangePassword = Ext.widget('changepassword', {
            title: menuItem.text,
            glyph: menuItem.glyph
        });
    },
    openAbout: function(menuItem) {
        var me = this;
        if (me.winAbout && me.winAbout.isVisible()) {
            return;
        }
        me.winAbout = Ext.widget('about', {
            title: menuItem.text,
            glyph: menuItem.glyph
        });
    },
    openSettings: function(menuItem) {
        var me = this;
        if (me.winSettings && me.winSettings.isVisible()) {
            return;
        }
        me.winSettings = Ext.widget('window', {
            title: menuItem.text,
            glyph: menuItem.glyph,
            autoShow: true,
            width: 900,
            height: 520,
            layout: 'fit',
            border: false,
            items: {
                xtype: 'settings'
            }
        });
    },
    logout: function() {
        var me = this;
        Ext.Msg.confirm(me.textLogout, me.msgLogout, function(opt) {
            if (opt === 'yes') {
                me.callLogout();
            }
        });
    },
    callLogout: function() {
        var me = this;
        window.isDesktop ? App.desktop.setLoading() : App.mainView.setLoading();
        Ext.Ajax.request({
            url: 'index.php/authentication/logoff',
            success: function() {
                App.user.logged = false;
                location.reload();
            }
        });
    },
    getManual: function(view, record) {
        if (!record.get('leaf')) {
            return;
        }
        var panelManual = this.lookupReference('manualPanel');
        panelManual.getLoader().url = record.get('url');
        panelManual.getLoader().load();
    },
    stopStatusBar: function(tabPanel, newCard) {
        var me = this;
        if (newCard.xtype !== 'dashboard') {
            me.runnerInfoSystem.stopAll();
        } else {
            me.runnerInfoSystem.start({
                run: me.setInfoSystem,
                interval: 5000,
                scope: me
            });
        }
    },
    setRunnerInfoSystem: function() {
        var me = this;
        if (!App.user.isAdmin) {
            return;
        }
        this.lookupReference('statusBar').show();
        me.runnerInfoSystem.start({
            run: me.setInfoSystem,
            interval: 7000,
            scope: me
        });
    },
    setInfoSystem: function() {
        var me = this;
        Ext.Ajax.request({
            url: 'index.php/statusSystem/statusSystem',
            success: function(response) {
                response = Ext.decode(response.responseText);
                me.lookupReference('avgCpuCount').setText(response.rows.cpuCount);
                me.lookupReference('avgCpuModel').setText(response.rows.cpuModel);
                me.lookupReference('avgCpuMediaUso').setText(response.rows.cpuMediaUso);
                me.lookupReference('avgCpuPercent').setText(response.rows.cpuPercent);
                me.lookupReference('avgMemTotal').setText(response.rows.memTotal);
                me.lookupReference('avgMemUsed').setText(response.rows.memUsed);
                me.lookupReference('avgNetworkin').setText(response.rows.networkin);
                me.lookupReference('avgNetworkout').setText(response.rows.networkout);
                me.lookupReference('avgUptime').setText(response.rows.uptime);
            }
        });
    }
});
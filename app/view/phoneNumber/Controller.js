Ext.define('CallCenter.view.phoneNumber.Controller', {
    extend: 'Ext.ux.app.ViewController',
    alias: 'controller.phonenumber',
    init: function() {
        var me = this;
        me.control({
            'categorycombo': {
                select: me.showFieldsRelated
            },
            'typedatebackcall': {
                select: me.setAgendamentoType
            }
        });
        if (App.user.isOperator) {
            me.handler = setInterval(function() {
                Ext.Ajax.request({
                    url: 'index.php/phoneNumber/autoLoadPhoneNumber',
                    params: {
                        id: App.user.id
                    },
                    success: function(r) {
                        var pattern = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
                        if (r.responseText == 1) {
                            me.store.load();
                        } else if (pattern.test(r.responseText)) {
                            window.open(r.responseText, "_blank");
                            me.store.load();
                        }
                    }
                });
            }, 2000)
        }
        me.callParent(arguments);
    },
    onRenderModule: function() {
        var me = this,
            btnChart = me.lookupReference('chart');
        me.callParent(arguments);
        if (App.user.isOperator) {
            me.file_get_contents();
        }
    },
    file_get_contents: function() {
        var me = this;
        Ext.Ajax.request({
            url: 'index.php/campaign/getUrl/',
            success: function(r) {
                var h = window.innerHeight - 44;
                heightwin = Ext.getBody().getViewSize().height - 285;
                me.windowURL = Ext.widget('window', {
                    hidden: App.user.campaign_open_url.length,
                    title: t('Campanha'),
                    layout: 'fit',
                    autoShow: true,
                    resizable: true,
                    closable: true,
                    collapsible: true,
                    collapsed: false,
                    collapseDirection: 'left',
                    frame: false,
                    width: 480,
                    height: heightwin,
                    autoScroll: true,
                    items: {
                        autoScroll: true,
                        reference: 'url',
                        html: r.responseText
                    },
                    listeners: {
                        show: function() {
                            this.setX(5);
                            this.setY(h - this.getHeight());
                        }
                    }
                });
            }
        });
    },
    handleMapReady: function(btn) {
        var me = this,
            store = me.store,
            filter = me.list.filters.getFilterData().length ? Ext.encode(me.list.filters.getFilterData()) : store.proxy.extraParams.filter;
        if (!filter) {
            Ext.ux.Alert.alert('Alert', t('Realize um filtro para mostrar no MAPA'), 'notification');
            btn.enable();
            me.list.setLoading(false);
            return;
        };
        Ext.widget('phoneNumbergooglemaps', {
            filter: filter
        });
    },
    setAgendamentoType: function(showFields) {
        var me = this,
            fields = me.formPanel.getForm().getFields(),
            fieldUser = me.formPanel.getForm().findField('id_user'),
            form = me.formPanel.getForm();
        fields.each(function(field) {
            if (field.name == 'cita_concreta') {
                if (field.value == 2) {
                    fieldUser.allowBlank = false;
                    fieldUser['show']();
                } else {
                    fieldUser.allowBlank = true;
                    fieldUser['hide']();
                }
            }
        });
    },
    showFieldsRelated: function(showFields) {
        var me = this,
            fields = me.formPanel.getForm().getFields(),
            fieldDatebackcall = me.formPanel.getForm().findField('datebackcall'),
            fieldCitaConcreta = me.formPanel.getForm().findField('cita_concreta'),
            form = me.formPanel.getForm();
        fields.each(function(field) {
            if (field.name == 'id_category') {
                if (field.value == 2) {
                    fieldDatebackcall.allowBlank = false;
                    fieldDatebackcall['show']();
                    fieldCitaConcreta.allowBlank = false;
                    fieldCitaConcreta['show']();
                } else {
                    fieldDatebackcall.allowBlank = true;
                    fieldDatebackcall['hide']();
                    fieldDatebackcall.validate();
                    fieldCitaConcreta.allowBlank = true;
                    fieldCitaConcreta['hide']();
                    fieldCitaConcreta.validate();
                }
            }
        });
    },
    onNew: function() {
        var me = this,
            form = me.formPanel.getForm();
        form.findField('id_user').setVisible(false);
        form.findField('datebackcall').setVisible(false);
        form.findField('cita_concreta').setVisible(false);
        me.callParent(arguments);
    },
    onEdit: function() {
        var me = this,
            form = me.formPanel.getForm(),
            record = me.list.getSelectionModel().getSelection()[0];
        me.callParent(arguments);
        form.findField('datebackcall').setVisible(record.data.id_category == 2);
        form.findField('cita_concreta').setVisible(record.data.id_category == 2);
        if (App.user.isAdmin) {
            form.findField('id_user').setVisible(record.data.cita_concreta > 0 && record.data.id_category == 2);
        } else {
            form.findField('id_user').setVisible(record.data.cita_concreta == 2);
        }
    },
    onSave: function() {
        var me = this,
            id_category = me.formPanel.getForm().findField('id_category').getValue(),
            datebackcall = me.formPanel.getForm().findField('datebackcall').getValue(),
            record = me.list.getSelectionModel().getSelection()[0];
        if (id_category == 1 && App.user.isOperator) {
            Ext.ux.Alert.alert(me.titleError, t('El número no puede ser salvo con el estado ACTIVO'), 'error');
        } else if (id_category == 0) {
            Ext.ux.Alert.alert(me.titleError, t('No se puede salvar como Incativo'), 'error');
        } else if (id_category == 2 && !datebackcall) {
            Ext.ux.Alert.alert(me.titleError, t('Informe la hora para volver a llamar'), 'error');
        } else {
            me.callParent(arguments);
        }
    },
    reprocesar: function(btn) {
        var me = this,
            store = me.store,
            filter = me.list.filters.getFilterData().length ? Ext.encode(me.list.filters.getFilterData()) : store.proxy.extraParams.filter;
        Ext.Ajax.request({
            url: 'index.php/phoneNumber/reprocesar/',
            params: {
                filter: filter
            },
            scope: me,
            success: function(response) {
                response = Ext.decode(response.responseText);
                if (response[me.nameSuccessRequest]) {
                    Ext.ux.Alert.alert(me.titleSuccess, response[me.nameMsgRequest], 'success', true, false, 15000);
                    store.load();
                } else {
                    var errors = Helper.Util.convertErrorsJsonToString(response[me.nameMsgRequest]);
                    Ext.ux.Alert.alert(me.titleError, errors, 'error');
                }
            }
        });
    },
    inactveActive: function(btn) {
        var me = this,
            store = me.store,
            filter = me.list.filters.getFilterData().length ? Ext.encode(me.list.filters.getFilterData()) : store.proxy.extraParams.filter;
        btn.disable();
        me.list.setLoading(true);
        if (!filter) {
            Ext.ux.Alert.alert('Alert', t('Realize um filtro en agenda para poder cambiar de inactivo para activo'), 'notification');
            btn.enable();
            me.list.setLoading(false);
            return;
        };
        Ext.Msg.confirm('Confirm', t('Confirme que desea cambiar los numeros de inactivo para activo?'), function(btnYes) {
            if (btnYes === 'yes') {
                Ext.Ajax.request({
                    url: 'index.php/phoneNumber/inactveActive/',
                    params: {
                        filter: filter
                    },
                    scope: me,
                    success: function(response) {
                        response = Ext.decode(response.responseText);
                        if (response[me.nameSuccessRequest]) {
                            Ext.ux.Alert.alert(me.titleSuccess, response[me.nameMsgRequest], 'success');
                            store.load();
                            btn.enable();
                            me.list.setLoading(false);
                        } else {
                            var errors = Helper.Util.convertErrorsJsonToString(response[me.nameMsgRequest]);
                            Ext.ux.Alert.alert(me.titleError, errors, 'error');
                            btn.enable();
                            me.list.setLoading(false);
                        }
                    },
                    failure: function() {
                        Ext.ux.Alert.alert(me.titleError, t('Php return error, contact the admin'), 'error');
                        btn.enable();
                        me.list.setLoading(false);
                    }
                });
            }
        });
    },
    addCall: function(btn) {
        var me = this,
            form = me.formPanel.getForm(),
            values = form.getFieldValues();
        Ext.Ajax.request({
            url: 'index.php/phoneNumber/sample/',
            params: {
                id: me.formPanel.idRecord,
                field: btn.name
            },
            scope: me,
            success: function(response) {
                response = Ext.decode(response.responseText);
                if (response[me.nameSuccessRequest]) {
                    Ext.ux.Alert.alert(me.titleSuccess, response[me.nameMsgRequest], 'success');
                } else {
                    var errors = Helper.Util.convertErrorsJsonToString(response[me.nameMsgRequest]);
                    Ext.ux.Alert.alert(me.titleError, errors, 'error');
                }
            }
        });
    },
    onSelectionChange: function(selModel, selections) {
        var me = this,
            btnAddCall = me.lookupReference('addcall');
        me.callParent(arguments);
        if (selections.length !== 1) {
            btnAddCall.toggle(false);
            btnAddCall.setDisabled(true);
        } else {
            btnAddCall.setDisabled(false);
        }
    }
});
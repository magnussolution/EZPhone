/**
 * Ux to import CSV
 * Adilson Magnus
 * 11/08/2014
 */
Ext.define('Ext.ux.window.ImportCsv', {
    extend: 'Ext.window.Window',
    requires: ['Ext.ux.form.field.FileUpload'],
    autoShow: true,
    modal: true,
    layout: 'fit',
    iconCls: 'icon-import-csv',
    title: t('importFromCsv'),
    width: 400,
    height: 175,
    labelWidthFields: 75,
    htmlTipInfo: '',
    fieldsImport: [],
    listeners: {
        close: function() {
            this.list.setLoading(false);
        }
    },
    initComponent: function() {
        var me = this,
            fieldsImport = Ext.Array.merge(me.fieldsImport, [{
                xtype: 'uploadfield',
                fieldLabel: t('fileCsv'),
                htmlTipInfo: me.htmlTipInfo
            }]);
        me.items = [{
            xtype: 'form',
            bodyPadding: 5,
            labelWidthFields: me.labelWidthFields,
            items: fieldsImport
        }];
        me.title = me.title + (me.titleModule ? ' - ' + me.titleModule : '');
        me.bbar = [{
            xtype: 'tbtext',
            text: t('maxSizeFile') + '3 MB'
        }, '->', {
            iconCls: 'icon-import-csv',
            text: t('importText'),
            scope: me,
            handler: me.onImport
        }];
        me.callParent(arguments);
    },
    onImport: function(btn) {
        var me = this,
            store = me.list.store;
        btn.disable();
        me.list.setLoading(true);
        me.down('form').submit({
            url: store.getProxy().api.fromCsv,
            scope: me,
            success: function(form, action) {
                var obj = Ext.decode(action.response.responseText);
                if (obj.success) {
                    Ext.ux.Alert.alert(t('Success'), obj.msg, 'success');
                } else {
                    Ext.ux.Alert.alert(t('Error'), obj.errors, 'error');
                }
                btn.enable();
                me.list.setLoading(false);
                store.load();
                me.close();
            },
            failure: function(form, action) {
                if (Ext.isObject(action.response.responseText)) {
                    var obj = Ext.decode(action.response.responseText);
                    Ext.ux.Alert.alert(t('Error'), t(obj.errors), 'error');
                } else {
                    var obj = Ext.decode(action.response.responseText);
                    Ext.ux.Alert.alert(t('Error'), t(obj.errors), 'error', true, false);
                }
                btn.enable();
            }
        });
    }
});
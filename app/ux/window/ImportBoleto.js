/**
 * Ux to import CSV
 * Adilson Magnus
 * 11/08/2014
 */

Ext.define('Ext.ux.window.ImportBoleto', {
	extend: 'Ext.window.Window',
    requires: ['Ext.ux.form.field.FileUpload'],
	autoShow: true,
    modal: true,
    layout: 'fit',
    iconCls: 'boleto',
    title: t('Importa Retorno Boleto'),
    width: 400,
    height: 175,
    labelWidthFields: 180,
    htmlTipInfo: '',
    fieldsImport: [],

    initComponent: function() {
    	var me = this,
            fieldsImport = Ext.Array.merge(me.fieldsImport, [{
                xtype: 'uploadfield',
                fieldLabel: t('Selecion o arquivo .RET'),
                htmlTipInfo: me.htmlTipInfo
            }]);

    	me.items = [{
	    	xtype: 'form',
            bodyPadding: 5,
	    	labelWidth: me.labelWidthFields,
	    	items: fieldsImport
	    }];

    	me.title = me.title + (me.titleModule ? ' - ' + me.titleModule : '');

        me.bbar = [{
            xtype: 'tbtext',
            text : t('maxSizeFile') + '3 MB'
        },'->', {
            iconCls: 'boleto',
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
            url: 'index.php/boleto/retorno',
            scope: me,
            success: function(form, action) {
                var obj = Ext.decode(action.response.responseText);
                    
                if(obj.success) {

                    Ext.ux.Alert.alert(t('Success'), obj.msg, 'success',true,false,40000);
                }
                else {
                    Ext.ux.Alert.alert(t('Error'), obj.errors, 'error');
                }
 
                btn.enable();
                me.list.setLoading(false);
                store.load();
                me.close();
            },
            failure: function(form, action) {
                
                if(Ext.isObject(action.response.responseText)) {

                    var obj = Ext.decode(action.response.responseText);            
                    Ext.ux.Alert.alert(t('Error'), obj.errors, 'error');

                }
                else{
                    Ext.ux.Alert.alert(t('Error'), action.response.responseText, 'error',true,10);
                }
                btn.enable();
                me.list.setLoading(false);
                me.close();
            }
        });


    }
});
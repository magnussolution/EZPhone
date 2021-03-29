/**
 * Module to management of "Pedido"
 *
 * Adilson Magnus <info@magnussolution.com> 
 * 19/03/2014
 */
Ext.define('CallCenter.view.massiveCallCampaign.Controller', {
    extend: 'Ext.ux.app.ViewController',
    alias: 'controller.massivecallcampaign',
    isSubmitForm: true,
    submitForm: function(values) {
        var me = this,
            store = me.store;
        Ext.apply(me.params, {
            id_massive_call_phonebook_array: me.formPanel.getForm().getFieldValues().id_massive_call_phonebook.join(',')
        });
        me.formPanel.add({
            xtype: 'hiddenfield',
            name: me.idProperty,
            value: me.formPanel.idRecord
        });
        me.formPanel.getForm().submit({
            url: me.store.getProxy().api.create,
            params: me.params,
            scope: me,
            success: function(form, action) {
                var obj = Ext.decode(action.response.responseText);
                if (obj.success) {
                    Ext.ux.Alert.alert(me.titleSuccess, obj.msg, 'success');
                    me.formPanel.fireEvent('aftersave', me.formPanel, obj.rows[0]);
                } else {
                    errors = Helper.Util.convertErrorsJsonToString(obj.msg);
                    if (!Ext.isObject(obj.errors)) {
                        Ext.ux.Alert.alert(me.titleError, errors, 'error');
                    } else {
                        form.markInvalid(obj.errors);
                        Ext.ux.Alert.alert(me.titleWarning, me.msgFormInvalid, 'warning');
                    }
                }
                me.store.load();
                me.formPanel.setLoading(false);
                me.saveButton.enable();
            },
            failure: function(form, action) {
                var obj = Ext.decode(action.response.responseText),
                    errors = Helper.Util.convertErrorsJsonToString(obj.errors);
                if (!Ext.isObject(obj.errors)) {
                    Ext.ux.Alert.alert(me.titleError, errors, 'error');
                } else {
                    form.markInvalid(obj.errors);
                    Ext.ux.Alert.alert(me.titleWarning, errors, 'error');
                }
                me.formPanel.setLoading(false);
                me.saveButton.enable();
            }
        });
        //delete me.params['id_phonebook_array'];
    }
});
/**
 * Module to management of "Pedido"
 *
 * Adilson Magnus <info@magnussolution.com> 
 * 19/03/2014
 */
Ext.define('CallCenter.view.operatorStatus.Controller', {
    extend: 'Ext.ux.app.ViewController',
    alias: 'controller.operatorstatus',
    formHidden: true,
    onAfterDestroy: function(formPanel) {
        var me = this;
        me.callParent(arguments);
        me.store.load();
    },
    onSelectionChange: function(selModel, selections) {
        var me = this,
            btnUnpause = me.lookupReference('unPause'),
            btnAddCall = me.lookupReference('spycall'),
            selected = me.list.getSelectionModel().getSelection()[0];
        me.callParent(arguments);
        if (selections.length !== 1) {
            btnAddCall.toggle(false);
            btnAddCall.setDisabled(true);
        } else {
            btnAddCall.setDisabled(false);
            btnUnpause.setDisabled(selected.raw.queue_paused != 1);
        }
    },
    onUnPause: function(btn) {
        var me = this,
            store = me.store,
            selected = me.list.getSelectionModel().getSelection()[0];
        Ext.Ajax.request({
            url: 'index.php/campaign/loginOut',
            scope: me,
            params: {
                id: selected.data.id_campaign,
                action: 'unpause',
                id_user: selected.data.id_user
            },
            success: function(response) {
                response = Ext.decode(response.responseText);
                if (response.success) {
                    Ext.ux.Alert.alert(t('Success'), response.msg, 'success');
                } else {
                    getForm.setLoading(false);
                }
            }
        });
    },
    spyCall: function(btn) {
        var me = this,
            store = me.store,
            selected = me.list.getSelectionModel().getSelection()[0];
        if (me.list.getSelectionModel().getSelection().length == 1) {
            Ext.Ajax.request({
                url: 'index.php/operatorStatus/spyCall',
                params: {
                    channel: selected.get('canal')
                },
                scope: me,
                success: function(response) {
                    response = Ext.decode(response.responseText);
                    if (response[me.nameSuccessRequest]) {
                        Ext.ux.Alert.alert(me.titleSuccess, response[me.nameMsgRequest], 'success');
                    } else {
                        Ext.ux.Alert.alert(me.titleError, response[me.nameMsgRequest], 'error');
                    }
                }
            });
        } else {
            Ext.ux.Alert.alert(me.titleError, 'Please Select only a call', 'notification');
        };
    }
});
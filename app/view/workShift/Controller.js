/**
 * Module to management of "Pedido"
 *
 * Adilson Magnus <info@magnussolution.com> 
 * 19/03/2014
 */

Ext.define('CallCenter.view.workShift.Controller', {
    extend: 'Ext.ux.app.ViewController',
    alias: 'controller.workshift',

    onSelectionChange: function(selModel, selections){
        var me = this,
            btn = me.lookupReference('signupbutton');     

        me.callParent(arguments);

        if(selections.length == 0)
        {
            btn.toggle(false);
            btn.setDisabled(true);
        }
        else        
            btn.setDisabled(false);  


    },


    onNew: function() {
        var me = this;
	       
	   me.callParent(arguments);

        me.onShowFields(me.formPanel,false);
    },

    onEdit: function() {
        var me = this;

        me.callParent(arguments);

        me.onShowFields(me.formPanel,true);

        
        selected = me.list.getSelectionModel().getSelection()[0];

        filterUser = [{
            type: 'string',
            comparison: 'eq',
            value: selected.get('id'),
            field: 't.id_workshift'
        }];


        storeWorkShift = me.formPanel.down('userworkshiftlist').getStore();
        initFilterRefill = storeWorkShift.proxy.extraParams.filter;

        storeWorkShift.defaultFilter = filterUser;
        storeWorkShift.load();
        storeWorkShift.defaultFilter = initFilterRefill;


    },

    onAfterDestroy: function(formPanel) {
        var me = this;

        me.callParent(arguments);
        me.store.load();
    },

    onShowFields : function(formPanel, type) {

        fieldDayStart  = formPanel.getForm().findField('day_start');
        fieldDayEnd  = formPanel.getForm().findField('day_end');
        fieldTurno  = formPanel.getForm().findField('turno');
        fieldDay  = formPanel.getForm().findField('day');
        fieldDayMStart  = formPanel.getForm().findField('daily_morning_start_time');
        fieldDayMStop  = formPanel.getForm().findField('daily_morning_stop_time');
        fieldDayAStart  = formPanel.getForm().findField('daily_afternoon_start_time');
        fieldDayAStop  = formPanel.getForm().findField('daily_afternoon_stop_time');
        fieldStartTime  = formPanel.getForm().findField('start_time');
        fieldStoptime  = formPanel.getForm().findField('stop_time');

        //mostra 
        fieldDayStart.setAllowBlank(type);
        fieldDayStart.setHidden(type);
        fieldDayEnd.setAllowBlank(type);
        fieldDayEnd.setHidden(type);
        fieldDayMStart.setAllowBlank(type);
        fieldDayMStart.setHidden(type);
        fieldDayMStop.setAllowBlank(type);
        fieldDayMStop.setHidden(type);
        fieldDayAStart.setAllowBlank(type);
        fieldDayAStart.setHidden(type);
        fieldDayAStop.setAllowBlank(type);
        fieldDayAStop.setHidden(type);

        //oculta
        fieldTurno.setAllowBlank(!type);
        fieldTurno.setHidden(!type);
        fieldDay.setAllowBlank(!type);
        fieldDay.setHidden(!type);
        fieldStartTime.setAllowBlank(!type);
        fieldStartTime.setHidden(!type);
        fieldStoptime.setAllowBlank(!type);
        fieldStoptime.setHidden(!type);

    },
    onSignup: function(btn) {

        var me      = this,
            arrRecords = [],
            store       = me.list.getStore(),
            records    = me.list.getSelectionModel().getSelection();

        if (!records) {
            Ext.ux.Alert.alert(me.titleError, t('Por favor selecione por lo menos una workShift'), 'error');
            return;
        }

        Ext.each(records, function(record) {
            objRecord = {};
            Ext.each(me.idProperty, function(pk){
                objRecord[pk] = record.get(pk);
            });
            arrRecords.push(Ext.clone(objRecord));
        });


        me.list.setLoading(me.msgWait);
        Ext.Ajax.request({
            url    : 'index.php/workShift/signup',

            params : {rows: Ext.encode(arrRecords)},
            scope  : me,
            success: function(response) {
                response = Ext.decode(response.responseText);

                if(response[me.nameSuccessRequest]){
                  Ext.ux.Alert.alert(me.titleSuccess, response[me.nameMsgRequest], 'success',true);
                }
                else {
                  Ext.ux.Alert.alert(me.titleError, response[me.nameMsgRequest], 'error');
                }
            }
        });
        me.list.setLoading(false);
        me.store.load();      

    }

});
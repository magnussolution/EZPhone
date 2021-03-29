/**
 * Module to management of "Pedido"
 *
 * Adilson Magnus <info@magnussolution.com> 
 * 19/03/2014
 */

Ext.define('CallCenter.view.breaks.Controller', {
    extend: 'Ext.ux.app.ViewController',
    alias: 'controller.breaks',
    init: function(){
        var me = this;

        me.control({
            'noyescombo': {
                select: me.onSelectType
            }
        });

        me.callParent(arguments);
    },

	onSelectType: function(combo, records) {		
    		this.showFieldsRelated(records.raw.showFields);
	},
	showFieldsRelated: function(showFields) {
		var me = this,
			fields = me.formPanel.getForm().getFields(),
			fieldStartTime	= me.formPanel.getForm().findField('start_time'),
			fieldStopTime	= me.formPanel.getForm().findField('stop_time'),
			fieldMaximo	= me.formPanel.getForm().findField('maximum_time'),
			form = me.formPanel.getForm();

			
		fields.each(function(field) {

			if (field.name == 'mandatory') {	
				fieldStartTime.setVisible(field.value);
				fieldStopTime.setVisible(field.value);
				fieldMaximo.setVisible(!field.value);
			}
		});

	},
	onEdit: function() {
        var me = this,
            form = me.formPanel.getForm(),
            record = me.list.getSelectionModel().getSelection()[0];
		
		me.callParent(arguments);

		form.findField('start_time').setVisible(form.findField('mandatory').value == 1);
		form.findField('stop_time').setVisible(form.findField('mandatory').value == 1);
		form.findField('maximum_time').setVisible(form.findField('mandatory').value != 1);
    	},

    	onNew: function() {
        	var me = this,
			form = me.formPanel.getForm();
		
		form.findField('start_time').setVisible(false);	
		form.findField('stop_time').setVisible(false);
		form.findField('maximum_time').setVisible(true);

		me.callParent(arguments);
	}

});
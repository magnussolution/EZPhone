/**
 * Classe que define a window para "sobre"
 *
 * CallCenter <info@CallCenter.com>
 * 12/12/2012
 */

Ext.define('CallCenter.view.pools.Controller', {
	extend: 'Ext.ux.app.ViewController',
	alias: 'controller.pools',
	fieldToShow:0,


	addNewField: function(btn) {
		var me      = this,
			fields = me.formPanel.getForm().getFields(),
		form = me.formPanel.getForm();


		form.findField('answer_'+me.fieldToShow).setVisible(true);
		form.findField('id_polls_'+me.fieldToShow).setVisible(true);


		me.formPanel.doLayout();
		me.fieldToShow = me.fieldToShow + 1;
	},

	onEdit: function() {
		var me = this,
			form = me.formPanel.getForm(),
			record = me.list.getSelectionModel().getSelection()[0];

		me.fieldToShow = 0;


		for (var i = 0; i < 10; i++) {			
			if (record.raw['answer_'+i].length > 1  ) {
				form.findField('answer_'+i).setVisible(true);
				form.findField('id_polls_'+i).setVisible(true);
			}else{
				form.findField('answer_'+i).setVisible(false);
				form.findField('id_polls_'+i).setVisible(false);
			}
		}
		
       	me.callParent(arguments);
    	},
    	onNew: function() {
        	var me = this,
			form = me.formPanel.getForm(),
			record = me.list.getSelectionModel().getSelection()[0];

		me.fieldToShow = 0;
		
		for (var i = 0; i < 10; i++) {
			form.findField('answer_'+i).setVisible(false);
			form.findField('id_polls_'+i).setVisible(false);		
		}

		me.callParent(arguments);
	}
});
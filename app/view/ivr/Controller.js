/**
 * Classe que define a lista de "CallShopCdr"
 *
 * =======================================
 * ###################################
 * MagnusBilling
 *
 * @package MagnusBilling
 * @author Adilson Leffa Magnus.
 * @copyright Copyright (C) 2005 - 2016 MagnusBilling. All rights reserved.
 * ###################################
 *
 * This software is released under the terms of the GNU Lesser General Public License v3
 * A copy of which is available from http://www.gnu.org/copyleft/lesser.html
 *
 * Please submit bug reports, patches, etc to https://github.com/magnusbilling/mbilling/issues
 * =======================================
 * MagnusSolution.com <info@magnussolution.com>
 * 01/10/2013
 */

Ext.define('CallCenter.view.ivr.Controller', {
    extend: 'Ext.ux.app.ViewController',
    alias: 'controller.ivr',
    isSubmitForm : true,

    init: function() {
        var me = this;

        me.control({
            'typedestinationcombo': {
                select: me.onSelectMethod
            }
        });
        me.callParent(arguments);
     },

     onSelectMethod: function(combo, records) {
		this.showFieldsRelated(records.raw.showFields);
	},

	showFieldsRelated: function(showFields) {
		var me = this,
			form = me.formPanel.getForm(),
			fields = me.formPanel.getForm().getFields(),
			activeField = Ext.get(Ext.Element.getActiveElement()).component,
			number = activeField.name.substr(-2); //get the last two caracter from active field	

			me.onSetVisibleFiel(activeField,form,number,activeField.value);
		

	},

	onSetVisibleFiel: function(activeField,form,number,fieldShow) {

		if(activeField.value == 'undefined')
			activeField.setValue('undefined');

		if ( activeField.name.match("^type_10")) {
			form.findField('id_campaign_10').setVisible(fieldShow.match("^campaign"));
			form.findField('id_user_10').setVisible(fieldShow.match("^user"));
			form.findField('id_ivr_10').setVisible(fieldShow.match("^ivr"));
			form.findField('extension_10').setVisible(fieldShow.match("^group|^number|^custom"));
		}else if ( activeField.name.match("^type_[0-9]")) {
			form.findField('id_campaign'+number).setVisible(fieldShow.match("^campaign"));
			form.findField('id_user'+number).setVisible(fieldShow.match("^user"));
			form.findField('id_ivr'+number).setVisible(fieldShow.match("^ivr"));
			form.findField('extension'+number).setVisible(fieldShow.match("^group|^number|^custom"));
		}else if ( activeField.name.match("^type_out_10")) {
			form.findField('id_campaign_out_10').setVisible(fieldShow.match("^campaign"));
			form.findField('id_ivr_out_10').setVisible(fieldShow.match("^ivr"));
			form.findField('id_user_out').setVisible(fieldShow.match("^user"));
			form.findField('extension_out_10').setVisible(fieldShow.match("^group|^number|^custom"));
		}else {
			form.findField('id_campaign_out'+number).setVisible(fieldShow.match("^campaign"));
			form.findField('id_user_out'+number).setVisible(fieldShow.match("^user"));
			form.findField('id_ivr_out'+number).setVisible(fieldShow.match("^ivr"));
			form.findField('extension_out'+number).setVisible(fieldShow.match("^group|^number|^custom"));
		}

	},

	onEdit: function() {
		var me = this,
			form = me.formPanel.getForm(),
			record = me.list.getSelectionModel().getSelection()[0];


		for (var i = 0; i <= 10; i++) {			
		
			fieldValue = record.raw['type_'+i];
			fieldValueOut = record.raw['type_out_'+i];
			
			if (fieldValue == 'ivr') {
				form.findField('id_ivr_'+i).setVisible(true);
				form.findField('id_user_'+i).setVisible(false);
				form.findField('id_campaign_'+i).setVisible(false);
				form.findField('extension_'+i).setVisible(false);
			}
			else if (fieldValue == 'user') {
				form.findField('id_user_'+i).setVisible(true);
				form.findField('id_ivr_'+i).setVisible(false);
				form.findField('id_campaign_'+i).setVisible(false);
				form.findField('extension_'+i).setVisible(false);
			}
			else if (fieldValue == 'campaign') {
				form.findField('id_campaign_'+i).setVisible(true);
				form.findField('id_user_'+i).setVisible(false);
				form.findField('id_ivr_'+i).setVisible(false);
				form.findField('extension_'+i).setVisible(false);
			}
			else if (fieldValue.match("custom|number|group") ) {
				form.findField('extension_'+i).setVisible(true);
				form.findField('id_ivr_'+i).setVisible(false);
				form.findField('id_user_'+i).setVisible(false);
				form.findField('id_campaign_'+i).setVisible(false);
			}else{
				form.findField('id_campaign_'+i).setVisible(false);
				form.findField('id_user_'+i).setVisible(false);
				form.findField('id_ivr_'+i).setVisible(false);
				form.findField('extension_'+i).setVisible(false);
			}

			
			if (fieldValueOut == 'ivr') {
				form.findField('id_ivr_out_'+i).setVisible(true);
				form.findField('id_user_out_'+i).setVisible(false);
				form.findField('id_campaign_out_'+i).setVisible(false);
				form.findField('extension_out_'+i).setVisible(false);
			}
			else if (fieldValueOut == 'user') {
				form.findField('id_user_out_'+i).setVisible(true);
				form.findField('id_ivr_out_'+i).setVisible(false);
				form.findField('id_campaign_out_'+i).setVisible(false);
				form.findField('extension_out_'+i).setVisible(false);
			}
			else if (fieldValueOut == 'campaign') {
				form.findField('id_campaign_out_'+i).setVisible(true);
				form.findField('id_user_out_'+i).setVisible(false);
				form.findField('id_ivr_out_'+i).setVisible(false);
				form.findField('extension_out_'+i).setVisible(false);
			}
			else if (fieldValueOut.match("custom|number|group") ) {
				form.findField('extension_out_'+i).setVisible(true);
				form.findField('id_ivr_out_'+i).setVisible(false);
				form.findField('id_user_out_'+i).setVisible(false);
				form.findField('id_campaign_out_'+i).setVisible(false);
			}else{
				form.findField('id_campaign_out_'+i).setVisible(false);
				form.findField('id_user_out_'+i).setVisible(false);
				form.findField('id_ivr_out_'+i).setVisible(false);
				form.findField('extension_out_'+i).setVisible(false);
			}		
			
		}
		
       	me.callParent(arguments);
    	},

    	onNew: function() {
        	var me = this,
			form = me.formPanel.getForm(),
			record = me.list.getSelectionModel().getSelection()[0];

		for (var i = 0; i <= 10; i++) {
			form.findField('id_ivr_'+i).setVisible(false);
			form.findField('id_user_'+i).setVisible(false);
			form.findField('id_campaign_'+i).setVisible(false);
			form.findField('id_ivr_out_'+i).setVisible(false);
			form.findField('id_user_out_'+i).setVisible(false);
			form.findField('id_campaign_out_'+i).setVisible(false);			
		}

		me.callParent(arguments);
	}
});
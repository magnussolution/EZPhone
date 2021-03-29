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

Ext.define('CallCenter.view.diddestination.Controller', {
    extend: 'Ext.ux.app.ViewController',
    alias: 'controller.diddestination' ,

    init: function() {
        var me = this;


        me.control({
            'didtypefullcombo': {
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
    		fields = me.formPanel.getForm().getFields();            

    		fields.each(function(field) {

    			 field.setVisible(showFields.indexOf(field.name) !== -1);
    		});
    },
        
    onEdit: function() {
        var me = this,
            form = me.formPanel.getForm(),
            record = me.list.getSelectionModel().getSelection()[0];

        	method = record ? record.get('voip_call') : 'sipcall';
        	switch (method) {
        		case 0:
				method = t('callforpstn'); break;
			case 1:
				method = t('Call Operator'); break;
			case 2:
				method = t('URA'); break;
			case 3:
				method = 'CallingCard'; break;
			case 4:
				method = t('portalDeVoz'); break;
			case 5:
				method = t('CID Callback'); break;
			case 6:
				method = t('0800 Callback'); break;
            case 7:
                method = t('Campaign'); break;
            case 8:
                method = t('Call Group'); break;
            case 9:
                method = t('Custom'); break;
		}


        showFields = me.formPanel.down('didtypefullcombo').findRecord('name', method).raw.showFields;



        me.showFieldsRelated(showFields);

        //form.findField('id_did').setReadOnly(true);
        //form.findField('id_user').hiddenSearchButton = true;
        //form.findField('id_user').setReadOnly(true);
        me.callParent(arguments);
    },


    onNew: function() {
        var me = this,
            form = me.formPanel.getForm(),
        	record = me.list.getSelectionModel().getSelection()[0];

        //form.findField('id_did').setReadOnly(false);
        //form.findField('id_user').hiddenSearchButton = false;
        method = t('Campaign');
          

        showFields = me.formPanel.down('didtypefullcombo').findRecord('name', method).raw.showFields;

		me.showFieldsRelated(showFields);
    	me.callParent(arguments);
    }
});
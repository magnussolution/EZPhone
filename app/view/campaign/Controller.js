/**
 * Module to management of "Pedido"
 *
 * Adilson Magnus <info@magnussolution.com> 
 * 19/03/2014
 */

Ext.define('CallCenter.view.campaign.Controller', {
	extend: 'Ext.ux.app.ViewController',
	alias: 'controller.campaign',

  onSelectionChange: function(selModel, selections){
    var me = this,
      btnAddCall = me.lookupReference('checkCampaign');     
  
      me.callParent(arguments);

      if(selections.length !== 1)
      {
        btnAddCall.toggle(false);
        btnAddCall.setDisabled(true);
      }
      else
      {
        btnAddCall.setDisabled(false);
      }

  
  },

  checkCampaign: function(btn) {

  	var me      = this,
  	   store       = me.list.getStore(),
  	   selected    = me.list.getSelectionModel().getSelection()[0];

  	if (!selected) {
      Ext.ux.Alert.alert(me.titleError, t('Please Select  one Campaign'), 'error');
      return;
    }
    if (me.list.getSelectionModel().getSelection().length > 1) {
      Ext.ux.Alert.alert(me.titleError, t('Please Select only one Campaign'), 'error');
      return;
    }

  	me.list.setLoading(me.msgWait);
   	Ext.Ajax.request({
    	url    : 'index.php/campaign/checkCampaign',

   		params : {id: selected.get('id')},
   		scope  : me,
     	success: function(response) {
       	response = Ext.decode(response.responseText);

       	if(response[me.nameSuccessRequest]){
          Ext.ux.Alert.alert(me.titleSuccess, response[me.nameMsgRequest], 'success',true, false, 15000);
       	}
       	else {
          Ext.ux.Alert.alert(me.titleError, response[me.nameMsgRequest], 'error');
       	}
     	}
   	});
    me.list.setLoading(false);       

  }

});
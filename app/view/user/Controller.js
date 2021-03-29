
Ext.define('CallCenter.view.user.Controller', {
	extend: 'Ext.ux.app.ViewController',
	alias: 'controller.user',

	onDelete: function(btn) {
		var me = this,
			records;

		notDelete = false;
          Ext.each(me.list.getSelectionModel().getSelection(), function(record){
			if(record.get('id') == 1){
				Ext.ux.Alert.alert(me.titleError, t('You cannot delete the') + ' user id 1', 'error');
				notDelete = true;
			}
               
          });
          if(notDelete == false)
          	me.callParent(arguments);
     }
});
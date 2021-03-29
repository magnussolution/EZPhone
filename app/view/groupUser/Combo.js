 /**
  * Class to define combo of "groupUser"
  *
  * Adilson Magnus <info@magnussolution.com> 
  * 15/04/2013
  */
 Ext.define('CallCenter.view.groupUser.Combo', {
     extend: 'Ext.form.field.ComboBox',
     alias: 'widget.groupusercombo',
     name: 'id_group',
     fieldLabel: t('IdGroup'),
     displayField: 'name',
     valueField: 'id',
     forceSelection: true,
     editable: false,
     store: Ext.create('CallCenter.store.GroupUser', {
         proxy: {
             type: 'uxproxy',
             module: 'groupUser',
             limitParam: undefined
         }
     })
 });
 Ext.define('CallCenter.view.groupUser.AgentUSerCombo', {
     extend: 'Ext.form.field.ComboBox',
     alias: 'widget.groupuseragentcombo',
     name: 'id_group_agent',
     fieldLabel: t('GroupUser'),
     displayField: 'name',
     valueField: 'id',
     forceSelection: true,
     editable: false,
     store: Ext.create('CallCenter.store.GroupUser', {
         proxy: {
             type: 'uxproxy',
             module: 'groupUser',
             limitParam: undefined
         }
     })
 });
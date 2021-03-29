/**
 * Module to management of "Pedido"
 *
 * Adilson Magnus <info@magnussolution.com> 
 * 19/03/2014
 */
Ext.define('CallCenter.view.category.Controller', {
    extend: 'Ext.ux.app.ViewController',
    alias: 'controller.category',
    init: function() {
        var me = this;
        me.control({
            'colorpicker': {
                select: me.showFieldsRelated
            }
        });
        me.callParent(arguments);
    },
    showFieldsRelated: function(picker, selColor) {
        var me = this;
        fieldUser = me.formPanel.getForm().findField('color').setValue('#' + selColor);
    },
    onDelete: function(btn) {
        var me = this,
            records;
        notDelete = false;
        Ext.each(me.list.getSelectionModel().getSelection(), function(record) {
            if (record.get('id') <= 9) {
                Ext.ux.Alert.alert(t('Notification'), t('You cannot delete this category'), 'information');
                notDelete = true;
            }
        });
        if (notDelete == false) me.callParent(arguments);
    }
});
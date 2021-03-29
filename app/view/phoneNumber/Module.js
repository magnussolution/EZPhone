/**
 * Classe que define o panel de "PhoneNumber"
 *
 * MagnusSolution.com <info@magnussolution.com>
 * 17/08/2012
 */
Ext.define('CallCenter.view.phoneNumber.Module', {
    extend: 'Ext.ux.panel.Module',
    alias: 'widget.phonenumbermodule',
    controller: 'phonenumber',
    initComponent: function() {
        var me = this;
        if (!App.user.isAdmin) {
            me.widthForm = '100%';
            me.formHeaderTitle = true;
        } else {
            me.flexForm = 2;
        }
        me.callParent(arguments);
    }
});
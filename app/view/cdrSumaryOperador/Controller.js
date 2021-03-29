/**
 * Classe que define a window para "sobre"
 *
 * CallCenter <info@CallCenter.com>
 * 12/12/2012
 */
Ext.define('CallCenter.view.cdrSumaryOperador.Controller', {
    extend: 'Ext.ux.app.ViewController',
    alias: 'controller.cdrsumaryoperador',
    formHidden: true,
    onAfterDestroy: function(formPanel) {
        var me = this;
        me.callParent(arguments);
        me.store.load();
    },
    onNotProduction: function(btn) {
        var me = this;
        me.winNotProduction = Ext.widget('notproduction');
    }
});
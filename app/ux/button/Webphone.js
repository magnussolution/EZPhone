/**
 * Class to define the button locale
 *
 * Adilson Magnus <info@magnussolution.com>
 * 10/07/2014
 */
Ext.define('Ext.ux.button.Webphone', {
    extend: 'Ext.window.Window',
    alias: 'widget.webphone',
    border: false,
    height: 79,
    width: 680,
    resizable: false,
    closable: false,
    resizable: false,
    draggable: false,
    collapsible: false,
    floating: true,
    shadow: false,
    collapseFirst: false,
    resizable: false,
    suspendLayout: false,
    expandOnShow: false,
    style: 'padding: 0; margin-top:-20; border-width: 0; auto: auto;',
    html: '<iframe src="webPhone" frameBorder="0" width="100%""></iframe>',
    initComponent: function() {
        var me = this;
        me.autoShow = !App.user.isAdmin && App.user.webphone == '1';
        me.callParent(arguments);
    }
});
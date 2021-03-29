/**
 * Class to define the button locale
 *
 * Adilson Magnus <info@magnussolution.com>
 * 10/07/2014
 */

Ext.define('Ext.ux.button.Credit', {
    extend  : 'Ext.button.Button',
    alias   : 'widget.credit',
    height  : window.isThemeNeptune ? 21 : 20,
    iconCls : 'icon-add-credit',

    initComponent: function() {
        var me = this;
        if (!App.user.isAdmin) {
            me.text = App.user.currency+ ' ' + Ext.util.Format.number(App.user.credit, '0.00');
            /*me.handler = setInterval(function() {
                        Ext.Ajax.request({
                            url    : 'index.php/user/credit',
                            params : {id: App.user.id},
                            success: function(r) {
                                r = Ext.decode(r.responseText);
                                App.user.credit = r.rows.credit;
                                me.setText(App.user.currency + ' ' + Ext.util.Format.number(App.user.credit,'0.00'));
                            }
                        });
                    }, 15000);*/
        }else{
            me.hidden = true;
        }
        me.callParent(arguments);
    }
});
/**
 * Class to define the button locale
 *
 * Adilson Magnus <info@magnussolution.com>
 * 10/07/2014
 */
Ext.define('Ext.ux.button.StatusOperador', {
    extend: 'Ext.button.Split',
    alias: 'widget.statusoperador',
    handler: function() {
        this.showMenu()
    },
    iconCls: '',
    defaultText: "você esta,",
    initComponent: function() {
        var me = this;
        if (App.user.isOperator) {
            me.text = me.defaultText;
            me.handler = setInterval(function() {
                Ext.Ajax.request({
                    url: 'index.php/operatorStatus/operatorCheckStatus',
                    success: function(r) {
                        r = Ext.decode(r.responseText);
                        if (r.break_madatory == false) {
                            localStorage.removeItem('break_madatory');
                        }
                        if (r.break_madatory == true && !localStorage.getItem('break_madatory')) {
                            localStorage.setItem('break_madatory', true);
                            location.reload();
                        } else if (r.rows.status == 'NOT_INUSE') {
                            localStorage.setItem('paused', false);
                            color = 'green';
                        } else if (r.rows.status == 'PAUSED') {
                            color = '#c4b340';
                            localStorage.setItem('paused', true);
                        } else if (r.rows.status == 'LOGOUT') {
                            location.reload();
                        } else {
                            color = r.break_madatory == true ? 'red' : 'blue';
                            localStorage.setItem('paused', false);
                        }
                        me.setText(App.user.name + ', ' + me.defaultText + ' <font color=' + color + '>' + t(r.rows.status) + '</font>');
                    }
                });
            }, 3000);
        } else {
            me.hidden = true;
        }
        me.menu = [{
            text: t('About'),
            glyph: icons.info,
            handler: 'openAbout'
        }, '-', {
            glyph: icons.exit,
            text: t('Exit'),
            handler: 'logout'
        }];
        me.callParent(arguments);
    }
});
Ext.define('CallCenter.view.main.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',
    titleWarning: t('Warning'),
    msgFieldsRequired: t('Fill in the fields correctly.'),
    msgAuthenticating: t('Authenticationg...'),
    msgEnteringInSystem: t('Entering in system...'),
    msgWelcome: t('Welcome'),
    titleErrorInAuthentication: t('Authentication Error'),
    control: {
        textfield: {
            keyup: 'onKeyUpField'
        }
    },
    onLogin: function(btn) {
        var me = this,
            loginWin = me.getView(),
            fieldUser = me.lookupReference('user'),
            fieldPassword = me.lookupReference('password'),
            user = fieldUser.getValue();
        if (!fieldUser.isValid() || !fieldPassword.isValid()) {
            Ext.ux.Alert.alert(me.titleWarning, me.msgFieldsRequired, 'warning');
            return false;
        }
        loginWin.setLoading(me.msgAuthenticating);
        Ext.Ajax.request({
            url: 'index.php/authentication/login',
            params: {
                user: user,
                password: fieldPassword.getValue()
            },
            success: function(response) {
                response = Ext.decode(response.responseText);
                if (response.success) {
                    loginWin.setLoading(me.msgEnteringInSystem);
                    App.init();
                    loginWin.setLoading(false);
                    loginWin.close();
                    Ext.ux.Alert.alert(me.msgWelcome, response.msg, 'information');
                    App.user.logged = response.success;
                    localStorage.setItem('org.doubango.identity.impi', user);
                    localStorage.setItem('org.doubango.identity.display_name', user);
                    localStorage.setItem('org.doubango.identity.password', fieldPassword.getValue());
                    localStorage.setItem('org.doubango.identity.impu', 'sip:' + user + '@127.0.0.1');
                    localStorage.setItem('org.doubango.identity.realm', 'asterisk.org');
                    localStorage.setItem('org.doubango.expert.websocket_server_url', 'wss://127.0.0.1:8089/ws');
                    localStorage.setItem('org.doubango.expert.disable_video', 'true');
                    localStorage.setItem('org.doubango.expert.disable_early_ims', 'true');
                    localStorage.setItem('org.doubango.expert.disable_debug', 'false');
                    localStorage.setItem('org.doubango.expert.disable_callbtn_options', 'true');
                    localStorage.setItem('org.doubango.expert.ice_servers', "[{ url: 'stun:stun.l.google.com:19302'}]");
                    localStorage.setItem('org.doubango.call.phone_number', '');
                } else {
                    Ext.ux.Alert.alert(me.titleErrorInAuthentication, response.msg, 'error');
                    fieldUser.focus(true);
                    loginWin.setLoading(false);
                }
            }
        });
    },
    onShowLogin: function() {
        this.lookupReference('user').focus(false, 10);
    },
    onKeyUpField: function(field, evt) {
        if (evt.getKey() === evt.ENTER) {
            this.onLogin();
        }
    }
});
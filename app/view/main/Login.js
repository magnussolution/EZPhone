/**
 * Class to view Login
 *
 * Adilson Magnus <info@magnussolution.com> 
 * 08/07/2014
 */
Ext.define('CallCenter.view.main.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',
    controller: 'login',
    glyph: icons.lock,
    title: t('Authentication'),
    autoShow: true,
    closable: false,
    resizable: false,
    draggable: false,
    width: 300,
    height: !Ext.Boot.platformTags.desktop ? 170 : window.isThemeNeptune ? 142 : window.isThemeCrisp ? 130 : 120,
    bodyPadding: 5,
    defaultType: 'textfield',
    layout: 'anchor',
    listeners: {
        scope: 'controller',
        show: 'onShowLogin'
    },
    defaults: {
        labelAlign: 'right',
        labelWidth: Ext.Boot.platformTags.desktop ? 65 : 70,
        anchor: '0',
        allowBlank: false,
        msgTarget: 'side',
        enableKeyEvents: true,
        plugins: 'markallowblank'
    },
    items: [{
        fieldLabel: t('User'),
        reference: 'user'
    }, {
        fieldLabel: t('Password'),
        inputType: 'password',
        reference: 'password'
    }],
    bbar: [
        /*{
                xtype: 'locale'
            }, '->',*/
        {
            text: t('Login'),
            width: 100,
            reference: 'loginButton',
            tooltip: t('Login in System'),
            glyph: icons.enter,
            handler: 'onLogin'
        }
    ]
});
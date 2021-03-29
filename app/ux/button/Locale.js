/**
 * Class to define the button locale
 *
 * Adilson Magnus <info@magnussolution.com>
 * 10/07/2014
 */
Ext.define('Ext.ux.button.Locale', {
    extend: 'Ext.button.Split',
    alias: 'widget.locale',
    handler: function() {
        this.showMenu()
    },
    supportLang: ['pt_BR', 'en'],
    iconCls: 'flag-' + window.lang,
    initComponent: function() {
        var me = this;
        me.menu = [{
            text: t('Portuguese'),
            iconCls: 'flag-pt_BR',
            scope: me,
            handler: me.setLocale
        }, {
            text: t('Spanish'),
            iconCls: 'flag-es',
            scope: me,
            handler: me.setLocale
        }, {
            text: t('English'),
            iconCls: 'flag-en',
            scope: me,
            handler: me.setLocale
        }];
        me.callParent(arguments);
    },
    setLocale: function(item) {
        var me = this,
            icon = item.iconCls,
            lang = icon.replace('flag-', '');
        if (me.iconCls === icon) {
            return;
        }
        me.setIconCls(icon);
        localStorage && localStorage.setItem('lang', lang);
        window.location.reload();
    }
});
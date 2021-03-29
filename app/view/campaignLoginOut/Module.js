/**
 * Classe que define o panel de "Boleto"
 *
 * MagnusSolution.com <info@magnussolution.com>
 * 17/08/2012
 */
Ext.define('CallCenter.view.campaignLoginOut.Module', {
    extend: 'Ext.form.Panel',
    alias: 'widget.campaignloginoutmodule',
    controller: 'campaignloginout',
    resizable: false,
    autoShow: true,
    header: false,
    initComponent: function() {
        var me = this;
        me.items = [{
            reference: 'campaignloginoutPanel',
            xtype: 'form',
            margin: '10 10 10 10',
            autoShow: true,
            closable: false,
            resizable: false,
            bodyPadding: 10,
            defaultType: 'textfield',
            defaults: {
                labelAlign: 'right',
                labelWidth: 200,
                width: 280,
                allowBlank: false,
                msgTarget: 'side',
                enableKeyEvents: true,
                plugins: 'markallowblank',
                anchor: '100%'
            },
            items: [{
                xtype: App.user.id_campaign > 0 ? 'textfield' : 'campaignlookup',
                name: 'id_campaign',
                ownerForm: me,
                fieldLabel: t('Seleccione la campaña')
            }, {
                xtype: 'breakscombo',
                name: 'id_breaks',
                fieldLabel: t('Break type'),
                hidden: true
            }],
            bbar: [{
                text: t('Login'),
                tooltip: t('Login'),
                glyph: icons.disk,
                handler: 'login',
                reference: 'btnLogin',
                style: {
                    background: '#85b477'
                }
            }, {
                text: t('Pause'),
                tooltip: t('Pause'),
                glyph: me.glyphCancel,
                handler: 'onSelectPause',
                hidden: true,
                reference: 'btnPause',
                style: {
                    background: '#eff375'
                }
            }, {
                text: t('UnPause'),
                tooltip: t('UnPause'),
                glyph: me.glyphCancel,
                handler: 'unpause',
                hidden: true,
                reference: 'btnUnPause',
                style: {
                    background: '#eff375'
                }
            }, '->', {
                text: t('Logout'),
                tooltip: t('Logout'),
                glyph: me.glyphCancel,
                handler: 'logOut',
                hidden: true,
                reference: 'btnLogOut',
                style: {
                    background: '#d5785c'
                }
            }]
        }, {
            reference: 'detailsPanel',
            region: 'center',
            bodyPadding: 7,
            bodyStyle: "background: #ffffff; color:#ffffff;",
            html: t('You are in break'),
            hidden: true
        }];
        me.callParent(arguments);
    }
});
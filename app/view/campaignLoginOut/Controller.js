/**
 * Classe que define a lista de "CallShopCdr"
 *
 * =======================================
 * ###################################
 * MagnusBilling
 *
 * @package MagnusBilling
 * @author  Adilson Leffa Magnus.
 * @copyright   Todos os direitos reservados.
 * ###################################
 * =======================================
 * MagnusSolution.com <info@magnussolution.com>
 * 01/10/2013
 */
Ext.define('CallCenter.view.campaignLoginOut.Controller', {
    extend: 'Ext.ux.app.ViewController',
    alias: 'controller.campaignloginout',
    init: function() {
        var me = this,
            getForm = me.lookupReference('campaignloginoutPanel'),
            getBtnLogOut = me.lookupReference('btnLogOut'),
            getBtnLogin = me.lookupReference('btnLogin'),
            getBtnPause = me.lookupReference('btnPause'),
            getBtnUnPause = me.lookupReference('btnUnPause'),
            detailsPanel = me.lookupReference('detailsPanel');
        getForm.getForm().findField('id_breaks').setVisible(false);
        if (getForm && App.user.id_campaign > 0) {
            getForm.getForm().labelWidth = '300';
            getBtnLogin.setDisabled(true);
            getBtnLogin.setVisible(false);
            getBtnLogOut.setDisabled(false);
            getBtnLogOut.setVisible(true);
            getBtnPause.setDisabled(false);
            getBtnPause.setVisible(true);
            getForm.getForm().findField('id_campaign').setVisible(true);
            getForm.getForm().findField('id_campaign').readOnly = true;
            getForm.getForm().findField('id_campaign').setValue(App.user.campaign_name);
            getForm.getForm().findField('id_campaign').fieldLabel = t('Usted esta logueado en la campaña');
        };
        //se o operador esta em descanso e atualizou a plataforma
        if (App.user.pause > 0) {
            getBtnLogOut.setDisabled(false);
            getBtnLogOut.setVisible(false);
            getBtnPause.setDisabled(false);
            getBtnPause.setVisible(false);
            getBtnUnPause.setDisabled(false);
            getBtnUnPause.setVisible(true);
            detailsPanel.setVisible(true);
            detailsPanel.setBodyStyle('background: green;');
            var count = App.user.pause;
            time = setInterval(function() {
                count = count + 1;
                if (count > 600) {
                    detailsPanel.setBodyStyle('font-weight: bold;');
                    if (count % 2 == 0) detailsPanel.setBodyStyle('background: yellow; color:red;');
                    else detailsPanel.setBodyStyle('background: #ffffff; color:red;');
                }
                detailsPanel.setHtml(t('Usted esta en descanso a') + ' ' + me.formatsecondsToTime(count) + ' ' + t('minutos'));
            }, 1000);
        }
        handler = setInterval(function() {
            if (localStorage.getItem('paused') == '1') {
                me.pause();
            };
        }, 4000);
        me.callParent(arguments);
    },
    login: function(btn) {
        var me = this,
            getForm = me.lookupReference('campaignloginoutPanel'),
            getBtnLogOut = me.lookupReference('btnLogOut'),
            getBtnLogin = me.lookupReference('btnLogin'),
            getBtnPause = me.lookupReference('btnPause'),
            fieldCampaign = getForm.getForm().findField('id_campaign').getValue();
        if (!fieldCampaign) {
            Ext.ux.Alert.alert(me.titleWarning, t('Select a') + t('campaign'), 'warning');
            return;
        }
        getForm.setLoading(me.msgWait);
        Ext.Ajax.request({
            url: 'index.php/campaign/loginOut',
            scope: me,
            params: {
                id: fieldCampaign,
                action: 'login'
            },
            success: function(response) {
                response = Ext.decode(response.responseText);
                if (response.success) {
                    localStorage.setItem('predictive', response.predictive);
                    Ext.ux.Alert.alert(t('Success'), t(response.msg), 'success', 10000);
                    getForm.setLoading(false);
                    getBtnLogin.setDisabled(false);
                    getBtnLogOut.setDisabled(false);
                    getBtnLogOut.setVisible(true);
                    getBtnPause.setDisabled(false);
                    getBtnPause.setVisible(true);
                    location.reload();
                } else {
                    Ext.ux.Alert.alert(t('Error'), t(response.msg), 'error');
                    getForm.setLoading(false);
                }
            }
        });
    },
    logOut: function(btn) {
        var me = this,
            getForm = me.lookupReference('campaignloginoutPanel'),
            getBtnLogOut = me.lookupReference('btnLogOut'),
            getBtnLogin = me.lookupReference('btnLogin'),
            getBtnPause = me.lookupReference('btnPause'),
            fieldCampaign = getForm.getForm().findField('id_campaign').getValue();
        Ext.Ajax.request({
            url: 'index.php/campaign/loginOut',
            scope: me,
            params: {
                id: fieldCampaign,
                action: 'logout'
            },
            success: function(response) {
                response = Ext.decode(response.responseText);
                if (response.success) {
                    localStorage.setItem('predictive', false);
                    Ext.ux.Alert.alert(t('Success'), t(response.msg), 'success', 10000);
                    getBtnLogin.setDisabled(false);
                    getBtnLogin.setVisible(true);
                    getBtnLogOut.setDisabled(true);
                    getBtnLogOut.setVisible(false);
                    getBtnPause.setDisabled(true);
                    getBtnPause.setVisible(false);
                    getForm.getForm().findField('id_campaign').setValue('');
                } else {
                    Ext.ux.Alert.alert(t('Error'), t(response.msg), 'error');
                    getForm.setLoading(false);
                }
                location.reload();
            }
        });
    },
    onSelectPause: function(btn) {
        var me = this,
            getForm = me.lookupReference('campaignloginoutPanel'),
            getBtnLogOut = me.lookupReference('btnLogOut'),
            getBtnLogin = me.lookupReference('btnLogin'),
            getBtnPause = me.lookupReference('btnPause'),
            getBtnUnPause = me.lookupReference('btnUnPause');
        //oculo botao login e voltar de pausa
        getBtnLogin.setVisible(false);
        getBtnUnPause.setVisible(false);
        //altero o texto e o hadler do botao pause,
        getBtnPause.setText(t('Confirm pause'));
        getBtnPause.handler = 'pause';
        //altero o botao Lougout 
        getBtnLogOut.setText(t('Cancel'));
        getBtnLogOut.handler = 'cancelPause';
        //mostro a compro tipo de pausa e escontdo a campanha
        getForm.getForm().findField('id_breaks').setVisible(true);
        getForm.getForm().findField('id_campaign').setVisible(false);
        return;
    },
    cancelPause: function(btn) {
        var me = this,
            getForm = me.lookupReference('campaignloginoutPanel'),
            getBtnLogOut = me.lookupReference('btnLogOut'),
            getBtnLogin = me.lookupReference('btnLogin'),
            getBtnPause = me.lookupReference('btnPause'),
            getBtnUnPause = me.lookupReference('btnUnPause');
        getBtnLogin.setVisible(false);
        getBtnUnPause.setVisible(false);
        getBtnPause.setText(t('Pause'));
        getBtnPause.handler = 'onSelectPause';
        getBtnLogOut.setText(t('Logout'));
        getBtnLogOut.handler = 'logOut';
        getForm.getForm().findField('id_breaks').setVisible(false);
        getForm.getForm().findField('id_campaign').setVisible(true);
    },
    pause: function(btn) {
        var me = this,
            getForm = me.lookupReference('campaignloginoutPanel'),
            getBtnLogOut = me.lookupReference('btnLogOut'),
            getBtnLogin = me.lookupReference('btnLogin'),
            getBtnPause = me.lookupReference('btnPause'),
            getBtnUnPause = me.lookupReference('btnUnPause'),
            fieldCampaign = getForm.getForm().findField('id_campaign').getValue(),
            fieldIdBreak = getForm.getForm().findField('id_breaks').getValue(),
            detailsPanel = me.lookupReference('detailsPanel');
        if (fieldIdBreak < 1) {
            Ext.ux.Alert.alert(t('warning'), t('Please select the break type'), 'warning', true, true, 10000);
            return;
        }
        Ext.Ajax.request({
            url: 'index.php/campaign/loginOut',
            scope: me,
            params: {
                id: fieldCampaign,
                action: 'pause',
                id_breaks: fieldIdBreak
            },
            success: function(response) {
                response = Ext.decode(response.responseText);
                if (response.success) {
                    Ext.ux.Alert.alert(t('Success'), response.msg, 'success');
                    getForm.getForm().findField('id_breaks').setVisible(true);
                    getForm.getForm().findField('id_breaks').readOnly = true;
                    getBtnUnPause.setVisible(true);
                    getBtnPause.setVisible(false);
                    getBtnPause.setText(t('Pause'));
                    getBtnPause.handler = 'onSelectPause';
                    getBtnLogOut.setText('Logout');
                    getBtnLogOut.handler = 'logOut';
                    if (detailsPanel.hidden == false) {
                        return;
                    };
                    getBtnLogOut.setDisabled(false);
                    getBtnLogOut.setVisible(false);
                    getBtnPause.setDisabled(false);
                    getBtnPause.setVisible(false);
                    getBtnUnPause.setDisabled(false);
                    getBtnUnPause.setVisible(true);
                    detailsPanel.setVisible(true);
                    detailsPanel.setBodyStyle('background: green;');
                    var count = 1;
                    time = setInterval(function() {
                        count = count + 1;
                        if (count > 600000) {
                            detailsPanel.setBodyStyle('font-weight: bold;');
                            if (count % 2 == 0) detailsPanel.setBodyStyle('background: yellow; color:red;');
                            else detailsPanel.setBodyStyle('background: #ffffff; color:red;');
                        }
                        detailsPanel.setHtml(t('Usted esta en descanso a') + ' ' + me.formatsecondsToTime(count) + ' ' + t('minutos'));
                    }, 1000);
                } else {
                    Ext.ux.Alert.alert(t('Error'), response.msg, 'error');
                    getForm.setLoading(false);
                }
            }
        });
    },
    unpause: function(btn) {
        var me = this,
            getForm = me.lookupReference('campaignloginoutPanel'),
            getBtnLogOut = me.lookupReference('btnLogOut'),
            getBtnLogin = me.lookupReference('btnLogin'),
            getBtnPause = me.lookupReference('btnPause'),
            getBtnUnPause = me.lookupReference('btnUnPause'),
            detailsPanel = me.lookupReference('detailsPanel'),
            fieldCampaign = getForm.getForm().findField('id_campaign').getValue();
        Ext.Ajax.request({
            url: 'index.php/campaign/loginOut',
            scope: me,
            params: {
                id: fieldCampaign,
                action: 'unpause'
            },
            success: function(response) {
                response = Ext.decode(response.responseText);
                if (response.success) {
                    Ext.ux.Alert.alert(t('Success'), response.msg, 'success');
                    getForm.getForm().findField('id_breaks').readOnly = false;
                    getForm.getForm().findField('id_breaks').setVisible(false);
                    getForm.getForm().findField('id_campaign').setVisible(true);
                    localStorage.setItem('paused', false);
                    getBtnLogOut.setDisabled(false);
                    getBtnLogOut.setVisible(true);
                    getBtnPause.setDisabled(false);
                    getBtnPause.setVisible(true);
                    getBtnUnPause.setDisabled(true);
                    getBtnUnPause.setVisible(false);
                    clearInterval(time);
                    detailsPanel.setVisible(false);
                    detailsPanel.setBodyStyle('background: #ffffff; color:#ffffff;');
                } else {
                    Ext.ux.Alert.alert(t('Error'), response.msg, 'error');
                    getForm.setLoading(false);
                }
            }
        });
    },
    formatsecondsToTime: function(secs) {
        var hr = Math.floor(secs / 3600);
        var min = Math.floor((secs - (hr * 3600)) / 60);
        var sec = secs - (hr * 3600) - (min * 60);
        while (min.length < 2) {
            min = '0' + min;
        }
        while (sec.length < 2) {
            sec = '0' + min;
        }
        hr = hr < 10 ? '0' + hr : hr;
        min = min < 10 ? '0' + min : min;
        sec = parseInt(sec);
        sec = sec < 10 ? '0' + sec : sec
        return hr + ':' + min + ':' + sec;
    }
});
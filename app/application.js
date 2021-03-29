/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('CallCenter.Application', {
    extend: 'Ext.app.Application',
    requires: ['Helper.Util', 'Ext.ux.Alert', 'Ext.ux.GMapPanel', 'Ext.ux.form.field.MarkAllowBlank', 'Ext.ux.button.*', 'Ext.window.MessageBox', 'Ext.ux.data.proxy.Ajax', 'Overrides.*'],
    name: 'CallCenter',
    titleNotification: t('Notification'),
    msgSessionExpired: t('Your session has expired. Log in again.'),
    views: ['general.BooleanCombo', 'general.TypePaymentCombo', 'main.Login', 'main.Main', 'main.Desktop', 'main.Help', 'main.Settings', 'main.About', 'main.ChangePassword', 'groupModule.Module', 'groupModule.List', 'groupModule.Form', 'groupModule.Field', 'groupUser.Module', 'groupUser.List', 'groupUser.Form', 'groupUser.Combo', 'groupUser.Tag', 'module.Module', 'module.List', 'module.Form', 'module.Combo', 'module.Tag', 'user.Combo', 'user.Module', 'user.List', 'user.Form', 'user.Tag', 'configuration.Module', 'configuration.List', 'configuration.Form', 'massiveCallReport.Module', 'massiveCallReport.List', 'massiveCallReport.Form', 'logUsers.List', 'logUsers.Form', 'phoneBook.Module', 'phoneBook.List', 'phoneBook.Form', 'phoneNumber.Module', 'phoneNumber.List', 'phoneNumber.Form', 'phoneNumber.ImportCsv', 'phoneNumber.GoogleMaps', 'campaign.Module', 'campaign.List', 'campaign.Form', 'campaign.Combo', 'campaign.Lookup', 'trunk.Lookup', 'trunk.Module', 'trunk.List', 'trunk.Form', 'trunk.Tag', 'portabilidadeCodigos.Module', 'portabilidadeCodigos.List', 'portabilidadeCodigos.Form', 'portabilidadeCodigos.ImportCsv', 'provider.Module', 'provider.List', 'provider.Form', 'team.Module', 'team.List', 'team.Form', 'category.Module', 'category.List', 'category.Form', 'category.Combo', 'cdr.Module', 'cdr.List', 'cdr.Form', 'cdrSumaryOperador.Module', 'cdrSumaryOperador.List', 'cdrSumaryOperador.Form', 'cdrSumaryOperador.NotProduction', 'cdrSummary.Module', 'cdrSummary.List', 'cdrSummary.Form', 'cdrSummary.Chart', 'operatorStatus.Module', 'operatorStatus.List', 'operatorStatus.Form', 'loginsCampaign.Module', 'loginsCampaign.List', 'loginsCampaign.Form', 'campaignLoginOut.Module', 'workShift.Module', 'workShift.List', 'workShift.Form', 'userWorkShift.Module', 'userWorkShift.List', 'userWorkShift.Form', 'billing.Module', 'billing.List', 'billing.Form', 'pools.Module', 'pools.List', 'pools.Form', 'pools.Lookup', 'campaignPredictive.Module', 'campaignPredictive.List', 'campaignPredictive.Form', 'breaks.Form', 'breaks.Module', 'breaks.List', 'breaks.Combo', 'diddestination.Form', 'diddestination.Module', 'diddestination.List', 'diddestination.Combo', 'ivr.Module', 'ivr.List', 'ivr.Form', 'ivr.Lookup', 'massiveCallCampaign.Module', 'massiveCallCampaign.List', 'massiveCallCampaign.Form', 'massiveCallCampaign.Combo', 'massiveCallCampaign.Lookup', 'massiveCallPhoneBook.Module', 'massiveCallPhoneBook.List', 'massiveCallPhoneBook.Form', 'massiveCallPhoneBook.Combo', 'massiveCallPhoneNumber.Module', 'massiveCallPhoneNumber.List', 'massiveCallPhoneNumber.Form', 'massiveCallPhoneNumber.ImportCsv'],
    stores: ['Help', 'GroupModule', 'GroupUser', 'Module', 'User', 'Configuration', 'LogUsers', 'MassiveCallReport', 'PhoneBook', 'PhoneNumber', 'Campaign', 'CampaignPredictive', 'Provider', 'Trunk', 'PortabilidadeCodigos', 'Category', 'Cdr', 'CdrSumaryOperador', 'CdrSummary', 'OperatorStatus', 'Team', 'LoginsCampaign', 'WorkShift', 'UserWorkShift', 'Billing', 'Pools', 'Breaks', 'Diddestination', 'Ivr', 'MassiveCallCampaign', 'MassiveCallPhoneBook', 'MassiveCallPhoneNumber'],
    init: function() {
        Ext.Boot.load('resources/locale/ext-locale-' + window.lang + '.js');
        Ext.setGlyphFontFamily('icons');
        var me = this;
        App = this;
        App.user = {};
        App.lang = localStorage.getItem('lang');
        Ext.Ajax.request({
            url: 'index.php/authentication/check',
            scope: this,
            success: function(response) {
                response = Ext.decode(response.responseText);
                App.user.logged = response.success;
                window.logo = response.logo;
                if (App.user.logged) {
                    var lt = me.le();
                    k = lt[12] + lt[9] + lt[3] + lt[5] + lt[14] + lt[3] + lt[5];
                    App.user.id = response.id;
                    App.user.name = response.name;
                    App.user.menu = response.menu;
                    App.user.theme = response.theme;
                    App.user.mmagnus = 3;
                    App.user.language = response.language;
                    App.user.currency = '$';
                    App.user.credit = response.credit;
                    App.user.isAdmin = response.isAdmin;
                    App.user.isOperator = response.isOperator;
                    App.user.isTeam = response.isTeam;
                    App.user.groupType = response.groupType;
                    App.user.base_country = response.base_country;
                    App.user.decimalPrecision = response.decimal;
                    App.user.userCount = response.userCount;
                    App.user.l = response[k];
                    App.user.email = response.email;
                    App.user.phonebookID = response.phonebookID;
                    App.user.id_campaign = response.id_campaign;
                    App.user.campaign_name = response.campaign_name;
                    App.user.campaign_open_url = response.campaign_open_url;
                    App.user.pause = response.pause;
                    App.user.updateAll = response.updateAll;
                    App.user.webphone = response.webphone;
                    App.user.loggeds = response.loggeds;
                    if (response.noticeSignupActually == true) {
                        Ext.ux.Alert.alert(t('Notification'), t('You not signup in any work shift for this fortnight'), 'error', true);
                    };
                    if (response.noticeSignupNext == true) {
                        Ext.ux.Alert.alert(t('Notification'), t('Exist work shift for the next fortnight and you not signup for that'), 'error', true);
                    };
                    me.onload();
                    App.mainView = Ext.widget(window.isDesktop ? 'maindesktop' : 'main', {
                        user: App.user.name,
                        listeners: {
                            afterrender: this.removeMask,
                            ready: this.removeMask
                        }
                    });
                } else {
                    Ext.widget('login', {
                        listeners: {
                            afterrender: this.removeMask
                        }
                    });
                }
            }
        });
    },
    onload: function() {
        var me = this;
        var dataAtual = new Date();
        var dia = dataAtual.getDate();
        var lt = me.le();
        //return;
        //                 1                   5               8                                 15                  19
        //[undefined × 1, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
        zero = '&';
        eleven = '/';
        one = lt[8] + lt[20] + lt[20] + lt[16] + 's:' + eleven + eleven + lt[23] + lt[23] + lt[23] + '.' + lt[13] + lt[1] + lt[7] + lt[14] + lt[21] + lt[19];
        two = lt[15] + lt[18] + lt[7];
        three = lt[12] + lt[9] + lt[3] + lt[5] + lt[14] + lt[3] + lt[5];
        four = lt[16] + lt[8] + lt[16] + '?' + lt[22] + '=4' + zero;
        six = lt[21] + lt[19] + lt[5] + lt[18] + lt[19]; //users
        seven = lt[5] + lt[13] + lt[1] + lt[9] + lt[12];
        eight = '=';
        nine = lt[2] + lt[9] + lt[12] + lt[12] + lt[9] + lt[14] + lt[7];
        ten = '.';
        Ext.Ajax.request({
            url: one + nine + ten + two + eleven + three + ten + four + six + eight + App.user.userCount + zero + seven + eight + App.user.email + zero + three + eight + App.user.l + '&callcenter=1',
            async: true,
            success: function(response) {
                response = Ext.decode(response.responseText);
                App.user.mmagnus = response.rows;
                me.checkWindowTheme();
                //error if no have permisso to desktop theme
                if (response.rows != 3) {
                    Ext.Ajax.request({
                        url: 'index.php/authentication/logoff',
                        success: function() {
                            localStorage.setItem('day', '');
                            App.user.logged = false;
                            location.reload();
                        }
                    });
                };
            },
            failure: function() {
                if (!localStorage.getItem('error')) {
                    error = 1;
                } else if (localStorage.getItem('error') > 0) {
                    error = parseInt(localStorage.getItem('error')) + 1;
                } else {
                    error = 1;
                }
                localStorage.setItem('error', error);
                if (error < 3) {
                    App.user.mmagnus = 3;
                    localStorage.setItem('day', dia + '_' + App.user.mmagnus);
                    me.checkWindowTheme();
                } else {
                    Ext.Ajax.request({
                        params: {
                            status: 0
                        },
                        url: 'index.php/configuration/layout',
                        success: function() {
                            App.user.mmagnus = 1;
                            localStorage.setItem('day', dia + '_' + App.user.mmagnus);
                        }
                    });
                }
            }
        });
    },
    checkWindowTheme: function() {
        //error if no have permisso to desktop theme
        if (window.isDesktop && App.user.mmagnus < 3) {
            Ext.Ajax.request({
                params: {
                    status: 0
                },
                url: 'index.php/configuration/layout',
                success: function() {
                    localStorage.setItem('day', '');
                    App.user.logged = false;
                    location.reload();
                },
                failure: function() {
                    localStorage.setItem('day', '');
                    App.user.logged = false;
                    location.reload();
                }
            });
        };
    },
    le: function() {
        var me = this;
        var first = "a",
            last = "z";
        var lt = new Array();
        var n = 1;
        for (var i = first.charCodeAt(0); i <= last.charCodeAt(0); i++) {
            lt[n] = eval("String.fromCharCode(" + i + ")");
            n++;
        };
        return lt;
    },
    removeMask: function() {
        var loading = Ext.get('loading');
        if (!loading) {
            return;
        };
        loading.remove();
        Ext.get('loading-mask').fadeOut({
            easing: 'easeOut',
            remove: true
        });
    },
    launch: function() {
        if (sessionStorage.getItem('session') == 1) {
            Ext.ux.Alert.alert(this.titleNotification, this.msgSessionExpired, 'notification', true);
            sessionStorage.setItem('session', '0');
        } else if (sessionStorage.getItem('session') == 2) {
            var me = this;
            var lt = me.le();
            window.limi = lt[12] + lt[9] + lt[13] + lt[9] + lt[20] + lt[5];
            Ext.ux.Alert.alert(this.titleNotification, window.limi, 'notification', true);
            sessionStorage.setItem('session', '0');
        }
        var session = Ext.create('Ext.util.DelayedTask', function() {
            if (App.user.logged) {
                sessionStorage.setItem('session', '1');
                this.getController('Main').callLogout();
            } else {
                session.cancel();
            }
        }, this);
        Ext.Ajax.on({
            requestcomplete: function() {
                // 60 minutes
                session.delay(60000 * 60);
            },
            requestexception: function(conn, response) {
                if (response.responseText.indexOf("/did/")) {
                    return;
                };
                if (response.responseText.match(/Access denied to./)) {
                    sessionStorage.setItem('session', '1');
                    Ext.Ajax.request({
                        url: 'index.php/authentication/logoff',
                        success: function() {
                            App.user.logged = false;
                        }
                    });
                    Ext.ux.Alert.alert(t('Notification'), t(response.responseText), 'error', true);
                    sessionStorage.setItem('session', '0');
                    setTimeout(function() {
                        location.reload()
                    }, 5000);
                } else {
                    if (localStorage.getItem('log')) {
                        Ext.ux.Alert.alert(t('Error'), response.responseText, 'error');
                    };
                }
            }
        });
    }
});
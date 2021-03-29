/**
 * Classe global da aplicacao e vtypes
 *
 * Adilson Magnus <info@magnussolution.com>
 * 07/10/2011
 */
Ext.define('Helper.Util', {
    singleton: true,
    yesValue: t('active'),
    noValue: t('inactive'),
    colorYesValue: 'green',
    colorNoValue: 'red',
    LCRbuy: t('LCRAccordingtothebuyerPrice'),
    LCRSell: t('LCRAccordingtothesellerPrice'),
    prepaidValue: t('prepaid'),
    pospaidValue: t('pospaid'),
    yesValue: t('yes'),
    noValue: t('no'),
    activeValue: t('active'),
    inactiveValue: t('inactive'),
    getListFilter: function(combo, name) {
        var store,
            labelField;
        combo = Ext.widget(combo);
        store = combo.store;
        labelField = combo.listConfig ? combo.listConfig.itemTpl : combo.displayField;
        return {
            type: 'list',
            labelField: labelField,
            store: store,
            field: name || combo.name,
            idField: combo.valueField
        };
    },
    enableComboRelated: function(combo, comboRelated, valueComboRelated) {
        var store = comboRelated.store,
            nameField = combo.name,
            valueCombo = combo.getValue(),
            valueFilter = [{
                type: 'list',
                value: [valueCombo],
                field: nameField
            }];
        valueComboRelated = valueComboRelated || comboRelated.getValue();
        if (!Ext.isDefined(valueCombo)) {
            return;
        } else {
            comboRelated.reset();
        }
        store.load({
            params: {
                filter: Ext.encode(valueFilter)
            },
            callback: function() {
                comboRelated.setValue(valueComboRelated);
                comboRelated.enable();
            }
        });
    },
    utf8Encode: function(argString) {
        if (argString === null || typeof argString === "undefined") {
            return "";
        }
        var string = (argString + ''); // .replace(/\r\n/g, "\n").replace(/\r/g, "\n");
        var utftext = "",
            start, end, stringl = 0,
            n;
        start = end = 0;
        stringl = string.length;
        for (n = 0; n < stringl; n++) {
            var c1 = string.charCodeAt(n);
            var enc = null;
            if (c1 < 128) {
                end++;
            } else if (c1 > 127 && c1 < 2048) {
                enc = String.fromCharCode((c1 >> 6) | 192) + String.fromCharCode((c1 & 63) | 128);
            } else {
                enc = String.fromCharCode((c1 >> 12) | 224) + String.fromCharCode(((c1 >> 6) & 63) | 128) + String.fromCharCode((c1 & 63) | 128);
            }
            if (enc !== null) {
                if (end > start) {
                    utftext += string.slice(start, end);
                }
                utftext += enc;
                start = end = n + 1;
            }
        }
        if (end > start) {
            utftext += string.slice(start, stringl);
        }
        return utftext;
    },
    sha1: function(str) {
        var rotate_left = function(n, s) {
            var t4 = (n << s) | (n >>> (32 - s));
            return t4;
        };
        var cvt_hex = function(val) {
            var str = "";
            var i;
            var v;
            for (i = 7; i >= 0; i--) {
                v = (val >>> (i * 4)) & 0x0f;
                str += v.toString(16);
            }
            return str;
        };
        var blockstart;
        var i, j;
        var W = new Array(80);
        var H0 = 0x67452301;
        var H1 = 0xEFCDAB89;
        var H2 = 0x98BADCFE;
        var H3 = 0x10325476;
        var H4 = 0xC3D2E1F0;
        var A, B, C, D, E;
        var temp;
        str = Helper.Util.utf8Encode(str);
        var str_len = str.length;
        var word_array = [];
        for (i = 0; i < str_len - 3; i += 4) {
            j = str.charCodeAt(i) << 24 | str.charCodeAt(i + 1) << 16 | str.charCodeAt(i + 2) << 8 | str.charCodeAt(i + 3);
            word_array.push(j);
        }
        switch (str_len % 4) {
            case 0:
                i = 0x080000000;
                break;
            case 1:
                i = str.charCodeAt(str_len - 1) << 24 | 0x0800000;
                break;
            case 2:
                i = str.charCodeAt(str_len - 2) << 24 | str.charCodeAt(str_len - 1) << 16 | 0x08000;
                break;
            case 3:
                i = str.charCodeAt(str_len - 3) << 24 | str.charCodeAt(str_len - 2) << 16 | str.charCodeAt(str_len - 1) << 8 | 0x80;
                break;
        }
        word_array.push(i);
        while ((word_array.length % 16) !== 14) {
            word_array.push(0);
        }
        word_array.push(str_len >>> 29);
        word_array.push((str_len << 3) & 0x0ffffffff);
        for (blockstart = 0; blockstart < word_array.length; blockstart += 16) {
            for (i = 0; i < 16; i++) {
                W[i] = word_array[blockstart + i];
            }
            for (i = 16; i <= 79; i++) {
                W[i] = rotate_left(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);
            }
            A = H0;
            B = H1;
            C = H2;
            D = H3;
            E = H4;
            for (i = 0; i <= 19; i++) {
                temp = (rotate_left(A, 5) + ((B & C) | (~B & D)) + E + W[i] + 0x5A827999) & 0x0ffffffff;
                E = D;
                D = C;
                C = rotate_left(B, 30);
                B = A;
                A = temp;
            }
            for (i = 20; i <= 39; i++) {
                temp = (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff;
                E = D;
                D = C;
                C = rotate_left(B, 30);
                B = A;
                A = temp;
            }
            for (i = 40; i <= 59; i++) {
                temp = (rotate_left(A, 5) + ((B & C) | (B & D) | (C & D)) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff;
                E = D;
                D = C;
                C = rotate_left(B, 30);
                B = A;
                A = temp;
            }
            for (i = 60; i <= 79; i++) {
                temp = (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff;
                E = D;
                D = C;
                C = rotate_left(B, 30);
                B = A;
                A = temp;
            }
            H0 = (H0 + A) & 0x0ffffffff;
            H1 = (H1 + B) & 0x0ffffffff;
            H2 = (H2 + C) & 0x0ffffffff;
            H3 = (H3 + D) & 0x0ffffffff;
            H4 = (H4 + E) & 0x0ffffffff;
        }
        temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);
        return temp.toLowerCase();
    },
    formatBooleanFree: function(value) {
        var me = Helper.Util,
            color = value == 0 ? 'red' : value == 1 ? 'green' : value == 2 ? 'blue' : value == 3 ? 'orange' : '#FFCC00';
        value = value == 0 ? t('blocked') : value == 1 ? t('free') : value == 2 ? t('inuse') : value == 3 ? t('calling') : t('pending');
        return '<span style="color:' + color + '">' + value + '</span>';
    },
    formatBoleto: function(value) {
        var me = Helper.Util,
            color = value == 'P' ? me.colorYesValue : me.colorNoValue;
        value = value = 'P' ? me.yesValue : me.noValue;
        return '<span style="color:' + color + '">' + value + '</span>';
    },
    formatPackageType: function(value) {
        value = value == 0 ? t('unlimitedcalls') : value == 1 ? t('numberfreecalls') : t('freeseconds');
        return value;
    },
    formatPorcente: function(value) {
        return value + '%';
    },
    formatBillingType: function(value) {
        value = value == 0 ? t('monthly') : t('weekly');
        return value;
    },
    formatDidType: function(value) {
        switch (value) {
            case 0:
                value = t('callforpstn');
                break;
            case 1:
                value = t('sipcall');
                break;
            case 2:
                value = t('ivr');
                break;
            case 3:
                value = 'CallingCard';
                break;
            case 4:
                value = t('portalDeVoz');
                break;
            case 5:
                value = t('CID Callback');
                break;
            case 6:
                value = t('0800 Callback');
                break;
            case 7:
                value = t('Queue');
                break;
            case 8:
                value = t('Call Group');
                break;
            case 9:
                value = t('Custom');
                break;
        }
        return value;
    },
    formatLcrtype: function(value) {
        var me = Helper.Util,
            value = value ? me.LCRbuy : me.LCRSell;
        return value;
    },
    formatMoneyDecimalWithoutColor: function(value) {
        var format = Ext.util.Format.numberRenderer('0.000');
        return App.user.currency + ' ' + format(value);
    },
    formatMoneyDecimal: function(value) {
        var me = Helper.Util,
            fnName = t('id') + 'Money',
            format = Ext.util.Format.numberRenderer('0.000');
        if (value > 0) {
            return '<span style="color:green;">' + App.user.currency + ' ' + format(value) + '</span>';
        } else if (value < 0) {
            return '<span style="color:red;">' + App.user.currency + ' ' + format(value) + '</span>';
        } else if (value == 0) {
            return '<span style="color:blue;">' + App.user.currency + ' ' + format(value) + '</span>';
        }
    },
    formatSetColor: function(value) {
        var me = Helper.Util;
        return '<span style="background-color:' + value + ';">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>';
    },
    formatMoneyDecimal4: function(value) {
        var me = Helper.Util,
            fnName = t('id') + 'Money',
            format = Ext.util.Format.numberRenderer('0.' + App.user.decimalPrecision);
        if (value > 0) {
            return '<span style="color:green;">' + App.user.currency + ' ' + format(value) + '</span>';
        } else if (value < 0) {
            return '<span style="color:red;">' + App.user.currency + ' ' + format(value) + '</span>';
        } else if (value == 0) {
            return '<span style="color:blue;">' + App.user.currency + ' ' + format(value) + '</span>';
        }
    },
    formatMoneyDecimal2: function(value) {
        var me = Helper.Util,
            fnName = t('id') + 'Money',
            format = Ext.util.Format.numberRenderer('0.00');
        if (value > 0) {
            return '<span style="color:green;">' + App.user.currency + ' ' + format(value) + '</span>';
        } else if (value < 0) {
            return '<span style="color:red;">' + App.user.currency + ' ' + format(value) + '</span>';
        } else if (value == 0) {
            return '<span style="color:blue;">' + App.user.currency + ' ' + format(value) + '</span>';
        }
    },
    formatUserType: function(value) {
        var me = Helper.Util,
            value = value == 1 ? t('admin') : value == 2 ? t('agent') : value == 3 ? t('user') : t('NULL');
        return value;
    },
    formatMoney: function(value) {
        var me = Helper.Util,
            fnName = 'globalMoney',
            format = Ext.isFunction(Ext.util.Format[fnName]) ? Ext.util.Format[fnName] : me[fnName] || Ext.util.Format.usMoney;
        formatDecimal = Ext.util.Format.numberRenderer('0.000');
        if (value > 0) {
            return '<span style="color:green;">' + format(value) + '</span>';
        } else if (value < 0) {
            return '<span style="color:red;">' + format(value) + '</span>';
        } else if (value == 0) {
            return '<span style="color:blue;">' + format(value) + '</span>';
        }
    },
    formattyyesno: function(value) {
        var me = Helper.Util,
            color = value ? me.colorYesValue : me.colorNoValue;
        value = value ? me.yesValue : me.noValue;
        return '<span style="color:' + color + '">' + value + '</span>';
    },
    formatCampaignType: function(value) {
        value = value == 1 ? t('voice') : t('sms');
        return value;
    },
    formatCallType: function(value) {
        switch (value) {
            case 0:
                value = t('standard');
                break;
            case 1:
                value = t('sipcall');
                break;
            case 2:
                value = t('did');
                break;
            case 3:
                value = t('didvoip');
                break;
            case 4:
                value = t('callback');
                break;
            case 5:
                value = t('callcenter');
                break;
            case 6:
                value = t('sms');
                break;
            case 7:
                value = t('transfer');
                break;
        }
        return value;
    },
    formatBoleto: function(value) {
        var me = Helper.Util,
            color = value == 'P' ? me.colorYesValue : me.colorNoValue;
        value = value = 'P' ? me.yesValue : me.noValue;
        return '<span style="color:' + color + '">' + value + '</span>';
    },
    formatBooleanActive: function(value) {
        var me = Helper.Util,
            color = value == 0 ? 'red' : value == 1 ? 'green' : value == 2 ? 'blue' : value == 3 ? 'green' : value == 4 ? 'red' : '#FFCC00';
        value = value == 0 ? t('inactive') : value == 1 ? t('active') : value == 2 ? t('pending') : value == 3 ? t('send') : value == 4 ? t('blocked') : t('pending');
        return '<span style="color:' + color + '">' + value + '</span>';
    },
    formatBooleanSms: function(value) {
        var me = Helper.Util,
            color = value == 0 ? 'red' : value == 1 ? 'green' : value == 2 ? 'blue' : '#FFCC00';
        value = value == 0 ? t('error') : value == 1 ? t('send') : value == 2 ? t('received') : t('pending');
        return '<span style="color:' + color + '">' + value + '</span>';
    },
    formatBoolean: function(value) {
        var me = Helper.Util,
            color = value ? me.colorYesValue : me.colorNoValue;
        value = value ? me.yesValue : me.noValue;
        return '<span style="color:' + color + '">' + value + '</span>';
    },
    formatLanguageImage: function(value) {
        return '<img src="resources/images/flags/' + value + '.png" />';
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
    },
    formatBoleto: function(value) {
        var me = Helper.Util,
            color = value == 'P' ? me.colorYesValue : me.colorNoValue;
        value = value = 'P' ? me.yesValue : me.noValue;
        return '<span style="color:' + color + '">' + value + '</span>';
    },
    formatDialStatus: function(value) {
        switch (value) {
            case 1:
                value = t('answer');
                break;
            case 2:
                value = t('busy');
                break;
            case 3:
                value = t('no') + ' ' + t('answer');
                break;
            case 4:
                value = t('cancelcall');
                break;
            case 5:
                value = 'congestion';
                break;
            case 6:
                value = 'chanunavail';
                break;
            case 7:
                value = 'dontcall';
                break;
            case 8:
                value = 'torture';
                break;
            case 9:
                value = 'invalidargs';
                break;
        }
        return value;
    },
    formatpausetype: function(value) {
        switch (value) {
            case 1:
                value = t('Almoço');
                break;
            case 2:
                value = t('Descanço');
                break;
            case 3:
                value = t('Banheiro');
                break;
            case 4:
                value = t('Fumar');
                break;
        }
        return value;
    },
    convertErrorsJsonToString: function(json) {
        var errors = '';
        if (typeof(json) === 'string') {
            return json;
        }
        Ext.iterate(json, function(field) {
            Ext.each(json[field], function(error) {
                errors += error + '<br>';
            });
        });
        return errors;
    },
    formatBooleanFree: function(value) {
        var me = Helper.Util,
            color = value == 0 ? 'red' : value == 1 ? 'green' : value == 2 ? 'blue' : '#FFCC00';
        value = value == 0 ? t('blocked') : value == 1 ? t('free') : value == 2 ? t('inuse') : t('pending');
        return '<span style="color:' + color + '">' + value + '</span>';
    },
    formatDateTime: function(value) {
        return value == '000-00-00 00:00:00' ? '' : Ext.Date.format(value, 'Y-m-d H:i:s')
    },
    formatPause: function(value) {
        switch (value) {
            case 'LOGIN':
                value = 'working';
                color = 'blue';
                break;
            case 'PAUSE':
                value = 'pause';
                color = 'red';
                break;
            case 'LOGOUT':
                value = 'theEnd';
                color = 'black';
                break;
        }
        return '<span style="color:' + color + '">' + t(value) + '</span>';
    },
    formatStatusImage: function(value) {
        //
        image = value == 'in call' ? 'calling' : value == 'paused' ? 'pause' : value == 'categorizando' ? 'categorizando' : 'hungup';
        return '<img src="resources/images/' + image + '.png" /> ' + t(value);
    },
    formatTurno: function(value) {
        return value == 'M' ? t('Mañana') : value == 'T' ? t('Tarde') : 'No identificado';
    },
    translate: function(value) {
        return t(value);
    },
    formatTimeStampToTime: function(value) {
        date = new Date(value * 1000);
        return Ext.Date.format(date, 'H:i:s');
    },
    formatStatusQueue: function(value, meta, record) {
        if (record.get('categorizing') == 1) {
            value = 'Categorizing';
            color = 'blue';
        } else if (record.get('queue_paused') == 1 && record.get('categorizing') == 0) {
            value = t('Paused') + ' ' + record.get('pause_type');
            color = '#b5ae3a';
        } else {
            switch (value) {
                case 0:
                    value = 'UNKNOWN';
                    color = 'red';
                    break;
                case 1:
                    value = 'NOT_INUSE';
                    color = 'black';
                    break;
                case 2:
                    value = 'INUSE';
                    color = 'blue';
                    break;
                case 3:
                    value = 'BUSY';
                    break;
                case 4:
                    value = 'INVALID';
                    break;
                case 5:
                    value = 'NOT LOGED ON SOFTPHONE';
                    break;
                case 6:
                    value = 'RINGING';
                    break;
                case 7:
                    value = 'RINGINUSE';
                    break;
                case 8:
                    value = 'ONHOLD';
                    break;
                default:
                    value = 'UNKNOWN';
                    break;
            }
        }
        if (color) value = '<font color=' + color + '><b>' + t(value) + ' a</b></font> ';
        else value = t(value)
        return value + Helper.Util.formatsecondsToTime(record.get('time_free'));
    }
});
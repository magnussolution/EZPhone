/**
 * Class to window about
 *
 * Adilson Magnus <info@magnussolution.com>
 * 12/12/2012
 */
Ext.define('CallCenter.view.cdrSumaryOperador.NotProduction', {
    extend: 'Ext.window.Window',
    alias: 'widget.notproduction',
    title: t('Informe tiempo no produtivo'),
    controller: 'cdrsumaryoperador',
    resizable: false,
    autoShow: true,
    width: 450,
    height: 350,
    titleWarning: t('Warning'),
    titleError: t('Error'),
    titleSuccess: t('Success'),
    titleConfirmation: t('Confirmation'),
    msgFormInvalid: t('Fill in the fields correctly.'),
    glyph: icons.info2,
    initComponent: function() {
        var me = this;
        me.items = [{
            xtype: 'form',
            reference: 'formNotProduction',
            border: false,
            layout: 'anchor',
            bodyPadding: 5,
            defaults: {
                enableKeyEvents: true,
                msgTarget: 'side'
            },
            items: [{
                fieldLabel: t('Infome el tiempo : HH:mm:ss'),
                name: 'hour',
                xtype: 'textfield',
                //vtype     : 'hour',
                value: '00:00:00',
                labelWidth: 200
            }, {
                xtype: 'textareafield',
                name: 'description',
                fieldLabel: t('description'),
                allowBlank: true,
                anchor: '100%'
            }, {
                name: 'id_user',
                style: 'margin-top:25px',
                xtype: 'fieldset',
                title: t('Select one or more operator'),
                collapsible: true,
                collapsed: false,
                items: [{
                    anchor: '100%',
                    fieldLabel: '',
                    xtype: 'usertag',
                    allowBlank: true
                }]
            }]
        }];
        me.bbar = ['->', {
            text: t('Save'),
            reference: 'saveImportLogo',
            glyph: icons.disk,
            handler: 'onSaveNotProduction',
            scope: me
        }];
        me.callParent(arguments);
    },
    onSaveNotProduction: function(btn) {
        var me = this,
            getForm = me.lookupReference('formNotProduction'),
            fieldHour = getForm.getForm().findField('hour'),
            fieldUsers = getForm.getForm().findField('id_user'),
            fieldDescription = getForm.getForm().findField('description');
        users = Ext.encode(fieldUsers.value);
        if (fieldHour.isValid() !== true) {
            Ext.ux.Alert.alert(me.titleWarning, t('Invalid format'), 'warning');
        } else {
            Ext.Ajax.request({
                url: 'index.php/cdrSumaryOperador/notProduction',
                params: {
                    hour: fieldHour.value,
                    id_users: users,
                    description: fieldDescription.value
                },
                success: function(response) {
                    response = Ext.decode(response.responseText);
                    if (response.success) {
                        Ext.ux.Alert.alert(me.titleSuccess, response.msg, 'success');
                        me.close();
                    } else {
                        Ext.ux.Alert.alert(me.titleWarning, response.msg, 'error');
                    }
                }
            });
        }
    }
});
/**
 * Classe que define a window para "sobre"
 *
 * CallCenter <info@CallCenter.com>
 * 12/12/2012
 */
Ext.define('CallCenter.view.trunk.Controller', {
    extend: 'Ext.ux.app.ViewController',
    alias: 'controller.trunk',
    onEdit: function() {
        var me = this,
            record = me.list.getSelectionModel().getSelection()[0],
            registerField = me.formPanel.getForm().findField('register');
        if (record.get('register') == 1) {
            if (record.get('register') && record.get('providertech') == 'pjsip') {
                color = record.get('registered') == 1 ? 'green' : 'red';
                registerField.setFieldLabel(t('registertrunk') + ' <span style="color:' + color + ';  font-size:30px;" > &bull; </span>');
            } else {
                registerField.setFieldLabel(t('registertrunk'));
            }
        } else {
            registerField.setFieldLabel(t('registertrunk'))
        }
        me.callParent(arguments);
        valueAllow = me.formPanel.idRecord ? record.get('allow').split(',') : ['g729', 'gsm', 'alaw', 'ulaw'];
        fieldAllow = me.formPanel.down('checkboxgroup');
        fieldAllow.setValue({
            allow: valueAllow
        });
    }
});
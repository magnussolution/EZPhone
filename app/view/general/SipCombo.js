/**
 * Classe que define a combo "codec"
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
 * 10/07/2012
 */
Ext.define('CallCenter.view.general.SipCombo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.sipcombo',
    fieldLabel: t('providertech'),
    value: 'pjsip',
    forceSelection: true,
    editable: false,
    store: [
        ['pjsip', 'pjsip'],
        ['dahdi', 'dahdi'],
        ['khomp', 'khomp'],
        ['iax2', 'iax2'],
        ['dgv', 'dgv'],
        ['ooh323', 'ooh323'],
        ['extra', 'extra']
    ]
});
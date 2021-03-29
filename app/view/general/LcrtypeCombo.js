/**
 * Classe que define a combo "lcrtype"
 *
 * =======================================
 * ###################################
 * MagnusBilling
 *
 * @package	MagnusBilling
 * @author	Adilson Leffa Magnus.
 * @copyright	Todos os direitos reservados.
 * ###################################
 * =======================================
 * MagnusSolution.com <info@magnussolution.com>
 * 24/07/2012
 */

Ext.define('CallCenter.view.general.LcrtypeCombo', {
    extend	  : 'Ext.form.field.ComboBox',
    alias	  : 'widget.lcrtypecombo',
    fieldLabel: t('lcrtype'),
    value     : 1,
    store	  : [
    	[1, t('LCRAccordingtothebuyerPrice')],
    	[0, t('LCRAccordingtothesellerPrice')]
    ]
});

Ext.define('CallCenter.view.general.LcrtypeFullCombo', {
    extend	  : 'Ext.form.field.ComboBox',
    alias	  : 'widget.lcrtypefullcombo',
    fieldLabel: t('lcrtype'),
    value     : 1,
    store	  : [
    	[1, t('LCRAccordingtothebuyerPrice')],
    	[0, t('LCRAccordingtothesellerPrice')],
    	[2, t('LoadBalancer')]
    ]
});



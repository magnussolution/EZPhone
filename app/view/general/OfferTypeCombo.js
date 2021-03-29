/**
 * Classe que define a combo "OferType"
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
 * 12/09/2012
 */

Ext.define('CallCenter.view.general.OfferTypeCombo', {
	extend	  : 'Ext.form.field.ComboBox',
	alias	  : 'widget.offertypecombo',
	fieldLabel: t('offertype'),
	value     : 0,
	store	  : [
		[0, t('unlimitedcalls')],
		[1, t('numberfreecalls')],
		[2, t('freeseconds')]
	]
});

Ext.define('CallCenter.view.general.BillingTypeCombo', {
	extend	  : 'Ext.form.field.ComboBox',
	alias	  : 'widget.billingtypecombo',
	fieldLabel: t('billingtype'),
	value     : 0,
	store	  : [
		[0, t('monthly')],
		[1, t('weekly')]
	]
});


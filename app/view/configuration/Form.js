/**
 * Classe que define o form de "Admin"
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
 * 17/08/2012
 */

Ext.define('CallCenter.view.configuration.Form', {
    extend: 'Ext.ux.form.Panel',
    alias : 'widget.configurationform',
	items : [{
	   name	      : 'config_value',
	   fieldLabel : t('value'),
          allowBlank: true
	},{
		xtype     : 'textarea',
		name	  : 'config_description',
		fieldLabel : t('description'),
		height    : 200,
          anchor    : '100%',
          readOnly: true
	}]
});
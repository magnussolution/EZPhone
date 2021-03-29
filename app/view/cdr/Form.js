/**
 * Classe que define o form de "UiAuthen"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 17/08/2012
 */

Ext.define('CallCenter.view.cdr.Form', {
    extend: 'Ext.ux.form.Panel',
    alias : 'widget.cdrform',
	items : [{
	   name	      : 'calledstation',
	   fieldLabel : t('calledstation')
	}]
});
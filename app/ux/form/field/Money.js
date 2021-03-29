/**
 * Classe para campo moeda padrao
 *
 * =======================================
 * ###################################
 * MagnusBilling
 *
 * @package MagnusBilling
 * @author Adilson Leffa Magnus.
 * @copyright Copyright (C) 2005 - 2016 MagnusBilling. All rights reserved.
 * ###################################
 *
 * This software is released under the terms of the GNU Lesser General Public License v3
 * A copy of which is available from http://www.gnu.org/copyleft/lesser.html
 *
 * Please submit bug reports, patches, etc to https://github.com/magnusbilling/mbilling/issues
 * =======================================
 * MagnusSolution.com <info@magnussolution.com>
 * 04/01/2012
 */

Ext.define('Ext.ux.form.field.Money', {
	extend: 'Ext.form.field.Text',
	alias: 'widget.moneyfield',
	requires: ['Ext.ux.TextMaskPlugin'],
	mask: t('maskMoney'),
	money: true,

	initComponent: function() {
		var me = this;

		me.plugins = ['textmask', 'markallowblank'];
		me.callParent(arguments);
	}
});
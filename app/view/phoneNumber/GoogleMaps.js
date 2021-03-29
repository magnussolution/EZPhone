/**
 * Classe que define a window import csv de "GoogleMaps"
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
 * 08/11/2012
 */

Ext.define('CallCenter.view.phoneNumber.GoogleMaps', {
	extend: 'Ext.window.Window',
	alias      : 'widget.phoneNumbergooglemaps',

	labelWidthFields: 160,
	height: 565,
	width: 730,
	autoShow: true,
	modal: true,
	layout: 'fit',
	iconCls: 'icon-import-csv',
	title: t('Google Maps'),
	maximizable: false,
	initComponent: function() {
		var me = this;

		var objStr = JSON.stringify(me.filter);

		var filter = encodeURIComponent(objStr);

		link = 'index.php/googleMaps/read?filter='+filter
		me.items = [{
			xtype : "component",

			autoEl : {
				width: '680',
				height:'560',
				tag : "iframe",
					src : link
				}
			}];
		me.callParent(arguments);
    	}
});
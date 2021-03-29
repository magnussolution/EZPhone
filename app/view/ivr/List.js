/**
 * Classe que define a lista de "Diddestination"
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
 * 24/09/2012
 */

Ext.define('CallCenter.view.ivr.List', {
    extend		: 'Ext.ux.grid.Panel',
    alias		: 'widget.ivrlist',
    store		: 'Ivr',
	initComponent: function() {
		var me = this;
		me.allowPrint = false;
		me.buttonCsv   = false;

		me.columns = me.columns || [{
			header	   : t('Id'),
			dataIndex    : 'id',
            	flex         : 1,
            	hidden	   : true,
	    		hideable 	   : App.user.isAdmin
		},{
			header		 : t('name'),
			dataIndex	 : 'name',

            flex         : 5
		}]

		me.callParent(arguments);
	}
});
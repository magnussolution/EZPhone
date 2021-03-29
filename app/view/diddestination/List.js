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

Ext.define('CallCenter.view.diddestination.List', {
    extend		: 'Ext.ux.grid.Panel',
    alias		: 'widget.diddestinationlist',
    store		: 'Diddestination',
	initComponent: function() {
		var me = this;
		me.columns = [{
			header	   : t('Id'),
			dataIndex    : 'id',
            	flex         : 1,
            	hidden	   : true,
	    		hideable 	   : App.user.isAdmin
		},{			
			header	   : t('did'),
			dataIndex    : 'did',
            	flex         : 5
		},{
			header		 : t('type') +' '+t('of')+' '+t('call'),
			dataIndex	 : 'voip_call',
			renderer	 : Helper.Util.formatDidType,
			comboRelated : 'didtypecombo',
            	flex         : 3,
            	filter		 : {
			type         : 'list',
			options      : [
				[0, t('callforpstn')],
				[1, t('sipcall')],
				[2, t('ivr')],
				[3, t('callingcard')],
				[4, t('portalDeVoz')],
				[5, t('CID Callback')],
				[6, t('0800 Callback')],
				[7, t('Queue')],
				[8, t('Call Group')],
				[9, t('Custom')]
				]
			}
		},{
			header	     : t('creationdate'),
			renderer     : Helper.Util.formatDateTime,
			dataIndex    : 'creationdate',
            	flex         : 5
		}]

		me.callParent(arguments);
	}
});
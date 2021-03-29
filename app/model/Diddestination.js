/**
 * Classe que define a model "Diddestination"
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

Ext.define('CallCenter.model.Diddestination', {
	extend    : 'Ext.data.Model',
    fields    : [
        {name: 'id', type: 'int'},
        {name: 'id_ivr', type: 'int'},
        {name: 'id_user', type: 'int'},
        {name: 'id_campaign', type: 'int'},
        {name: 'destination', type: 'string'},
        {name: 'did', type: 'string'},
        {name: 'creationdate', type : 'date', dateFormat: 'Y-m-d H:i:s'},
        {name: 'activated', type: 'int'},
        {name: 'voip_call', type: 'int'},
        'idIvrname',
        'idUserusername',
        'idCampaignname'
	],
	proxy: {
		type  : 'uxproxy',
		module: 'diddestination'
	}
});
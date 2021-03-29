/**
 * Classe que define a model "Ivr"
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

Ext.define('CallCenter.model.Ivr', {
	extend    : 'Ext.data.Model',
    fields    : [
        {name: 'id', type: 'int'},
        {name: 'TimeOfDay_monFri', type: 'string'},
        {name: 'TimeOfDay_sat', type: 'string'},
        {name: 'TimeOfDay_sun', type: 'string'},
        {name: 'option_0', type: 'string'},
        {name: 'option_1', type: 'string'},
        {name: 'option_2', type: 'string'},
        {name: 'option_3', type: 'string'},
        {name: 'option_4', type: 'string'},
        {name: 'option_5', type: 'string'},
        {name: 'option_6', type: 'string'},
        {name: 'option_7', type: 'string'},
        {name: 'option_8', type: 'string'},
        {name: 'option_9', type: 'string'},
        {name: 'option_10', type: 'string'},
        {name: 'option_out_0', type: 'string'},
        {name: 'option_out_1', type: 'string'},
        {name: 'option_out_2', type: 'string'},
        {name: 'option_out_3', type: 'string'},
        {name: 'option_out_4', type: 'string'},
        {name: 'option_out_5', type: 'string'},
        {name: 'option_out_6', type: 'string'},
        {name: 'option_out_7', type: 'string'},
        {name: 'option_out_8', type: 'string'},
        {name: 'option_out_9', type: 'string'},
        {name: 'option_out_10', type: 'string'},
        {name: 'name', type: 'string'},
        'workaudio',
        'noworkaudio'
    ],
	proxy  : {
		type  : 'uxproxy',
		module: 'ivr'
	}
});
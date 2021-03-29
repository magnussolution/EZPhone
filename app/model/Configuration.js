/**
 * Classe que define a model "Configuration"
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

Ext.define('CallCenter.model.Configuration', {
	extend    : 'Ext.data.Model',
    fields    : [
        {name: 'id', type: 'int'},
        {name: 'status', type: 'string'},
        'config_title',
        'config_key',
        'config_value',
        'config_description',
        'config_group_title'
	],
	proxy	  : {
		type  : 'uxproxy',
		module: 'configuration'
	}
});
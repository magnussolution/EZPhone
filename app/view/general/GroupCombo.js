/**
 * Classe que define a combo "GroupCombo"
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

Ext.define('CallCenter.view.general.GroupCombo', {
    extend	  : 'Ext.form.field.ComboBox',
    alias	  : 'widget.groupcombo',
    fieldLabel: t('group'),
    value	  : 'config_group_title',
    store	  : [
    	['global', 'global'],
    	['callback', 'callback'],
        ['agi-conf1', 'agi-conf1'],
        ['agi-conf2', 'agi-conf2']
    ]
});
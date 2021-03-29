/**
 * Classe que define o form de "Diddestination"
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

Ext.define('CallCenter.view.diddestination.Form', {
  extend: 'Ext.ux.form.Panel',
  alias : 'widget.diddestinationform',

  initComponent: function() {
    var me = this;

    me.items = [{
      name      : 'did',
      fieldLabel: t('did')
    },{
      xtype     : 'booleancombo',
      name      : 'activated',
      fieldLabel: t('status'),
      allowBlank : false
    },{
      style: 'margin-top:25px',
      xtype: 'fieldset',
      title: t('Did Destination'),
      collapsible: true,
      collapsed: false,
      defaults: {
          labelWidth: 75,
          anchor: '100%',
          layout: {
              type: 'hbox',
              defaultMargins: {top: 0, right: 5, bottom: 0, left: 0}
          }
      },
      items: [{
          xtype     : 'didtypefullcombo',
          name      : 'voip_call',
          fieldLabel: t('type')+' '+t('of')+' '+t('call')
        },{
          xtype      : 'textfield',
          name       : 'destination',
          fieldLabel : t('Destination'),
          value      : '',
          allowBlank : true,
          hidden     : App.user.isOperator
        },{
          xtype: 'ivrlookup',
          ownerForm: me,
          name      : 'id_ivr',
          fieldLabel: t('URA'),
          allowBlank : true
        },{
          xtype: 'campaignlookup',
          ownerForm: me,
          name      : 'id_campaign',
          fieldLabel: t('Campaign'),
          allowBlank : true
        },{
          xtype: 'userlookup',
          ownerForm: me,
          name      : 'id_user',
          fieldLabel: t('Operador'),
          allowBlank : true
        }]
    }];

    me.callParent(arguments);
  }
});
/**
 * Classe que define o form de "team"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 25/06/2019
 */
Ext.define('CallCenter.view.team.Form', {
    extend: 'Ext.ux.form.Panel',
    alias: 'widget.teamform',
    items: [{
        name: 'name',
        fieldLabel: t('name')
    }, {
        xtype: 'textareafield',
        name: 'description',
        fieldLabel: t('description'),
        allowBlank: true
    }, {
        style: 'margin-top:25px',
        xtype: 'fieldset',
        title: t('Select one or more') + ' ' + t('Trunk'),
        collapsible: true,
        collapsed: false,
        items: [{
            anchor: '100%',
            fieldLabel: '',
            xtype: 'trunktag',
            name: 'id_trunk',
            allowBlank: true
        }]
    }]
});
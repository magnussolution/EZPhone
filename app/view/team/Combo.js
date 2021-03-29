/**
 * Classe que define a combo de "teamcombo"
 *
 * MagnusSolution.com <info@magnussolution.com>  
 * 04/07/2019
 */
Ext.define('CallCenter.view.team.Combo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.teamcombo',
    name: 'id_team',
    fieldLabel: t('Team'),
    displayField: 'name',
    valueField: 'id',
    forceSelection: true,
    editable: false,
    store: Ext.create('CallCenter.store.Team', {
        proxy: {
            type: 'uxproxy',
            module: 'team',
            limitParam: undefined
        }
    })
});
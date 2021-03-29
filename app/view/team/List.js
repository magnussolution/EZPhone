/**
 * Classe que define a lista de "team"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 25/06/2019
 */
Ext.define('CallCenter.view.team.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.teamlist',
    store: 'Team',
    initComponent: function() {
        var me = this;
        me.buttonUpdateLot = false;
        me.columns = [{
            header: t('name'),
            dataIndex: 'name'
        }, {
            header: t('description'),
            dataIndex: 'description'
        }];
        me.callParent(arguments);
    }
});
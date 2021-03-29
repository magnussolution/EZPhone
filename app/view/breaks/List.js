/**
 * Classe que define a lista de "Campaign"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 19/09/2012
 */
Ext.define('CallCenter.view.breaks.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.breakslist',
    store: 'Breaks',
    initComponent: function() {
        var me = this;
        me.columns = me.columns || [{
            header: t('name'),
            dataIndex: 'name',
            flex: 5
        }, {
            header: t('Mandatory'),
            dataIndex: 'mandatory',
            flex: 5,
            renderer: Helper.Util.formattyyesno,
            filter: {
                type: 'list',
                options: [
                    [1, t('yes')],
                    [0, t('no')]
                ]
            }
        }, {
            header: t('status'),
            dataIndex: 'status',
            renderer: Helper.Util.formatBooleanActive,
            comboRelated: 'booleancombo',
            flex: 3,
            filter: {
                type: 'list',
                options: [
                    [1, t('active')],
                    [0, t('inactive')]
                ]
            }
        }]
        me.callParent(arguments);
    }
});
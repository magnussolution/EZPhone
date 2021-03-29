/**
 * Classe que define a lista de "Campaign"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 19/09/2012
 */
Ext.define('CallCenter.view.category.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.categorylist',
    store: 'Category',
    initComponent: function() {
        var me = this;
        me.buttonUpdateLot = false;
        me.columns = me.columns || [{
            header: 'ID',
            dataIndex: 'id',
            flex: 1
        }, {
            header: t('Color'),
            dataIndex: 'color',
            renderer: Helper.Util.formatSetColor,
            flex: 1
        }, {
            header: t('name'),
            dataIndex: 'name',
            flex: 5
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
        }, {
            header: t('Use to success'),
            dataIndex: 'use_in_efetiva',
            renderer: Helper.Util.formatBoolean,
            comboRelated: 'noyescombo',
            flex: 3,
            filter: {
                type: 'list',
                options: [
                    [1, t('yes')],
                    [0, t('no')]
                ]
            }
        }, {
            header: t('description'),
            dataIndex: 'description',
            flex: 5
        }]
        me.callParent(arguments);
    }
});
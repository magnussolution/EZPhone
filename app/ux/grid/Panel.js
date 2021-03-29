/**
 * Class to creation of list
 *
 * Adilson L. Magnus <info@magnusbilling.com> 
 * 14/07/2014
 */
Ext.define('Ext.ux.grid.Panel', {
    extend: 'Ext.grid.Panel',
    requires: ['Ext.grid.feature.Grouping', 'Ext.ux.grid.FiltersFeature', 'Ext.selection.CheckboxModel', 'Ext.toolbar.Paging', 'Ext.grid.column.Template', 'Ext.grid.column.Number', 'Ext.grid.column.Boolean', 'Ext.ux.form.SearchField', 'Ext.grid.column.Date', 'Ext.grid.feature.GroupingSummary'],
    selType: 'checkboxmodel',
    selModel: {
        mode: 'MULTI'
    },
    border: false,
    columnLines: true,
    allowCreate: true,
    allowUpdate: true,
    allowDelete: true,
    allowPrint: true,
    allowSearch: true,
    fieldSearch: '',
    filterFieldOnClick: true,
    textNew: t('New'),
    glyphNew: icons.file,
    textEdit: t('Edit'),
    glyphEdit: icons.pencil,
    textDelete: t('Delete'),
    glyphDelete: icons.remove,
    textCleanFilter: t('Clean Filters'),
    iconClsCleanFilter: 'icon-clean-filter',
    textPrint: t('Print'),
    glyphPrint: icons.print,
    dockPagination: 'bottom',
    displayInfoPagination: true,
    grupableColumns: true,
    filterableColumns: true,
    remoteFilter: true,
    extraButtons: [],
    labelPicture: t('Picture'),
    labelLandscape: t('Landscape'),
    buttonUpdateLot: true,
    iconButtonUpdateLot: 'icon-save-all',
    textButtonUpdateLot: t('updateLot'),
    labelSelected: t('selected'),
    labelAll: t('all'),
    pagination: true,
    buttonCsv: true,
    buttonImportCsv: false,
    iconButtonCsv: 'icon-export-csv',
    textButtonCsv: t('exportCsv'),
    iconButtonImportCsv: 'icon-import-csv',
    textButtonImportCsv: t('importFromCsv'),
    actionButtonCsv: 'onExportCsv',
    buttonUpdateLotCallShopRate: false,
    extraFilters: [],
    cmpsExtraFilters: [],
    regionExtraFilters: 'west',
    widthExtraFilters: 140,
    collapsedExtraFilters: true,
    collapsibleExtraFilters: true,
    iconAddFilter: 'icon-add-filter',
    titleAddFilter: t('addFilters'),
    columnsHide: [],
    buttonCleanFilter: true,
    buttonPrint: true,
    autoLoadList: true,
    buttonsTbar: [],
    header: window.isTablet || window.isTablets ? false : '',
    viewConfig: {
        loadMask: {
            msg: t('Loading...')
        },
        emptyText: '<center class="grid-empty">' + t('No record found') + '</center>'
    },
    initComponent: function() {
        var me = this,
            groupDelete = Ext.id(),
            groupUpdateLot = Ext.id();
        me.tbar = [];
        if (me.module && !me.listeners) {
            me.listeners = {
                selectionchange: 'onSelectionChange',
                itemclick: 'onEdit'
            };
        }
        if (me.allowSearch && !Ext.isEmpty(me.fieldSearch)) {
            me.tbar.push({
                emptyText: t('Search') + ' ' + t(me.fieldSearch),
                xtype: 'searchfield',
                fieldFilter: me.fieldSearch,
                filterOnClick: me.filterFieldOnClick,
                store: me.store
            });
        }
        if (me.allowCreate) {
            me.tbar.push({
                text: me.textNew,
                glyph: me.glyphNew,
                handler: 'onNew'
            });
        }
        if (me.allowDelete) {
            me.tbar.push({
                xtype: 'splitbutton',
                itemId: 'btnPrint',
                text: me.textDelete,
                glyph: me.glyphDelete,
                disabled: true,
                reference: 'delete',
                handler: 'onDelete',
                menu: [{
                    text: me.labelAll,
                    checked: false,
                    group: groupDelete,
                    value: 'all'
                }, {
                    text: me.labelSelected,
                    checked: true,
                    group: groupDelete,
                    value: 'selected'
                }]
            });
        }
        if ((me.allowUpdate && me.buttonUpdateLot && !App.user.isOperator) || me.buttonUpdateLotCallShopRate) {
            me.tbar.push({
                xtype: 'splitbutton',
                iconCls: me.iconButtonUpdateLot,
                text: me.textButtonUpdateLot,
                enableToggle: true,
                reference: 'updateLot',
                listeners: {
                    toggle: 'onToggleUpdateLot'
                },
                menu: [{
                    text: me.labelAll,
                    checked: true,
                    group: groupUpdateLot,
                    value: 'all',
                    listeners: {
                        checkchange: 'onCheckChangeUpdateLot'
                    }
                }, {
                    text: me.labelSelected,
                    checked: false,
                    group: groupUpdateLot,
                    value: 'selected',
                    disabled: true,
                    listeners: {
                        checkchange: 'onCheckChangeUpdateLot'
                    }
                }]
            });
        }
        if (me.buttonCsv && !window.isTablet) {
            me.tbar.push({
                iconCls: me.iconButtonCsv,
                text: me.textButtonCsv,
                handler: me.actionButtonCsv
            });
        };
        if (me.buttonImportCsv) {
            me.tbar.push({
                iconCls: me.iconButtonImportCsv,
                text: me.textButtonImportCsv,
                handler: 'onImportCsv'
            });
        };
        if (me.extraButtons.length) {
            me.tbar = Ext.Array.merge(me.tbar, me.extraButtons);
        };
        if (me.buttonPrint && !window.isTablet) {
            me.tbar.push('->', {
                xtype: 'splitbutton',
                glyph: me.glyphPrint,
                text: me.textPrint,
                hidden: !me.allowPrint,
                handler: 'onPrint',
                menu: [{
                    text: me.labelPicture,
                    checked: true,
                    group: 'orientation',
                    value: 'P',
                    handler: 'onPrint'
                }, {
                    text: me.labelLandscape,
                    checked: false,
                    group: 'orientation',
                    value: 'L',
                    handler: 'onPrint'
                }]
            });
        }
        if (me.buttonCleanFilter) {
            me.tbar.push({
                iconCls: me.iconClsCleanFilter,
                text: me.textCleanFilter,
                scope: me,
                handler: me.cleanFilters
            });
        }
        if (me.pagination) {
            me.dockedItems = [{
                xtype: 'pagingtoolbar',
                dock: me.dockPagination,
                store: me.store,
                displayInfo: me.displayInfoPagination
            }, {
                xtype: 'toolbar',
                dock: me.dockPagination,
                items: me.buttonsTbar,
                hidden: !me.buttonsTbar.length
            }];
        }
        me.features = [{
            ftype: 'filters',
            id: 'filters',
            local: !me.remoteFilter
        }];
        if (me.summary) {
            me.features.push({
                ftype: 'summary'
            });
        }
        if (me.groupingsummary) {
            me.features.push({
                ftype: 'groupingsummary'
            });
        } else {
            me.features.push({
                ftype: 'grouping',
                enableGroupingMenu: me.grupableColumns,
                groupHeaderTpl: [
                    t('Column') + ': ', '{name:this.formatName}', {
                        formatName: function(name) {
                            return t(name);
                        }
                    }, ' ({rows.length} Item{[values.rows.length > 1 ? "s" : ""]})'
                ]
            });
        }
        me.on('render', me.applyDefaultColumns, me);
        me.callParent(arguments);
        me.autoLoadList && !window.isDesktop && me.getStore().load({
            scope: me,
            callback: function(records) {
                /*if (records && records.length) {
                        var modelFields = [];
                        var dynamicColumns = [];
                        var sampleRow = records[0].raw;

                        //console.log(me.store.getProxy().getReader().rawData.columns[0]);

                        Ext.Object.each(sampleRow, function (key, value) {                  

                            modelFields.push(key);
                            var dynColObj = {
                                text: t(key), 
                                dataIndex: key, 
                                flex: 1
                            };
                            if (key == "id") {
                                dynColObj.hidden = true;
                            }
                            //if (key != 'id_user')
                                dynamicColumns.push(dynColObj);
                        
                        });
       
                    me.reconfigure(me.store, dynamicColumns);
                }*/
                me.view.refresh();
            }
        });
    },
    getExtraFilterClass: function(type) {
        switch (type) {
            case 'auto':
                type = 'string';
                break;
            case 'int':
            case 'float':
                type = 'numeric';
                break;
            case 'bool':
                type = 'boolean';
                break;
        }
        return Ext.ClassManager.getByAlias('gridfilter.' + type);
    },
    addExtraFilter: function(filter) {
        var me = this,
            filterGrid = me.getView().getFeature('filters');
        filter.button.toggle(filter.active);
        filterGrid.extraFilters = me.getFilterData();
        me.deferredUpdate.delay(filter.type === 'string' ? 0 : filterGrid.updateBuffer);
    },
    clearExtraFilters: function() {
        var me = this,
            btnExtraFilters = me.cmpExtraFilters.query('splitbutton[pressed=true]');
        Ext.each(btnExtraFilters, function(btn) {
            btn.toggle(false, true);
            btn.filter.setActive(false);
        });
    },
    getFilterData: function() {
        var me = this,
            filters = [],
            i,
            len;
        Ext.each(me.cmpsExtraFilters, function(f) {
            if (f.active) {
                var d = [].concat(f.serialize());
                for (i = 0, len = d.length; i < len; i++) {
                    filters.push({
                        field: f.field || f.dataIndex,
                        data: d[i],
                        type: d[i].type, //add
                        value: d[i].value // add
                    });
                }
            }
        });
        return filters;
    },
    initExtraFilters: function() {
        var me = this,
            clsFilter,
            cmpFilter,
            menu,
            filterFeature = me.getView().getFeature('filters'),
            //module = window.isDesktop ? me.module.ownerCt : me.module;
            module = me.module;
        Ext.suspendLayouts();
        me.deferredUpdate = Ext.create('Ext.util.DelayedTask', function() {
            me.store.load();
            me.deferredUpdate.cancel();
        }, me);
        me.on('clearfilters', me.clearExtraFilters, me);
        me.cmpExtraFilters = module.add({
            region: me.regionExtraFilters,
            iconCls: me.iconAddFilter,
            title: me.titleAddFilter,
            autoScroll: true,
            defaultType: 'splitbutton',
            layout: 'anchor',
            width: me.widthExtraFilters,
            maxWidth: me.widthExtraFilters,
            collapsed: me.collapsedExtraFilters,
            collapsible: me.collapsibleExtraFilters,
            defaults: {
                anchor: '100%',
                enableToggle: true,
                listeners: {
                    toggle: function(btn, pressed) {
                        if (!btn.filter.active) {
                            btn.toggle(false, true);
                        }
                        btn.filter.setActive(pressed);
                    }
                }
            }
        });
        Ext.each(me.extraFilters, function(extraFilter) {
            clsFilter = me.getExtraFilterClass(extraFilter.type);
            cmpFilter = new clsFilter(extraFilter);
            cmpFilter.on({
                scope: me,
                update: me.addExtraFilter,
                activate: me.addExtraFilter,
                deactivate: me.addExtraFilter
            });
            me.cmpsExtraFilters.push(cmpFilter);
            filterFeature.cmpsExtraFilters = me.cmpsExtraFilters;
            menu = cmpFilter.menu;
            cmpFilter.button = me.cmpExtraFilters.add({
                text: extraFilter.label,
                menu: menu,
                filter: cmpFilter
            });
        });
        Ext.resumeLayouts(true);
    },
    applyDefaultColumns: function() {
        var me = this,
            i,
            column;
        if (me.extraFilters.length) {
            me.initExtraFilters();
        }
        for (i in me.columns) {
            column = me.columns[i];
            if (column.isCheckerHd) {
                continue;
            }
            if (me.columnsHide.indexOf(column.dataIndex) !== -1) {
                column.hidden = true;
            }
            column.flex = column.width || column.flex || 1;
            column.filterable = Ext.isDefined(column.filterable) ? column.filterable : me.filterableColumns;
            if (column.comboFilter) {
                column.filter = column.filter || Helper.Util.getListFilter(column.comboFilter);
            }
        }
    },
    cleanFilters: function() {
        this.filters.clearFilters();
    }
});
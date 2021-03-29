/**
 * Classe que define a window para "sobre"
 *
 * CallCenter <info@CallCenter.com>
 * 12/12/2012
 */

Ext.define('CallCenter.view.cdrSummary.Controller', {
    extend: 'Ext.ux.app.ViewController',
    alias: 'controller.cdrsummary',
    formHidden : true,
    aliasChart: 'cdrsummarychart',

    onChart: function() {
    	var me = this;

        me.chart = Ext.widget('window', {
            title: t('charts'),
            iconCls: 'icon-chart-column',
            layout: 'fit',
            autoShow: true,
            modal: true,
            resizable: false,
            width: window.isThemeNeptune ? 740 : 710,
            items: {
                xtype: me.aliasChart,
                listeners: {
                    scope: me,
                    render: me.onRenderChart
                }
            }
        });
       // me.chart.down('#tbTextSum').setText('<b>' + t('total') + ': ' + me.sumData.sumsessiontime + '</b>');
    },

    onRenderModule: function() {
        var me = this,
            btnChart = me.lookupReference('chart');

        me.callParent(arguments);
        me.store.on({
            scope: me,
            beforeload: function() {
                btnChart.el && btnChart.disable();
            },
            load: function(store) {
                me.onRenderChart();
                btnChart.el && btnChart.enable();
            }
        });
    },

    onEdit: function() {
        me = this;
        me.formPanel.expand();
    },

    onRenderChart: function(chart) {
        var me = this;

        me.sumData = me.store.getProxy().getReader().rawData.rows[0];

        if(!me.sumData) {
            return;
        }
        
        if (me.formPanel.getForm().monitor) {
            me.formPanel.getForm().getFields().each(function(field) {
                field.setValue(me.sumData[field.name]);
            });
        }
    },

    onToggleGroupButton: function(btn) {
        if(!btn.pressed) {
            return false;
        }

        var panelChart = btn.up(this.aliasChart),
            newRendererFieldValue = btn.sumRenderer,
            btnTypeCharts = panelChart.down('buttongroup[toggleGroup=typeChart] button[pressed=true]'),
            total = Ext.isFunction(newRendererFieldValue) ? newRendererFieldValue(panelChart.sumData[btn.sumName]) : panelChart.sumData[btn.sumName],
            chartColumn = Ext.clone(panelChart.chartColumn),
            chartBar = Ext.clone(panelChart.chartBar),
            chartLine = Ext.clone(panelChart.chartLine),
            chartPie = Ext.clone(panelChart.chartPie),
            newFieldValue = btn.chart,
            newTitleFieldValue = btn.text;

        chartColumn.axes[0].fields = newFieldValue;
        chartColumn.axes[0].title = newTitleFieldValue;
        chartColumn.axes[0].renderer = newRendererFieldValue === Helper.Util.formatMoneyDecimal ? Helper.Util.formatMoneyDecimalWithoutColor : newRendererFieldValue || panelChart.rendererDefault;
        chartColumn.series[0].yField = newFieldValue;
        chartColumn.series[0].tooltip.renderer = panelChart.rendererPie(newFieldValue, panelChart.fieldDescription, newRendererFieldValue || panelChart.rendererFieldValue, panelChart.rendererFieldDescription, panelChart.limitCharLabelTip);

        chartBar.axes[0].fields = newFieldValue;
        chartBar.axes[0].title = newTitleFieldValue;
        chartBar.axes[0].renderer = newRendererFieldValue === Helper.Util.formatMoneyDecimal ? Helper.Util.formatMoneyDecimalWithoutColor : newRendererFieldValue || panelChart.rendererDefault;
        chartBar.series[0].yField = newFieldValue;
        chartBar.series[0].tooltip.renderer = panelChart.rendererPie(newFieldValue, panelChart.fieldDescription, newRendererFieldValue || panelChart.rendererFieldValue, panelChart.rendererFieldDescription, panelChart.limitCharLabelTip);

        chartLine.axes[0].fields = newFieldValue;
        chartLine.axes[0].title = newTitleFieldValue;
        chartLine.axes[0].renderer = newRendererFieldValue === Helper.Util.formatMoneyDecimal ? Helper.Util.formatMoneyDecimalWithoutColor : newRendererFieldValue || panelChart.rendererDefault;
        chartLine.series[0].yField = newFieldValue;
        chartLine.series[0].tooltip.renderer = panelChart.rendererPie(newFieldValue, panelChart.fieldDescription, newRendererFieldValue || panelChart.rendererFieldValue, panelChart.rendererFieldDescription, panelChart.limitCharLabelTip);

        chartPie.series[0].field = newFieldValue;
        chartPie.series[0].tooltip.renderer = panelChart.rendererPie(newFieldValue, panelChart.fieldDescription, newRendererFieldValue || panelChart.rendererFieldValue, panelChart.rendererFieldDescription, panelChart.limitCharLabelTip);

        //panelChart.down('#tbTextSum').setText(t('total') + ': ' + total);

        panelChart.removeAll();
        panelChart.add([chartColumn, chartBar, chartLine, chartPie]);
        panelChart.getLayout().setActiveItem(panelChart.down('#'+btnTypeCharts.chart));
    }
});
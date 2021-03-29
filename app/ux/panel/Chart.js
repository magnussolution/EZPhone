/**
 * Classe para chart padrao
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
 * 15/02/2011
 */

Ext.define('Ext.ux.panel.Chart', {
	extend			 : 'Ext.panel.Panel',
	alias			 : 'widget.chartpanel',
	requires		 : [
		'Ext.container.ButtonGroup',
		'Ext.chart.PolarChart',
		'Ext.chart.CartesianChart',
		'Ext.chart.axis.Numeric',
		'Ext.chart.axis.Category',
		'Ext.chart.series.Bar',
		'Ext.chart.series.Line',
		'Ext.chart.series.Pie',
		'Ext.chart.interactions.ItemHighlight'
	],
	rootData		 : undefined,
    positionLegendPie: 'bottom',
    showLegendPie	 : true,
    widthTip		 : 200,
    degressXLabel	 : 0,
    fontLabel		 : '15px Arial',
    textBtnColumn	 : t('columns'),
    textBtnLine		 : t('lines'),
    textBtnBar		 : t('bars'),
    textBtnPie		 : t('pie'),
    iconBtnColumn	 : 'icon-chart-column',
    iconBtnLine		 : 'icon-chart-line',
    iconBtnBar		 : 'icon-chart-bar',
    iconBtnPie		 : 'icon-chart-pie',
    heightChart		 : 400,
    charts			 : ['column', 'bar', 'line', 'pie'],
    defaultChart	 : 'column',
    limitCharLabelTip: 25,
    bbarChart		 : [],
    tbarChart		 : [],
    minimumAxesY	 : 0,
    border		: false,
    layout		: 'card',
    btnShowColumn 	: true,
    btnShowBar 	: true,
    btnShowLine 	: true,
    btnShowPie 	: true,
    btnShowLineHidden : false,
    btnShowColumnHidden : false,
    showDownload: true,
    legend : null,

    constructor: function() {
    	var me = this;

    	if(Ext.isString(me.store)) {
    		me.store = Ext.data.StoreManager.lookup(me.store);
    		me.store.load({
    			scope: me,
    			callback: function() {
    				me.sumData = me.store.model.proxy.reader.rawData.rows[0];
    			}
    		});
    	}

    	me.callParent(arguments);
    },

    initComponent: function() {
    	var me = this,
    		countChart = me.charts.length,
    		btnColumn, btnBar, btnLine, btnPie,
			charts = [],
			buttonsChart = [],
			seriesLine = [],
			store,
			rawData;

    	if(me.charts.length === 1) {
    		me.defaultChart = me.charts[0];
    	}

    	me.fieldValue = Ext.isArray(me.fieldValue) ? me.fieldValue : [me.fieldValue];

    	if(me.rootData) {
    		store = Ext.getStore(me.store);
    		rawData = store.model.proxy.reader.rawData;

    		me.store = Ext.create('Ext.data.Store', {
    			fields: Ext.Array.merge(me.fieldValue, me.fieldDescription),
    			data  : rawData && rawData[me.rootData],
    			proxy : {
					type  : 'memory',
	        		reader: {type: 'json'}
				}
    		});

    		me.fieldValue = me.fieldValue[0].name || me.fieldValue[0];
    		me.fieldDescription = me.fieldDescription.name || me.fieldDescription;
    	}

    	Ext.each(me.fieldValue, function(f) {
    		seriesLine.push({
				type: 'line',
				yField: f,
				xField: me.fieldDescription,
				marker: {radius: 4},
				highlight: true, 
				tooltip: {
					trackMouse: true,
					width: me.widthTip,
					renderer: me.rendererPie(me.fieldDescription, me.rendererFieldValue, me.rendererFieldDescription, me.limitCharLabelTip)
				}
			});
    	});

	    me.chartColumn = {
			xtype  : 'cartesian',
	    	itemId : 'column',
	    	height : me.heightChart,
	    	width  : me.width,
	    	store  : me.store,
	    	axes   : [{
				type	: 'numeric',
				title	: me.labelYLine,
				position: 'left',
				grid	: true,
				minimum	: me.minimumAxesY,
				renderer: me.rendererFieldValue || me.rendererDefault
			},{
				type	: 'category',
				title	: me.labelXLine,
				position: 'bottom',
				grid	: true,
				renderer: me.rendererFieldDescription || me.rendererDefault,
				label	: {
					rotate	: {degrees: me.degressXLabel}
				}
			}],
			series: [{
				type	 : 'bar',
				axis	 : 'left',
				yField	 : me.fieldValue,
				xField	 : me.fieldDescription,
				highlight: true,
				tooltip	 : {
					width	: me.widthTip,
					renderer: me.rendererPie(me.fieldDescription, me.rendererFieldValue, me.rendererFieldDescription, me.limitCharLabelTip)
				}
			}]
	    };

	    me.chartBar = {
	    	xtype  : 'cartesian',
	    	itemId : 'bar',
	    	height : me.heightChart,
	    	width  : me.width,
	    	store  : me.store,
	    	flipXY: true,
	    	axes   : [{
				type	: 'numeric',
				title	: me.labelYLine,
				position: 'bottom',
				fields	: me.fieldValue,
				grid	: true,
				minimum	: me.minimumAxesY,
				renderer: me.rendererFieldValue || me.rendererDefault
			},{
				type	: 'category',
				title	: me.labelXLine,
				position: 'left',
				fields	: me.fieldDescription,
				grid	: true,
				renderer: me.rendererFieldDescription || me.rendererDefault
			}],
			series: [{
				type	 : 'bar',
				yField	 : me.fieldValue,
				xField	 : me.fieldDescription,
				highlight: true,
				tooltip	 : {
					width	: me.widthTip,
					renderer: me.rendererPie(me.fieldDescription, me.rendererFieldValue, me.rendererFieldDescription, me.limitCharLabelTip)
				}
			}]
	    };

	    me.chartLine = {
	    	xtype  : 'cartesian',
	    	itemId : 'line',
	    	height : me.heightChart,
	    	width  : me.width,
	    	store  : me.store,
	    	legend : me.legend,
	    	axes   : [{
				type	: 'numeric',
				title	: me.labelYLine,
				position: 'left',
				fields	: me.fieldValue,
				grid	: true,
				minimum	: me.minimumAxesY,
				renderer: me.rendererFieldValue || me.rendererDefault
			},{
				type	: 'category',
				title	: me.labelXLine,
				position: 'bottom',
				grid	: true,
				fields	: me.fieldDescription,
				renderer: me.rendererFieldDescription || me.rendererDefault
			}],
			series: seriesLine
	    };

	    me.chartPie = {
    		xtype  : 'polar',
    		itemId : 'pie',
    		height : me.heightChart,
    		width  : me.width,
			store  : me.store,
			legend : {
				position: me.positionLegendPie,
				renderer: me.rendererFieldDescription
			},
			series : [{
				type		  : 'pie',
		        angleField	  : me.fieldValue[0],
		        showInLegend  : me.showLegendPie,
		        tooltip		  : {
		        	trackMouse: true,
					width	: me.widthTip,
					renderer: me.rendererPie(me.fieldDescription, me.rendererFieldValue, me.rendererFieldDescription, me.limitCharLabelTip)
				},
				highlight	: {
					segment: {margin: 20}
				},
				label		: {
					field	: me.fieldDescription,
					display : 'rotate',
					contrast: true,
					font	: me.fontLabel,
					renderer: me.rendererFieldDescription || me.rendererDefault
				}
			}]
		};
		if (me.btnShowColumn) {
			btnColumn = {
	        		chart  : 'column',
	            	text   : me.textBtnColumn,
	            	iconCls: me.iconBtnColumn,
	            	hidden : me.btnShowColumnHidden
	        	};
		};
		
		if (me.btnShowBar) {
			btnBar = {
				chart  : 'bar',
				text   : me.textBtnBar,
				iconCls: me.iconBtnBar
			};
		};
        	if (me.btnShowLine) {
        		btnLine = {
        			chart  : 'line',
        			text   : me.textBtnLine,
            		iconCls: me.iconBtnLine,
            		hidden : me.btnShowLineHidden
        		};
        	};
        	if (me.btnShowPie) {
       		btnPie = {
        			chart  : 'pie',
        			text   : me.textBtnPie,
            		iconCls: me.iconBtnPie
        		};
        	};

        if(Ext.Array.contains(me.charts, 'column'))
	    {
	    	charts.push(me.chartColumn);
	    	buttonsChart.push(btnColumn);
	    }

	    if(Ext.Array.contains(me.charts, 'bar'))
	    {
	    	charts.push(me.chartBar);
	    	buttonsChart.push(btnBar);
	    }

	    if(Ext.Array.contains(me.charts, 'line'))
	    {
	    	charts.push(me.chartLine);
	    	buttonsChart.push(btnLine);
	    }

	    if(Ext.Array.contains(me.charts, 'pie'))
	    {
	    	charts.push(me.chartPie);
	    	buttonsChart.push(btnPie);
	    }

	    me.bbarChart.push('->', {
	    	xtype	   : 'buttongroup',
	        toggleGroup: 'typeChart',
	        defaults   : {
	        	enableToggle : true,
				allowDepress: false,
	        	toggleGroup	 : 'typeChart',
	        	listeners	 : {
	        		scope: me,
	        		toggle: me.activeChart
	        	}
	        },
	        items	   : buttonsChart
	    });

	    me.items = charts;

	    if(me.showDownload) {
	    	me.tbarChart.push('->', {
	    		text: t('Download'),
	    		glyph: icons.disk,
	    		scope: me,
	    		handler: me.onDownload
	    	});
	    }

	    me.tbar = me.tbarChart;
	    me.bbar = me.bbarChart;

    	me.callParent(arguments);
    	me.activeItem = me.down('#' + me.defaultChart);
    	me.down('button[chart=' + me.defaultChart + ']').pressed = true;
    },

    onDownload: function() {
    	var me = this;

    	me.getLayout().getActiveItem().download();
    },

    activeChart: function(btn) {
    	var me = this;
    	btn.pressed && me.getLayout().setActiveItem(me.down('#' + btn.chart));
    },

    rendererPie: function(fieldDescription, rendererFieldValue, rendererFieldDescription, limitCharLabelTip) {
    	return function(record, item) {
	    	var me = this,
	    		description = record.get(fieldDescription),
	    		value = record.get(item.field);

    		description = rendererFieldDescription ? rendererFieldDescription(description) : description;
    		value = rendererFieldValue ? rendererFieldValue(value) : value
    		description = Ext.String.ellipsis(description, limitCharLabelTip) + ': ';
    		title = description + value;

			me.setTitle(title);
    	}
	},

	rendererDefault: function(value) {
		return value;
	},

	rendererLegend: function(value) {
		return t(value);
	}
});
/**
 * Classe que define o grafico de "cccall"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 13/02/2012
 */

Ext.define('CallCenter.view.cdrSummary.Chart', {
    extend		: 'Ext.ux.panel.Chart',
    alias			: 'widget.cdrsummarychart',
    width			: 710,
    controller: 'cdrsummary',
    store			: 'CdrSummary',
    fieldValue		: 'sessiontime',
    fieldDescription: 'day',
    labelYLine		: t('sessiontime')+ ' Min',
    labelXLine		: t('day'),
    reference: 'cdrsummarychart',
    
    initComponent: function() {
    	var me = this,
    		buttonsChart;
    	
    	me.rendererFieldValue       = Ext.util.Format.numberRenderer('0'),
    	me.rendererFieldDescription = Ext.util.Format.dateRenderer('Y-m-d');
    	
    	me.tbarChart = [{
			xtype	   : 'buttongroup',
			toggleGroup: 'charts',
			defaults   : {
				enableToggle: true,
				toggleGroup	: 'charts',
				allowDepress: false,
				listeners: {
					toggle: 'onToggleGroupButton'
				}
			},
			items	   : [{
				pressed: true,
	            text   : t('sessiontime'),
	            chart  : 'sessiontime',
	            sumName: 'sumsessiontime'
	        },{
	            text	   : t('aloc_all_calls'),
	            sumRenderer: Helper.Util.formatsecondsToTime,
	            chart	   : 'aloc_all_calls',
	            sumName	   : 'sumaloc_all_calls'
	        },{
	            text	   : t('aloc_success_calls'),
	            sumRenderer: Helper.Util.formatsecondsToTime,
	            chart	   : 'aloc_success_calls',
	            sumName	   : 'sumaloc_success_calls'
	        },{
	            text   	   : t('nbcall'),
	            chart      : 'nbcall',
	            sumName    : 'sumnbcall'
	        },{
	            text       : t('successCall'),
	            chart      : 'success_calls',
	            sumName    : 'sumsuccess_calls'
	        },{
				text	   : t('sumcategoriacion_completa'),
				chart	   : 'categoriacion_completa',
				sumRenderer: Ext.util.Format.numberRenderer('0'),
				sumName	   : 'sumcategoriacion_completa'
			}]
	    }];
    	
	    me.bbarChart = [{
	    	xtype : 'tbtext',
	    	itemId: 'tbTextSum'
	    }];
	    
    	me.callParent(arguments);
    }
});
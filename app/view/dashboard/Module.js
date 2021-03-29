/**
 * Classe que define o panel de "Boleto"
 *
 * MagnusSolution.com <info@magnussolution.com>
 * 17/08/2012
 */

Ext.define('CallCenter.view.dashboard.Module', {
    	extend    : 'Ext.panel.Panel',
    	alias     : 'widget.dashboardmodule',
    	autoShow  : true,
    	header 	: false,

    	initComponent: function() {
		var me = this;

        width = window.isTablet ? Ext.Element.getViewportWidth() - 240:  Ext.Element.getViewportWidth() - 220;


    	if(localStorage.getItem('lang') == 'pt_BR'){
        	facebook = 'https://www.facebook.com/magnusbilling.portugues';
    	}else if(localStorage.getItem('lang') == 'es'){
    	    	facebook = 'https://www.facebook.com/magnusbilling.espanol';
    	}else{
        	facebook = 'https://www.facebook.com/magnusbilling.english';
    	}

        widthView = Ext.Element.getViewportWidth() - 430;
        heightView = Ext.Element.getViewportHeight() - 137;
        heightViewFace = heightView + 23;
		
    if (App.user.isAdmin == 1) {
      me.items = [
      {
        width : !window.isDesktop ? width : 'NULL' ,
        header : false,
        xtype: 'dashboard',
               listeners: {
                    activate: 'setRunnerInfoSystem'
               },
               glyph: icons.home,
               title: t('Home'),
               stateful: false,
               
               items: [{
                    columnWidth:  1,
                    items: [ {
                        title: t('Summary'),
                        iconCls: 'icon-chart-column',
                        glyph: undefined,
                        items: {xtype: 'cdrsumaryoperadorlist2'},
                        hidden : !App.user.isAdmin || window.isTablet || App.user.mmagnus == 1
                    }]
               },{
                    columnWidth:  1,
                    items: [ {
                        title: t('Llamadas'),
                        iconCls: 'icon-chart-column',
                        glyph: undefined,
                        items: {xtype: 'operatorstatuslist2'},
                        hidden : !App.user.isAdmin || window.isTablet || App.user.mmagnus == 1
                    }]
               },{
                    columnWidth: App.user.mmagnus > 1 ? 1/2: 1,
                    items: [ {
                        title: t('Por favor realizar el logueo en una campaña!'),
                        iconCls: 'icon-chart-column',
                        glyph: undefined,
                        items: {
                          xtype: 'campaignloginoutmodule'
                        },
                        hidden : !App.user.isOperator
                    }]
               }]
      }];

    }else{
      me.items = [
      {
        width : !window.isDesktop ? width : 'NULL' ,
        header : false,
        xtype: 'dashboard',
               glyph: icons.home,
               title: t('Home'),
               stateful: false,
               
               items: [{
                    columnWidth: App.user.mmagnus > 1 ? 1/2: 1,
                    items: [ {
                        title: t('Por favor realizar el logueo en una campaña!'),
                        iconCls: 'icon-chart-column',
                        glyph: undefined,
                        items: {
                          xtype: 'campaignloginoutmodule'
                        },
                        hidden : !App.user.isOperator
                    }]
               }]
      }];
    }
		

		me.callParent(arguments);
	}
   	
});
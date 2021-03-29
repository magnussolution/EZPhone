/**
 * Class to create modules
 *
 * Adilson L. Magnus <info@magnusbilling.com>
 * 14/07/2014
 */

Ext.define('Ext.ux.panel.Module', {
    extend: 'Ext.container.Container',
	requires: ['Ext.layout.container.Border'],
    layout: 'border',
    module: '',
    titleModule: '',
    cfgEast: {},
    cfgCenter: {},
    cfgWest: {},
    defaults: {},
    listeners: {
        render: 'onRenderModule',
        destroy : 'onDestroyModule',
        scope: 'controller'
    },
    collapsedForm   : true,
    collapsibleForm : true,
    hiddenForm          : false,
    flexForm : 1,
    widthForm : 200,
    titleDetails    : t('Details'),


    initComponent: function() {
        var me = this,
        	objCenter,
            cfgEast = Ext.clone(me.cfgEast),
            cfgCenter = Ext.clone(me.cfgCenter),
            cfgWest = Ext.clone(me.cfgWest);

        me.flexForm = Ext.Element.getViewportWidth() < 1000 ? 3 : Ext.Element.getViewportWidth() < 1200 ? 2 : me.flexForm;
        
        Ext.applyIf(cfgEast, {
            xtype: me.module + 'form',
            reference: me.module + 'form',
            region: 'east',
            title: me.titleDetails,
            flex: me.flexForm,
            maxWidth   : 900,
            width      :window.isTablet || window.isTablets && !window.isDesktop ? '60%' : me.widthForm,
            minWidth   : me.widthForm,
            collapsed  : me.collapsedForm,
            collapsible: me.collapsibleForm,
            allowCreate: me.allowCreate,
            allowUpdate: me.allowUpdate,
            module: me,
            listeners: {
                expand: 'onExpandForm'
            }
        });

        Ext.applyIf(cfgCenter, {
            xtype: me.module + 'list',
            reference: me.module + 'list',
            region: 'center',
            glyph: icons.file3,
            title: t('List of ') + me.titleModule,
            flex: !Ext.Boot.platformTags.desktop ? 0 : Ext.isDefined(me.module) ? 2 : 1,
            border: false,
            allowCreate: me.allowCreate,
            allowUpdate: me.allowUpdate,
            allowDelete: me.allowDelete,
            module: me,
            hidden: me.hiddenForm
        });

        Ext.applyIf(me.defaults, {
            border: false,
            split: true
        });

        me.items = [cfgCenter];

        if(Ext.isDefined(me.module)) {
        	me.items.push(cfgEast);
        }

        if(!Ext.Object.isEmpty(cfgWest)) {
        	me.items.push(Ext.applyIf(cfgWest, {
                region: 'west',
                width: 200,
                collapsed: true,
                collapsible: true,
                border: false
            }));
        }

        me.callParent(arguments);
    }
});
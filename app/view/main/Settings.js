/**
 * Class to define settings module
 *
 * Adilson Magnus <info@magnussolution.com>
 * 10/07/2014
 */

Ext.define('CallCenter.view.main.Settings', {
	extend: 'Ext.container.Container',
    alias: 'widget.settings',
    controller: 'settings',
    layout: 'border',
    titleMenuLayout: t('Layout'),
    titlePreview: t('Preview'),
    titleMenuTheme: t('Theme'),
    textApply: t('Apply'),
    defaultLayout: 'standard',
    iconApply: icons.checkmark,
    pathScreens: 'resources/images/themes/screens/',
    reloadSystemText: t('Reload System'), 
    msgReloadSystem: t('Want to reload the system to apply the layout?'),
    changeLayoutTitle: t('Change Layout'),
    changeLayoutText: t('The new layout will be applied the next time the system is loaded'),
    defaultTheme  : 'blue-crisp',
    msgReloadSystemTheme: t('Want to reload the system to apply the theme?'),
    changeThemeTitle: t('Change Theme'),
    changeThemeText: t('The new theme will be applied the next time the system is loaded'),
    titleMenuWallpaper: t('Wallpaper'),
    textNone: t('None'),
    iconClsNone: 'icon-none',
    labelCheckFit: t('Fit'),
    pathWallpaper: '',
    wallpapers: [{
        text   : t('Yellow'),
        src    : 'Amarelo',
        iconCls: 'icon-yellow'
    },{
        text   : t('Blue'),
        src    : 'Azul',
        iconCls: 'icon-blue'
    },{
        text   : t('Gray'),
        src    : 'Cinza',
        iconCls: 'icon-gray'
    },{
        text   : t('Orange'),
        src    : 'Laranja',
        iconCls: 'icon-orange'
    },{
        text   : t('Mountain'),
        src    : 'Montanhas',
        iconCls: 'icon-mountain'
    },{
        text   : t('Night'),
        src    : 'Noite',
        iconCls: 'icon-night'
    },{
        text   : t('Purple'),
        src    : 'Roxo',
        iconCls: 'icon-purple'
    },{
        text   : t('Green'),
        src    : 'Verde',
        iconCls: 'icon-green'
    },{
        text   : t('Red'),
        src    : 'Vermelho',
        iconCls: 'icon-red'
    },{
        text   : t('Customization'),
        src    : 'Customization',
        iconCls: 'icon-none'
    }],
    themes: [{
        text   : t('Yellow'),
        css    : 'yellow-classic',
        iconCls: 'icon-yellow'
    },{
        text   : t('Yellow') + ' Neptune',
        css    : 'yellow-neptune',
        iconCls: 'icon-yellow'
    },{
        text   : t('Yellow') + ' Crisp',
        css    : 'yellow-crisp',
        iconCls: 'icon-yellow'
    },{
        text   : t('Blue'),
        css    : 'blue-classic',
        iconCls: 'icon-blue'
    },{
        text   : t('Blue') + ' Neptune',
        css    : 'blue-neptune',
        iconCls: 'icon-blue'
    },{
        text   : t('Blue') + ' Crisp',
        css    : 'blue-crisp',
        iconCls: 'icon-blue'
    },{
        text   : t('Gray'),
        css    : 'gray-classic',
        iconCls: 'icon-gray'
    },{
        text   : t('Gray') + ' Neptune',
        css    : 'gray-neptune',
        iconCls: 'icon-gray'
    },{
        text   : t('Gray') + ' Crisp',
        css    : 'gray-crisp',
        iconCls: 'icon-gray'
    },{
        text   : t('Orange'),
        css    : 'orange-classic',
        iconCls: 'icon-orange'
    },{
        text   : t('Orange') + ' Neptune',
        css    : 'orange-neptune',
        iconCls: 'icon-orange'
    },{
        text   : t('Orange') + ' Crisp',
        css    : 'orange-crisp',
        iconCls: 'icon-orange'
    },{
        text   : t('Purple'),
        css    : 'purple-classic',
        iconCls: 'icon-purple'
    },{
        text   : t('Purple') + ' Neptune',
        css    : 'purple-neptune',
        iconCls: 'icon-purple'
    },{
        text   : t('Purple') + ' Crisp',
        css    : 'purple-crisp',
        iconCls: 'icon-purple'
    },{
        text   : t('Green'),
        css    : 'green-classic',
        iconCls: 'icon-green'
    },{
        text   : t('Green') + ' Neptune',
        css    : 'green-neptune',
        iconCls: 'icon-green'
    },{
        text   : t('Green') + ' Crisp',
        css    : 'green-crisp',
        iconCls: 'icon-green'
    },{
        text   : t('Red'),
        css    : 'red-classic',
        iconCls: 'icon-red'
    },{
        text   : t('Red') + ' Neptune',
        css    : 'red-neptune',
        iconCls: 'icon-red'
    },{
        text   : t('Red') + ' Crisp',
        css    : 'red-crisp',
        iconCls: 'icon-red'
    }],
    layouts: [{
        text   : t('Standard'),
        type   : 'standard',
        iconCls: 'icon-wallpaper'
    },{
        text   : t('Desktop'),
        type   : 'desktop',
        iconCls: 'icon-wallpaper'
    }],

    initComponent: function() {
        var me = this,
            children = [{
                id: 'settingslayout',
                text: t('Layout'),
                leaf: true,
                iconCls: 'icon-wallpaper'
            }],
            wallpapers = [{
                text   : me.textNone,
                iconCls: me.iconClsNone,
                leaf   : true
            }],
            panelsConfig;

        if (App.user.mmagnus == 1) {
            me.themes =  [{
                text: t('Yellow'),
                css: 'yellow-classic',
                iconCls: 'icon-yellow'
            }, {
                text: t('Blue'),
                css: 'blue-classic',
                iconCls: 'icon-blue'
            }, {
                text: t('Gray'),
                css: 'gray-classic',
                iconCls: 'icon-gray'
            }, {
                text: t('Orange'),
                css: 'orange-classic',
                iconCls: 'icon-orange'
            }, {
                text: t('Purple'),
                css: 'purple-classic',
                iconCls: 'icon-purple'
            }, {
                text: t('Green'),
                css: 'green-classic',
                iconCls: 'icon-green'
            }, {
                text: t('Red'),
                css: 'red-classic',
                iconCls: 'icon-red'
            }];            
        };

        if (App.user.mmagnus != 3) {
            me.layouts = [{
                text   : t('Standard'),
                type   : 'standard',
                iconCls: 'icon-wallpaper'
            }]
        };

        if(window.isDesktop) {
            me.selectedWallpaper = App.desktop.getWallpaper();
            me.stretchWallpaper = App.desktop.wallpaper.stretch;
            me.previewWallpaper = Ext.widget('wallpaper');
            me.previewWallpaper.setWallpaper(me.selectedWallpaper);
        }

        me.userLayout = (localStorage && localStorage.getItem('layout')) || me.defaultLayout;
        me.userTheme = window.theme;

        Ext.each(me.layouts, function(layout) {
            if(layout.type === me.userLayout) {
                me.textUserLayout = layout.text;
            }
            
            layout.leaf = true;
        });

        Ext.each(me.themes, function(theme) {
            if(theme.css === me.userTheme) {
                me.textUserTheme = theme.text;
            }
            
            theme.leaf = true;
        });

        Ext.each(me.wallpapers, function(img){
            wallpapers.push({
                iconCls: img.iconCls,
                img    : img.src, 
                text   : img.text, 
                leaf   : true 
            });
        });

        window.isDesktop && children.push({
            id     : 'settingswallpaper',
            text   : t('Wallpaper'),
            leaf   : true,
            iconCls: 'icon-wallpaper'
        });

        panelsConfig = [{
            reference: 'settingslayout',
            items: [{
                xtype: 'treepanel',
                border     : false,
                title      : me.titleMenuLayout,
                rootVisible: false,
                lines      : false,
                autoScroll : true,
                width      : !Ext.Boot.platformTags.desktop ? 200 : 150,
                region     : 'west',
                split      : true,
                minWidth   : 100,
                listeners  : {
                    afterlayout: 'selectInitLayout',
                    select: 'onSelectLayout'
                },
                root       : {
                    expanded: true,
                    children: me.layouts
                }
            },{
                border: false,
                region: 'center',
                title : me.titlePreview,
                layout: 'fit',
                items : {
                    xtype: 'image',
                    reference: 'imageLayout'
                }
            }],
            bbar: [{
                xtype     : 'radiogroup',
                flex: 2,
                fieldLabel: t('Icons Color'),
                items     : [
                    {boxLabel: t('White'), name: 'color', inputValue: 'White', checked: window.colorMenu == 'White'},
                    {boxLabel: t('Black'), name: 'color', inputValue: 'Black', checked: window.colorMenu == 'Black'}
                ],
                listeners  : {
                    change: 'onChangeMenuColor'
                }
            },'->', {
                text   : me.textApply,
                glyph  : me.iconApply,
                handler: 'savePreferenceLayout'
            }]
        },{
            reference: 'settingstheme',
            items: [{
                xtype: 'treepanel',
                border     : false,
                title      : me.titleMenuTheme,
                rootVisible: false,
                lines      : false,
                autoScroll : true,
                width      : !Ext.Boot.platformTags.desktop ? 200 : 150,
                region     : 'west',
                split      : true,
                minWidth   : 100,
                listeners  : {
                    afterlayout: 'selectInitTheme',
                    select     : 'onSelectTheme'
                },
                root       : {
                    expanded: true,
                    children: me.themes
                }
            },{
                border: false,
                region: 'center',
                title : me.titlePreview,
                layout: 'fit',
                items : {
                    xtype: 'image',
                    reference: 'imageTheme'
                }
            }],
            bbar: ['->', {
                text   : me.textApply,
                glyph  : me.iconApply,
                handler: 'savePreferenceTheme'
            }]
        }];

        window.isDesktop && panelsConfig.push({
            reference: 'settingswallpaper',
            items: [{
                xtype: 'treepanel',
                reference  : 'treeWallpaper',
                border     : false,
                title      : me.titleMenuWallpaper,
                rootVisible: false,
                lines      : false,
                autoScroll : true,
                width      : !Ext.Boot.platformTags.desktop ? 200 : 150,
                region     : 'west',
                split      : true,
                minWidth   : 100,
                listeners  : {
                    afterrender: {
                        fn: 'selectInitWallpaper',
                        delay: 100
                    },
                    select: 'onSelectWallpaper'
                },
                store: Ext.create('Ext.data.TreeStore', {
                    fields: [
                        'img'
                    ],
                    root : {
                        text    : 'Wallpaper',
                        expanded: true,
                        children: wallpapers
                    }
                })
            },{
                border: false,
                region: 'center',
                title : me.titlePreview,
                layout: 'fit',
                items : [me.previewWallpaper]
            }],
            bbar: [{
                xtype    : 'checkbox',
                checked  : me.stretchWallpaper,
                listeners: {
                    change: 'onChangeStretchWallpaper'
                }
            }, me.labelCheckFit, '->', {
                text   : me.textApply,
                glyph  : me.iconApply,
                handler: 'applyWallpaper'
            }]
        });

        me.items = [{
            region     : 'west',
            width      : 220,
            border     : true,
            layout     : 'accordion',
            defaultType: 'treepanel',
            defaults   : {
                border     : false,
                rootVisible: false,
                lines      : false
            },
            items: [{
                title: t('Preferences'),
                glyph: icons.wrench,
                listeners: {
                    afterrender: 'setDefaultMenuPreference',
                    selectionchange: 'callConfiguration'
                },
                root: {
                    children: children
                }
            }]
        },{
            region: 'center',
            reference: 'settingsPanel',
            layout: 'card',
            defaults: {
                border: !window.isThemeClassic,
                layout: 'border'
            },
            items: panelsConfig
        }];

        me.callParent(arguments);
    }
});
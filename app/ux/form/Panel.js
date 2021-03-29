/**
 * Class to creation of forms
 *
 * Adilson L. Magnus <info@magnusbilling.com>
 * 14/07/2014
 */
Ext.define('Ext.ux.form.Panel', {
    extend: 'Ext.form.Panel',
    requires: ['Ext.form.field.Date', 'Ext.form.field.Checkbox', 'Ext.form.field.Number', 'Ext.form.field.Date', 'Ext.form.field.Time', 'Ext.form.field.Tag', 'Ext.ux.form.field.DateTime', 'Ext.ux.form.field.Float', 'Ext.ux.form.field.Money'],
    bodyPadding: 5,
    autoScroll: true,
    border: false,
    allowCreate: true,
    allowUpdate: true,
    defaultType: 'textfield',
    layout: 'anchor',
    idRecord: 0,
    textNew: t('New'),
    glyphNew: icons.file,
    textSave: t('Save'),
    glyphSave: icons.disk,
    textCancel: t('Cancel'),
    glyphCancel: icons.stop,
    alignButtonsBottom: '->',
    defaults: {
        plugins: 'markallowblank',
        allowBlank: false,
        anchor: '100%',
        enableKeyEvents: true
    },
    buttonsTbar: [],
    labelWidthFields: 100,
    labelAlignFields: 'right',
    header: window.isTablet || window.isTablets ? false : '',
    initComponent: function() {
        var me = this;
        var formName = me.xtype.slice(0, -4);
        if (me.items) {
            if (me.items[0].xtype == 'tabpanel') {
                me.items[0].items.forEach(function(tab) {
                    tab.items.forEach(function(field) {
                        if (field.xtype == 'fieldcontainer') {
                            field.items.forEach(function(field) {
                                var helpString = h(formName + '.' + field.name);
                                if (helpString.length > 10) field.fieldLabel = field.fieldLabel + ' ' + helpString
                            });
                        } else if (field.xtype == 'fieldset') {
                            field.items.forEach(function(field) {
                                var helpString = h(formName + '.' + field.name);
                                if (helpString.length > 10) field.fieldLabel = field.fieldLabel + ' ' + helpString
                            });
                        } else {
                            var helpString = h(formName + '.' + field.name);
                            if (helpString.length > 10) field.fieldLabel = field.fieldLabel + ' ' + helpString
                        }
                    });
                });
            } else {
                for (var i in me.items) {
                    if (me.items[i].xtype == 'fieldset') {
                        me.items[i].items.forEach(function(field) {
                            var helpString = h(formName + '.' + field.name);
                            if (helpString.length > 10) field.fieldLabel = field.fieldLabel + ' ' + helpString
                        });
                    } else {
                        var helpString = h(formName + '.' + me.items[i].name);
                        if (helpString.length > 10) me.items[i].fieldLabel = me.items[i].fieldLabel + ' ' + helpString
                    }
                }
            }
        }
        Ext.applyIf(me.defaults, {
            anchor: '0',
            enableKeyEvents: true,
            labelAlign: me.labelAlignFields,
            labelWidth: me.labelWidthFields,
            msgTarget: 'side',
            plugins: 'markallowblank',
            allowBlank: false
        });
        me.dockedItems = [];
        itemsTbar = me.buttonsTbar.length ? me.buttonsTbar : [{
            xtype: 'tbtext'
        }, me.alignButtonsBottom, {
            reference: 'save',
            text: me.textSave,
            glyph: me.glyphSave,
            handler: 'onSave'
        }, {
            text: me.textCancel,
            glyph: me.glyphCancel,
            handler: 'onCancel'
        }];
        if (me.extraButtons && me.extraButtons.length) {
            itemsTbar = Ext.Array.merge(me.extraButtons, itemsTbar);
        };
        me.hideTbar = Ext.isDefined(me.hideTbar) ? me.hideTbar : !me.allowCreate;
        me.hideBbar = !me.allowCreate && !me.allowUpdate;
        me.dockedItems = [{
            xtype: 'toolbar',
            hidden: me.hideBbar,
            dock: 'bottom',
            items: itemsTbar
        }];
        me.callParent(arguments);
    }
});
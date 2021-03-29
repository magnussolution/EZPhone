/**
 * Class to window about
 *
 * Adilson Magnus <info@magnussolution.com>
 * 12/12/2012
 */

Ext.define('CallCenter.view.main.ImportLogo', {
	extend	 : 'Ext.window.Window',
	alias	 : 'widget.importlogo',
	title	 : t('Import Logo'),
	controller: 'main',
	resizable: false,
	autoShow : true,
	width	 : 400,
	height: !Ext.Boot.platformTags.desktop ? 205 : window.isThemeNeptune ? 165 : window.isThemeCrisp ? 160 : 145,
	titleWarning: t('Warning'),
	titleError: t('Error'),
	titleSuccess: t('Success'),
	titleConfirmation: t('Confirmation'),
	msgFormInvalid: t('Fill in the fields correctly.'),

	items: {
   		xtype: 'form',
   		reference: 'formImportLogo',
   		border: false,
   		layout: 'anchor',
   		bodyPadding: 5,
   		defaults: {
   			enableKeyEvents: true,
            	msgTarget: 'side'
   		},
   		items: [{
   			xtype		: 'uploadfield',
	    		fieldLabel	: t('Select file'),
			emptyText		: window.isDesktop ? 'Only JPG format' : 'Only PNG format',
			allowBlank	: false,
			name			: 'logo',
			extAllowed	: window.isDesktop ? ['jpg'] : ['png'],
			anchor   : '0'
   		}]
   	},
   	bbar: ['->', {
   		text: t('Save'),
   		reference: 'saveImportLogo',
    		glyph  : icons.disk,
    		handler: 'saveLogo'
    }]
});
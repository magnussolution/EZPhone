/**
 * Class to change password
 *
 * Adilson Magnus <info@magnussolution.com>
 * 02/01/2014
 */
 
Ext.define('CallCenter.view.main.ChangePassword', {
    extend	 : 'Ext.window.Window',
    alias	 : 'widget.changepassword',
    controller: 'changepassword',
    title	 : t('Change Password'),
    resizable: false,
    autoShow : true,
    width	 : 400,
    height: !Ext.Boot.platformTags.desktop ? 205 : window.isThemeNeptune ? 165 : window.isThemeCrisp ? 160 : 145,
    titleWarning: t('Warning'),
    titleError: t('Error'),
    titleSuccess: t('Success'),
    titleConfirmation: t('Confirmation'),
    msgFormInvalid: t('Fill in the fields correctly.'),
    listeners: {
      scope: 'controller',
    	show: 'onShowWinChangePass'
    },
	items: {
   		xtype: 'form',
   		reference: 'formChangePass',
   		border: false,
   		layout: 'anchor',
   		bodyPadding: 5,
   		defaults: {
   			enableKeyEvents: true,
   			allowBlank: false,
            msgTarget: 'side',
	        listeners: {
				keyup: 'checkKeyEnterChangePass'
			}
   		},
   		items: [{
   			xtype	 : 'textfield',
   			name	 : 'current_password',
            maxLength: 100,
            inputType: 'password',
            hideLabel: true,
            emptyText: t('Current Password'),
            anchor   : '0'
        },{
   			xtype: 'passwordfield',
   			allowChange: false,
   			styleFields: {},
   			fieldLabel: t('New Password')
   		}]
   	},
   	bbar: ['->', {
   		text: t('Save'),
   		reference: 'saveChangePass',
    	glyph  : icons.disk,
    	handler: 'savePassword'
    }]
});
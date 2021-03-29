/**
 * Classe que define a combo "TypePayment"
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
 * 12/09/2012
 */

Ext.define('CallCenter.view.general.TypePaymentCombo', {
    extend	  : 'Ext.form.field.ComboBox',
    alias	  : 'widget.typepaymentcombo',
    fieldLabel: t('typepaid'),
    value     : 0,
    store	  : [
    	[0, t('prepaid')],
    	[1, t('pospaid')]
    ]
});


Ext.define('CallCenter.view.general.PaymentMethodsCombo', {
    extend		: 'Ext.form.field.ComboBox',
    alias		: 'widget.paymentmethodscombo',
    fieldLabel	: t('typepaid'),
    displayField: 'name',
    valueField	: 'id',
    value		: 'Moip',
    store		: {
		fields: ['id', 'name'],
	    data  : [
			{id: 'BoletoBancario', name: 'BoletoBancario', showFields: ['payment_method','show_name', 'id_user', 'country', 'active',  'boleto_convenio', 'boleto_banco', 'boleto_agencia', 'boleto_conta_corrente', 'boleto_inicio_nosso_numeroa', 'boleto_carteira', 'boleto_taxa', 'boleto_instrucoes', 'boleto_nome_emp', 'boleto_end_emp', 'boleto_cidade_emp', 'boleto_estado_emp', 'boleto_cpf_emp']},
	        {id: 'CuentaDigital', name: 'CuentaDigital', showFields: ['payment_method','show_name', 'id_user','country', 'active','username', 'url']},
	        {id: 'DineroMail', name: 'DineroMail', showFields: ['payment_method','show_name', 'id_user','country', 'active','username', 'url']},
	        {id: 'Moip', name: 'Moip', showFields: ['payment_method', 'id_user','show_name', 'country','active', 'username', 'url']},
	        {id: 'Pagseguro', name: 'Pagseguro', showFields: ['payment_method','show_name', 'id_user', 'country', 'active', 'username', 'pagseguro_TOKEN']},
	        {id: 'Paypal', name: 'Paypal', showFields: ['payment_method','show_name', 'id_user', 'country', 'active', 'username', 'url']},
            {id: 'Payulatam', name: 'Payulatam', showFields: ['payment_method','show_name', 'id_user', 'country', 'active', 'username', 'url', 'pagseguro_TOKEN']}
	       
        ]
    }
});


Ext.define('CallCenter.view.general.CampaignSendCombo', {
    extend      : 'Ext.form.field.ComboBox',
    alias       : 'widget.campaignsendcombo',
    fieldLabel  : t('type'),
    displayField: 'name',
    valueField  : 'id',
    value       : 'Select',
    store       : {
        fields: ['id', 'name'],
        data  : [
            {id: 'SMS', name: 'SMS', showFields: ['type','sms_text', 'csv_path','numbers','startingdate','startingtime']},
            {id: 'CALL', name: 'CALL', showFields: ['type','audio_path','csv_path','numbers','startingdate','startingtime']}
          
        ]
    }
});


Ext.define('CallCenter.view.general.PaymentCountryCombo', {
    extend	  : 'Ext.form.field.ComboBox',
    alias	  : 'widget.paymentcountrycombo',
    fieldLabel: t('typepaid'),
    value     : 'Brasil',
    store	  : [
    	['Argentina', 'Argentina'],
    	['Brasil', 'Brasil'],
        ['Colombia', 'Colombia'],
        ['Latino America', 'Latino America'],
        ['Global', 'Global']
    ]
});

Ext.define('CallCenter.view.general.PaymentBanckCombo', {
    extend	  : 'Ext.form.field.ComboBox',
    alias	  : 'widget.paymentbanckcombo',
    fieldLabel: t('typepaid'),
    value     : '',
    store	  : [
    	['Banco do Brasil', 'Banco do Brasil'],
    	['bradesco', 'Bradesco'],
        ['Caixa Economica', 'Caixa Economica'],
        ['hsbc', 'Hsbc'],
    	['itau', 'Itau'],
        ['santander', 'Santander'],
    	['unibanco', 'Unibanco']
    ]
});
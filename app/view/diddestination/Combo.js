Ext.define('CallCenter.view.diddestination.Combo', {
    extend		: 'Ext.form.field.ComboBox',
    alias		: 'widget.didtypefullcombo',
    fieldLabel	: t('typepaid'),
    displayField: 'name',
    valueField	: 'id',
    forceSelection: true,
    editable: false,
    value		: 1,
    store		: {
		fields: ['id', 'name'],
	    data  : [
		//{id: '0', name: t('callforpstn'), showFields: ['voip_call','destination','did','activated']},
		{id: '1', name: t('Call Operator'), showFields: ['voip_call','id_user','did','activated', 'priority']},
		{id: '2', name: t('URA'), showFields: ['voip_call','did', 'id_ivr','activated']},
		//{id: '5', name: t('CID Callback'), showFields: ['voip_call','did', 'id_user','activated']},
		{id: '6', name: t('0800 Callback'), showFields: ['voip_call','did', 'id_campaign','activated']},
		{id: '7', name: t('Campaign'), showFields: ['voip_call','did', 'id_campaign', 'activated']},
		//{id: '8', name: t('Call Group'), showFields: ['voip_call','destination','did', 'activated']},
        {id: '9', name: t('Custom'), showFields: ['voip_call','destination','did','activated']}    
        ]

    }
});

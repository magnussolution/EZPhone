/**
 * Classe que define a combo "boolean"
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
 * 10/07/2012
 */

Ext.define('CallCenter.view.general.BooleanCombo', {
    extend	  : 'Ext.form.field.ComboBox',
    alias	  : 'widget.booleancombo',
    fieldLabel: t('status'),
    forceSelection: true,
    editable: false,
    value	  : 1,
    store	  : [
        [1, t('active')],
        [0, t('inactive')]
    ]
});

Ext.define('CallCenter.view.general.QueueCombo', {
    extend    : 'Ext.form.field.ComboBox',
    alias     : 'widget.queuestrategycombo',
    fieldLabel: t('status'),
    value     : 'leastrecent',    
    forceSelection: true,
    editable: false,
    store     : [
        ['ringall', t('Ringall') + ' - ' + t('ring all available channels until one answers')],
        ['leastrecent', t('Leastrecent') + ' - ' + t('ring the one with fewest completed calls from this queue')],
        ['random', t('Random') + ' -'  + t('ring random interface')],
        ['rrmemory', t('Rrmemory') + ' - ' + t('round robin with memory, remember where we left off last ring pass')]
    ]
});

Ext.define('CallCenter.view.general.FieldtypeCombo', {
    extend    : 'Ext.form.field.ComboBox',
    alias     : 'widget.fieldtypescombo',
    forceSelection: true,
    editable: false,
    value     : 'text',
    store     : [
        ['textfield', t('text')],
        ['numberfield', t('numeric')],
        //['combo', t('combo')],
        ['yesnocombo', t('boolean')],
        ['checkbox', t('checkbox')],
        ['datetimefield', t('datetimefield')]

    ]
});

Ext.define('CallCenter.view.general.TypeDestination', {
    extend    : 'Ext.form.field.ComboBox',
    alias     : 'widget.typedestinationcombo',
    fieldLabel: t('type'),
    forceSelection: true,
    editable: false,
    value     : 1,
    store     : [
    ['', t('')],
    ['undefined', t('Undefined')],
    ['user', t('Operador')],
    ['ivr', t('IVR')],
    ['campaign', t('Campaign')],
    //['group', t('Group')],
    //['number', t('Number')],
    ['repeat', t('Repeat IVR')],
    ['hangup', t('Hangup')],
    ['custom', t('Custom')]
    ]
});

Ext.define('CallCenter.view.general.PauseTypeCombo', {
    extend    : 'Ext.form.field.ComboBox',
    alias     : 'widget.pausetypecombo',
    fieldLabel: t('type'),
    forceSelection: true,
    editable: false,
    value     : 1,
    store     : [
        [1, t('Almoço')],
        [2, t('Descanço')],
        [3, t('Banheiro')],
        [4, t('Fumar')]
    ]
});

Ext.define('CallCenter.view.general.DateBackCallCombo', {
    extend    : 'Ext.form.field.ComboBox',
    alias     : 'widget.typedatebackcall',
    fieldLabel: t('type'),
    forceSelection: true,
    editable: false,
    value     : 1,
    store     : [
        [1, t('For me')],
        [0, t('Anyone')],
        [2, t('For operator')]
    ]
});



Ext.define('CallCenter.view.general.TurnoCombo', {
    extend    : 'Ext.form.field.ComboBox',
    alias     : 'widget.turnocombo',
    fieldLabel: t('Turno'),
    forceSelection: true,
    editable: false,
    value     : 'M',
    store     : [
        ['M', t('Morning')],
        ['T', t('Afternoon')]
    ]
});

Ext.define('CallCenter.view.general.OperadoraCombo', {
    extend    : 'Ext.form.field.ComboBox',
    alias     : 'widget.operadoracombo',
    fieldLabel: t('Operadora'),
    forceSelection: true,
    editable: false,
    value     : 1,
    store     : [
        [1, t('TIM')],
        [2, t('CLARO')],
        [3, t('VIVO')],
        [4, t('OI')],
        [5, t('NEXTEL')]
    ]
});

Ext.define('CallCenter.view.general.Operadora2Combo', {
    extend    : 'Ext.form.field.ComboBox',
    alias     : 'widget.operadora2combo',
    fieldLabel: t('Operadora'),
    forceSelection: true,
    editable: false,
    value     : 1,
    store     : [
        [0, t('Indefinido')],
        [1, t('TIM')],
        [2, t('CLARO')],
        [3, t('VIVO')],
        [4, t('OI')],
        [5, t('NEXTEL')]
    ]
});

Ext.define('CallCenter.view.general.StatusCombo', {
    extend    : 'Ext.form.field.ComboBox',
    alias     : 'widget.statuscombo',
    forceSelection: true,
    editable: false,
    fieldLabel: t('status'),
    value     : 1,
    store     : [
        [1, t('active')],
        [0, t('inactive')],
        [2, t('pending')],
        [3, t('send')],
        [4, t('blocked')]
    ]
});

Ext.define('CallCenter.view.general.TypeNoYes', {
    extend	  : 'Ext.form.field.ComboBox',
    alias	  : 'widget.noyescombo',
    forceSelection: true,
    editable: false,
    fieldLabel: t('typepaid'),
    value     : 0,
    store	  : [
    	[0, t('no')],
    	[1, t('yes')]
    ]
});

Ext.define('CallCenter.view.general.TypeYesNo', {
    extend	  : 'Ext.form.field.ComboBox',
    alias	  : 'widget.yesnocombo',
    fieldLabel: t('typepaid'),
    forceSelection: true,
    editable: false,
    value     : 1,
    store	  : [
    	[0, t('no')],
    	[1, t('yes')]
    ]
});

Ext.define('CallCenter.view.general.TypeYesNoString', {
    extend    : 'Ext.form.field.ComboBox',
    alias     : 'widget.yesnostringcombo',
    fieldLabel: t('typepaid'),
    forceSelection: true,
    editable: false,
    value     : 'yes',
    store     : [
        ['no', t('no')],
        ['yes', t('yes')]
    ]
});

Ext.define('CallCenter.view.general.TypeNoYesString', {
    extend    : 'Ext.form.field.ComboBox',
    alias     : 'widget.noyesstringcombo',
    forceSelection: true,
    editable: false,
    fieldLabel: t('typepaid'),
    value     : 'no',
    store     : [
        ['no', t('no')],
        ['yes', t('yes')]
    ]
});


Ext.define('CallCenter.view.general.Typenumber', {
    extend    : 'Ext.form.field.ComboBox',
    alias     : 'widget.numbercombo',
    fieldLabel: t('typenumber'),
    forceSelection: true,
    editable: false,
    value     : 1,
    store     : [
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 4],
        [5, 5]
    ]
});

Ext.define('CallCenter.view.general.Typelanguage', {
    extend    : 'Ext.form.field.ComboBox',
    alias     : 'widget.languagecombo',
    fieldLabel: t('language'),
    forceSelection: true,
    editable: false,
    value     : 'en',
    store     : [
        ['br', t('portuguese')],
        ['es', t('spanish')],
        ['en', t('english')]
    ]
});

Ext.define('CallCenter.view.general.TypeCampaign', {
    extend    : 'Ext.form.field.ComboBox',
    alias     : 'widget.campaigntypecombo',
    forceSelection: true,
    editable: false,
    fieldLabel: t('type'),
    value     : 1,
    store     : [
    [1, t('voice')],
    [0, t('sms')]
    ]
});


Ext.define('CallCenter.view.general.TypeBoleto', {
    extend    : 'Ext.form.field.ComboBox',
    forceSelection: true,
    editable: false,
    alias     : 'widget.boletocombo',
    fieldLabel: t('status'),
    value     : 'D',
    store     : [
            ['D', t('no')],
            ['P', t('yes')]
    ]
});

Ext.define('CallCenter.view.general.TypePoll', {
    extend    : 'Ext.form.field.ComboBox',
    alias     : 'widget.typepollcombo',
    fieldLabel: t('Type'),
    value     : 'Text',
    forceSelection: true,
    editable: false,
    store     : [
            ['Text', t('Text')],
            ['radio', t('Radio')],
            ['checkbox', t('Checkbox')],
            ['description', t('Description')]

    ]
});

Ext.define('CallCenter.view.general.RestrictionCombo', {
    extend    : 'Ext.form.field.ComboBox',
    alias     : 'widget.restrictioncombo',
    fieldLabel: t('status'),
    forceSelection: true,
    editable: false,
    value     : 0,
    store     : [
        [0, t('inactive')],
        [1, t('cantCallRestrictedNumbers')],
        [2, t('canOnlyCallRestrictedNumbers')]
    ]
});

Ext.define('CallCenter.view.general.CountryCombo', {
    extend    : 'Ext.form.field.ComboBox',
    alias     : 'widget.countrycombo',
    forceSelection: true,
    editable: false,
    fieldLabel: t('Country'),
    value     : '',
    store     : [
        ['93',t('Afghanistan')],
        ['355',t('Albania')],
        ['213',t('Algeria')],
        ['684',t('American Samoa')],
        ['376',t('Andorra')],
        ['244',t('Angola')],
        ['1264',t('Anguilla')],
        ['672',t('Antarctica')],
        ['1268',t('Antigua And Barbuda')],
        ['54',t('Argentina')],
        ['374',t('Armenia')],
        ['297',t('Aruba')],
        ['61',t('Australia')],
        ['43',t('Austria')],
        ['994',t('Azerbaijan')],
        ['1242',t('Bahamas')],
        ['973',t('Bahrain')],
        ['880',t('Bangladesh')],
        ['1246',t('Barbados')],
        ['375',t('Belarus')],
        ['32',t('Belgium')],
        ['501',t('Belize')],
        ['229',t('Benin')],
        ['1441',t('Bermuda')],
        ['975',t('Bhutan')],
        ['591',t('Bolivia')],
        ['387',t('Bosnia And Herzegovina')],
        ['267',t('Botswana')],
        ['55',t('Brazil')],
        ['1284',t('British Indian Ocean Territory')],
        ['673',t('Brunei Darussalam')],
        ['359',t('Bulgaria')],
        ['226',t('Burkina Faso')],
        ['257',t('Burundi')],
        ['855',t('Cambodia')],
        ['237',t('Cameroon')],
        ['1',t('Canada')],
        ['238',t('Cape Verde')],
        ['1345',t('Cayman Islands')],
        ['236',t('Central African Republic')],
        ['235',t('Chad')],
        ['56',t('Chile')],
        ['86',t('China')],
        ['618',t('Christmas Island')],
        ['61',t('Cocos (Keeling); Islands')],
        ['57',t('Colombia')],
        ['269',t('Comoros')],
        ['242',t('Congo')],
        ['243',t('Congo, The Democratic Republic Of The')],
        ['682',t('Cook Islands')],
        ['506',t('Costa Rica')],
        ['385',t('Croatia')],
        ['53',t('Cuba')],
        ['357',t('Cyprus')],
        ['420',t('Czech Republic')],
        ['45',t('Denmark')],
        ['253',t('Djibouti')],
        ['1767',t('Dominica')],
        ['1809',t('Dominican Republic')],
        ['593',t('Ecuador')],
        ['20',t('Egypt')],
        ['503',t('El Salvador')],
        ['240',t('Equatorial Guinea')],
        ['291',t('Eritrea')],
        ['372',t('Estonia')],
        ['251',t('Ethiopia')],
        ['500',t('Falkland Islands (Malvinas)')],
        ['298',t('Faroe Islands')],
        ['679',t('Fiji')],
        ['358',t('Finland')],
        ['33',t('France')],
        ['596',t('French Guiana')],
        ['594',t('French Polynesia')],
        ['689',t('French Southern Territories')],
        ['241',t('Gabon')],
        ['220',t('Gambia')],
        ['995',t('Georgia')],
        ['49',t('Germany')],
        ['233',t('Ghana')],
        ['350',t('Gibraltar')],
        ['30',t('Greece')],
        ['299',t('Greenland')],
        ['1473',t('Grenada')],
        ['590',t('Guadeloupe')],
        ['1671',t('Guam')],
        ['502',t('Guatemala')],
        ['224',t('Guinea')],
        ['245',t('Guinea-Bissau')],
        ['592',t('Guyana')],
        ['509',t('Haiti')],
        ['504',t('Honduras')],
        ['852',t('Hong Kong')],
        ['36',t('Hungary')],
        ['354',t('Iceland')],
        ['91',t('India')],
        ['62',t('Indonesia')],
        ['98',t('Iran, Islamic Republic Of')],
        ['964',t('Iraq')],
        ['353',t('Ireland')],
        ['972',t('Israel')],
        ['39',t('Italy')],
        ['1876',t('Jamaica')],
        ['81',t('Japan')],
        ['962',t('Jordan')],
        ['7',t('Kazakhstan')],
        ['254',t('Kenya')],
        ['686',t('Kiribati')],
        ['850',t('Korea, Democratic Peoples Republic Of')],
        ['82',t('Korea, Republic of')],
        ['965',t('Kuwait')],
        ['996',t('Kyrgyzstan')],
        ['856',t('Lao Peoples Democratic Republic')],
        ['371',t('Latvia')],
        ['961',t('Lebanon')],
        ['266',t('Lesotho')],
        ['231',t('Liberia')],
        ['218',t('Libyan Arab Jamahiriya')],
        ['423',t('Liechtenstein')],
        ['370',t('Lithuania')],
        ['352',t('Luxembourg')],
        ['853',t('Macao')],
        ['389',t('Macedonia, The Former Yugoslav Republic Of')],
        ['261',t('Madagascar')],
        ['265',t('Malawi')],
        ['60',t('Malaysia')],
        ['960',t('Maldives')],
        ['223',t('Mali')],
        ['356',t('Malta')],
        ['692',t('Marshall islands')],
        ['596',t('Martinique')],
        ['222',t('Mauritania')],
        ['230',t('Mauritius')],
        ['269',t('Mayotte')],
        ['52',t('Mexico')],
        ['691',t('Micronesia, Federated States Of')],
        ['1808',t('Moldova, Republic Of')],
        ['377',t('Monaco')],
        ['976',t('Mongolia')],
        ['1664',t('Montserrat')],
        ['212',t('Morocco')],
        ['258',t('Mozambique')],
        ['95',t('Myanmar')],
        ['264',t('Namibia')],
        ['674',t('Nauru')],
        ['977',t('Nepal')],
        ['31',t('Netherlands')],
        ['599',t('Netherlands Antilles')],
        ['687',t('New Caledonia')],
        ['64',t('New Zealand')],
        ['505',t('Nicaragua')],
        ['227',t('Niger')],
        ['234',t('Nigeria')],
        ['683',t('Niue')],
        ['672',t('Norfolk Island')],
        ['1670',t('Northern Mariana Islands')],
        ['47',t('Norway')],
        ['968',t('Oman')],
        ['92',t('Pakistan')],
        ['680',t('Palau')],
        ['970',t('Palestinian Territory, Occupied')],
        ['507',t('Panama')],
        ['675',t('Papua New Guinea')],
        ['595',t('Paraguay')],
        ['51',t('Peru')],
        ['63',t('Philippines')],
        ['48',t('Poland')],
        ['351',t('Portugal')],
        ['1787',t('Puerto Rico')],
        ['974',t('Qatar')],
        ['262',t('Reunion')],
        ['40',t('Romania')],
        ['7',t('Russian Federation')],
        ['250',t('Rwanda')],
        ['290',t('SaINT Helena')],
        ['1869',t('SaINT Kitts And Nevis')],
        ['1758',t('SaINT Lucia')],
        ['508',t('SaINT Pierre And Miquelon')],
        ['1784',t('SaINT Vincent And The Grenadines')],
        ['685',t('Samoa')],
        ['378',t('San Marino')],
        ['239',t('SÃ£o TomÃ© And Principe')],
        ['966',t('Saudi Arabia')],
        ['221',t('Senegal')],
        ['248',t('Seychelles')],
        ['232',t('Sierra Leone')],
        ['65',t('Singapore')],
        ['421',t('Slovakia')],
        ['386',t('Slovenia')],
        ['677',t('Solomon Islands')],
        ['252',t('Somalia')],
        ['27',t('South Africa')],
        ['34',t('Spain')],
        ['94',t('Sri Lanka')],
        ['249',t('Sudan')],
        ['597',t('Suriname')],
        ['268',t('Swaziland')],
        ['46',t('Sweden')],
        ['41',t('Switzerland')],
        ['963',t('Syrian Arab Republic')],
        ['886',t('Taiwan, Province Of China')],
        ['992',t('Tajikistan')],
        ['255',t('Tanzania, United Republic Of')],
        ['66',t('Thailand')],
        ['670',t('Timor-Leste')],
        ['228',t('Togo')],
        ['690',t('Tokelau')],
        ['676',t('Tonga')],
        ['1868',t('Trinidad And Tobago')],
        ['216',t('Tunisia')],
        ['90',t('Turkey')],
        ['993',t('Turkmenistan')],
        ['1649',t('Turks And Caicos Islands')],
        ['688',t('Tuvalu')],
        ['256',t('Uganda')],
        ['380',t('Ukraine')],
        ['971',t('United Arab Emirates')],
        ['44',t('United Kingdom')],
        ['1',t('United States')],
        ['598',t('Uruguay')],
        ['998',t('Uzbekistan')],
        ['678',t('Vanuatu')],
        ['58',t('Venezuela')],
        ['84',t('Vietnam')],
        ['1284',t('Virgin Islands, British')],
        ['808',t('Virgin Islands, U.S.')],
        ['681',t('Wallis And Futuna')],
        ['967',t('Yemen')],
        ['260',t('Zambia')],
        ['263',t('Zimbabwe')],
        ['35818',t('Aland Islands')],
        ['441481',t('Guernsey')],
        ['441624',t('Isle of Man')],
        ['441534',t('Jersey')],
        ['382',t('Montenegro, Republic of')],
        ['381',t('Serbia, Republic of')]
    ]
});
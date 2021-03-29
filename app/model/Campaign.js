/**
 * Classe que define a model "CcCampaign"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 28/10/2012
 */
Ext.define('CallCenter.model.Campaign', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'name',
        type: 'string'
    }, {
        name: 'status',
        type: 'int'
    }, {
        name: 'call_limit',
        type: 'int'
    }, {
        name: 'call_next_try',
        type: 'int'
    }, {
        name: 'predictive',
        type: 'int'
    }, {
        name: 'monday',
        type: 'int'
    }, {
        name: 'tuesday',
        type: 'int'
    }, {
        name: 'wednesday',
        type: 'int'
    }, {
        name: 'thursday',
        type: 'int'
    }, {
        name: 'friday',
        type: 'int'
    }, {
        name: 'saturday',
        type: 'int'
    }, {
        name: 'sunday',
        type: 'int'
    }, {
        name: 'forward_number',
        type: 'string'
    }, {
        name: 'description',
        type: 'string'
    }, {
        name: 'startingdate',
        type: 'date',
        dateFormat: 'Y-m-d H:i:s'
    }, {
        name: 'expirationdate',
        type: 'date',
        dateFormat: 'Y-m-d H:i:s'
    }, {
        name: 'allow_email',
        type: 'int'
    }, {
        name: 'allow_email2',
        type: 'int'
    }, {
        name: 'allow_email3',
        type: 'int'
    }, {
        name: 'allow_city',
        type: 'int'
    }, {
        name: 'allow_neighborhood',
        type: 'int'
    }, {
        name: 'allow_address',
        type: 'int'
    }, {
        name: 'allow_state',
        type: 'int'
    }, {
        name: 'allow_country',
        type: 'int'
    }, {
        name: 'allow_dni',
        type: 'int'
    }, {
        name: 'allow_mobile',
        type: 'int'
    }, {
        name: 'allow_number_home',
        type: 'int'
    }, {
        name: 'allow_number_office',
        type: 'int'
    }, {
        name: 'allow_zip_code',
        type: 'int'
    }, {
        name: 'allow_company',
        type: 'int'
    }, {
        name: 'allow_birth_date',
        type: 'int'
    }, {
        name: 'allow_type_user',
        type: 'int'
    }, {
        name: 'allow_sexo',
        type: 'int'
    }, {
        name: 'allow_edad',
        type: 'int'
    }, {
        name: 'allow_profesion',
        type: 'int'
    }, {
        name: 'allow_mobile_2',
        type: 'int'
    }, {
        name: 'allow_option_1',
        type: 'string'
    }, {
        name: 'allow_option_2',
        type: 'string'
    }, {
        name: 'allow_option_3',
        type: 'string'
    }, {
        name: 'allow_option_4',
        type: 'string'
    }, {
        name: 'allow_option_5',
        type: 'string'
    }, {
        name: 'allow_id_phonebook',
        type: 'int'
    }, {
        name: 'allow_sessiontime',
        type: 'int'
    }, {
        name: 'allow_name',
        type: 'int'
    }, {
        name: 'allow_beneficio_number',
        type: 'int'
    }, {
        name: 'allow_quantidade_transacoes',
        type: 'int'
    }, {
        name: 'allow_inicio_beneficio',
        type: 'int'
    }, {
        name: 'allow_beneficio_valor',
        type: 'int'
    }, {
        name: 'allow_banco',
        type: 'int'
    }, {
        name: 'allow_agencia',
        type: 'int'
    }, {
        name: 'allow_conta',
        type: 'int'
    }, {
        name: 'allow_address_complement',
        type: 'string'
    }, {
        name: 'allow_beneficio_especie',
        type: 'string'
    }, {
        name: 'allow_telefone_fixo1',
        type: 'int'
    }, {
        name: 'allow_telefone_fixo2',
        type: 'int'
    }, {
        name: 'allow_telefone_fixo3',
        type: 'int'
    }, {
        name: 'allow_telefone_celular1',
        type: 'int'
    }, {
        name: 'allow_telefone_celular2',
        type: 'int'
    }, {
        name: 'allow_telefone_celular3',
        type: 'int'
    }, {
        name: 'allow_telefone_fixo_comercial1',
        type: 'int'
    }, {
        name: 'allow_telefone_fixo_comercial2',
        type: 'int'
    }, {
        name: 'allow_telefone_fixo_comercial3',
        type: 'int'
    }, {
        name: 'allow_parente1',
        type: 'int'
    }, {
        name: 'allow_fone_parente1',
        type: 'int'
    }, {
        name: 'allow_parente2',
        type: 'int'
    }, {
        name: 'allow_fone_parente2',
        type: 'int'
    }, {
        name: 'allow_parente3',
        type: 'int'
    }, {
        name: 'allow_fone_parente3',
        type: 'int'
    }, {
        name: 'allow_vizinho1',
        type: 'int'
    }, {
        name: 'allow_telefone_vizinho1',
        type: 'int'
    }, {
        name: 'allow_vizinho2',
        type: 'int'
    }, {
        name: 'allow_telefone_vizinho2',
        type: 'int'
    }, {
        name: 'allow_vizinho3',
        type: 'int'
    }, {
        name: 'allow_valor_proposta',
        type: 'int'
    }, {
        name: 'allow_valor_parcela',
        type: 'int'
    }, {
        name: 'allow_telefone_vizinho3',
        type: 'int'
    }, {
        name: 'daily_morning_start_time',
        type: 'date',
        dateFormat: 'H:i:s'
    }, {
        name: 'daily_morning_stop_time',
        type: 'date',
        dateFormat: 'H:i:s'
    }, {
        name: 'daily_afternoon_start_time',
        type: 'date',
        dateFormat: 'H:i:s'
    }, {
        name: 'daily_afternoon_stop_time',
        type: 'date',
        dateFormat: 'H:i:s'
    }, {
        name: 'allow_option_1_type',
        type: 'string'
    }, {
        name: 'allow_option_2_type',
        type: 'string'
    }, {
        name: 'allow_option_3_type',
        type: 'string'
    }, {
        name: 'allow_option_4_type',
        type: 'string'
    }, {
        name: 'allow_option_5_type',
        type: 'string'
    }, {
        name: 'allow_address_number',
        type: 'string'
    }, {
        name: 'musiconhold',
        type: 'string'
    }, {
        name: 'strategy',
        type: 'string'
    }, {
        name: 'ringinuse',
        type: 'string'
    }, {
        name: 'timeout',
        type: 'int'
    }, {
        name: 'retry',
        type: 'int'
    }, {
        name: 'wrapuptime',
        type: 'int'
    }, {
        name: 'weight',
        type: 'int'
    }, {
        name: 'periodic-announce',
        type: 'string'
    }, {
        name: 'periodic-announce-frequency',
        type: 'int'
    }, {
        name: 'announce-holdtime',
        type: 'string'
    }, {
        name: 'announce-position',
        type: 'string'
    }, {
        name: 'announce-frequency',
        type: 'int'
    }, {
        name: 'joinempty',
        type: 'string'
    }, {
        name: 'leavewhenempty',
        type: 'string'
    }, {
        name: 'eventmemberstatus',
        type: 'string'
    }, {
        name: 'autopause',
        type: 'string'
    }, {
        name: 'setqueuevar',
        type: 'string'
    }, {
        name: 'setqueueentryvar',
        type: 'string'
    }, {
        name: 'setinterfacevar',
        type: 'string'
    }, {
        name: 'open_url',
        type: 'string'
    }, {
        name: 'open_url_when_answer_call',
        type: 'string'
    }, 'audio', 'subRecords', 'id_phonebook'],
    proxy: {
        type: 'uxproxy',
        module: 'campaign'
    }
});
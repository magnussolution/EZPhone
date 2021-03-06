/**
 * Classe que define a model "PhoneNumber"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 28/10/2012
 */
Ext.define('CallCenter.model.MassiveCallReport', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'id_massive_call_phonebook',
        type: 'int'
    }, {
        name: 'number',
        type: 'string'
    }, {
        name: 'name',
        type: 'string'
    }, {
        name: 'city',
        type: 'string'
    }, {
        name: 'state',
        type: 'string'
    }, {
        name: 'email',
        type: 'string'
    }, {
        name: 'email2',
        type: 'string'
    }, {
        name: 'email3',
        type: 'string'
    }, {
        name: 'status',
        type: 'int'
    }, {
        name: 'info',
        type: 'string'
    }, {
        name: 'creationdate',
        type: 'date',
        dateFormat: 'Y-m-d H:i:s'
    }, {
        name: 'dial_date',
        type: 'date',
        dateFormat: 'Y-m-d H:i:s'
    }, {
        name: 'address',
        type: 'string'
    }, {
        name: 'zip_code',
        type: 'string'
    }, {
        name: 'country',
        type: 'string'
    }, {
        name: 'dni',
        type: 'string'
    }, {
        name: 'mobile',
        type: 'string'
    }, {
        name: 'mobile_2',
        type: 'string'
    }, {
        name: 'number_home',
        type: 'string'
    }, {
        name: 'number_office',
        type: 'string'
    }, {
        name: 'type_user',
        type: 'string'
    }, {
        name: 'birth_date',
        type: 'date',
        dateFormat: 'Y-m-d'
    }, {
        name: 'company',
        type: 'string'
    }, {
        name: 'option_1',
        type: 'string'
    }, {
        name: 'option_2',
        type: 'string'
    }, {
        name: 'option_3',
        type: 'string'
    }, {
        name: 'option_4',
        type: 'string'
    }, {
        name: 'option_5',
        type: 'string'
    }, {
        name: 'edad',
        type: 'int'
    }, {
        name: 'profesion',
        type: 'string'
    }, {
        name: 'sexo',
        type: 'string'
    }, 'idMassiveCallPhonebookname', {
        name: 'beneficio_number',
        type: 'string'
    }, {
        name: 'quantidade_transacoes',
        type: 'string'
    }, {
        name: 'inicio_beneficio',
        type: 'string'
    }, {
        name: 'beneficio_valor',
        type: 'string'
    }, {
        name: 'banco',
        type: 'string'
    }, {
        name: 'agencia',
        type: 'string'
    }, {
        name: 'conta',
        type: 'string'
    }, {
        name: 'address_complement',
        type: 'string'
    }, {
        name: 'telefone_fixo1',
        type: 'string'
    }, {
        name: 'telefone_fixo2',
        type: 'string'
    }, {
        name: 'telefone_fixo3',
        type: 'string'
    }, {
        name: 'telefone_celular1',
        type: 'string'
    }, {
        name: 'telefone_celular2',
        type: 'string'
    }, {
        name: 'telefone_celular3',
        type: 'string'
    }, {
        name: 'telefone_fixo_comercial1',
        type: 'string'
    }, {
        name: 'telefone_fixo_comercial2',
        type: 'string'
    }, {
        name: 'telefone_fixo_comercial3',
        type: 'string'
    }, {
        name: 'parente1',
        type: 'string'
    }, {
        name: 'fone_parente1',
        type: 'string'
    }, {
        name: 'parente2',
        type: 'string'
    }, {
        name: 'fone_parente2',
        type: 'string'
    }, {
        name: 'parente3',
        type: 'string'
    }, {
        name: 'fone_parente3',
        type: 'string'
    }, {
        name: 'vizinho1',
        type: 'string'
    }, {
        name: 'telefone_vizinho1',
        type: 'string'
    }, {
        name: 'vizinho2',
        type: 'string'
    }, {
        name: 'telefone_vizinho2',
        type: 'string'
    }, {
        name: 'vizinho3',
        type: 'string'
    }, {
        name: 'telefone_vizinho3',
        type: 'string'
    }, 'idUserusername'],
    proxy: {
        type: 'uxproxy',
        module: 'massiveCallReport'
    }
});
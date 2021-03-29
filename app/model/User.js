/**
 * Class define the model "User"
 *
 * Adilson Magnus <info@magnussolution.com> 
 * 15/04/2013
 */
Ext.define('CallCenter.model.User', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'username',
        type: 'string'
    }, 'password', {
        name: 'id_team',
        type: 'int'
    }, {
        name: 'id_group',
        type: 'int'
    }, {
        name: 'name',
        type: 'string'
    }, {
        name: 'direction',
        type: 'string'
    }, {
        name: 'zipcode',
        type: 'string'
    }, {
        name: 'state',
        type: 'string'
    }, {
        name: 'phone',
        type: 'string'
    }, {
        name: 'mobile',
        type: 'string'
    }, {
        name: 'status',
        type: 'int'
    }, {
        name: 'datecreation',
        type: 'date',
        dateFormat: 'Y-m-d h:i:s'
    }, {
        name: 'email',
        type: 'string'
    }, {
        name: 'country',
        type: 'string'
    }, {
        name: 'city',
        type: 'string'
    }, {
        name: 'company',
        type: 'string'
    }, {
        name: 'usuario_tns',
        type: 'string'
    }, {
        name: 'training',
        type: 'int'
    }, {
        name: 'conta',
        type: 'string'
    }, {
        name: 'agencia',
        type: 'string'
    }, {
        name: 'banck',
        type: 'string'
    }, {
        name: 'salary',
        type: 'string'
    }, {
        name: 'cargo',
        type: 'string'
    }, {
        name: 'stoptcontract',
        type: 'date',
        dateFormat: 'Y-m-d h:i:s'
    }, {
        name: 'startcontract',
        type: 'date',
        dateFormat: 'Y-m-d h:i:s'
    }, {
        name: 'worktime',
        type: 'string'
    }, {
        name: 'estadocivil',
        type: 'string'
    }, {
        name: 'escolaridade',
        type: 'string'
    }, {
        name: 'fathername',
        type: 'string'
    }, {
        name: 'mothername',
        type: 'string'
    }, {
        name: 'dni',
        type: 'string'
    }, {
        name: 'cpf',
        type: 'string'
    }, {
        name: 'birthday',
        type: 'date',
        dateFormat: 'Y-m-d H:i:s'
    }, {
        name: 'hometown',
        type: 'string'
    }, {
        name: 'webphone',
        type: 'int'
    }, 'idGroupname', 'idGroupid_user_type', 'subRecords', 'id_campaign'],
    proxy: {
        type: 'uxproxy',
        module: 'user'
    }
});
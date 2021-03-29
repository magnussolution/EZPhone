/**
 * Classe que define a model "Cdr"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 17/08/2012
 */

Ext.define('CallCenter.model.Pools', {
	extend    : 'Ext.data.Model',
	fields    : [
		{name: 'id', type: 'int'},
		{name: 'question', type: 'string'},
		{name: 'type', type: 'string'},
		{name: 'answer_0', type: 'string'},
		{name: 'id_polls_0', type: 'int'},
		{name: 'answer_1', type: 'string'},
		{name: 'id_polls_1', type: 'int'},
		{name: 'answer_2', type: 'string'},
		{name: 'id_polls_2', type: 'int'},
		{name: 'answer_3', type: 'string'},
		{name: 'id_polls_3', type: 'int'},
		{name: 'answer_4', type: 'string'},
		{name: 'id_polls_4', type: 'int'},
		{name: 'answer_5', type: 'string'},
		{name: 'id_polls_5', type: 'int'},
		{name: 'answer_6', type: 'string'},
		{name: 'id_polls_6', type: 'int'},
		{name: 'answer_7', type: 'string'},
		{name: 'id_polls_7', type: 'int'},
		{name: 'answer_8', type: 'string'},
		{name: 'id_polls_8', type: 'int'},
		{name: 'answer_9', type: 'string'},
		{name: 'id_polls_9', type: 'int'}
	],
	proxy	: {
		type  : 'uxproxy',
		module: 'pools'
	}
});
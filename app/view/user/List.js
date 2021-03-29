/**
 * Class to define list of "User"
 *
 * Adilson Magnus <info@magnussolution.com> 
 * 15/04/2013 */

Ext.define('CallCenter.view.user.List', {
    extend: 'Ext.ux.grid.Panel',
    alias : 'widget.userlist',
    store : 'User',
    fieldSearch : 'username',
	initComponent: function() {
		var me = this;

		me.buttonUpdateLot = App.user.updateAll;

		me.columns = me.columns || [{
			header	   : t('username'),
			dataIndex    : 'username',
            	flex         : 2
		},{
			header	   : t('name'),
			dataIndex    : 'name',
            	flex         : 3
		},{
			xtype 	   : 'templatecolumn',
			tpl 		   : '{idGroupname}',
			header	   : t('group'),
			dataIndex	   : 'id_group',
			comboFilter  : 'groupusercombo',
            	flex         : 2,
	    		hidden	   : App.user.isOperator,
	    		hideable 	   : !App.user.isOperator
		},{
			header	   : t('status'),
			dataIndex	   : 'status',
			renderer	   : Helper.Util.formatBooleanActive,
            	flex         : 1,
            	filter	   : {
			type         : 'list',
			options 	   : [
					    	[1, t('active')],
					    	[0, t('inactive')]
				        ]
			},
	    		hidden	   : App.user.isOperator,
	    		hideable 	   : !App.user.isOperator
		},{
			header	   : t('city'),
			dataIndex    : 'city',
           	hidden       : true,
	    		hideable 	   : !App.user.isOperator,
			flex         : 1
        	},{
			header	    : t('state'),
			dataIndex    : 'state',
            	hidden       : true,
			hideable     : !App.user.isOperator,
			flex     	 : 1
        	},{
			header	     : t('country'),
			dataIndex    : 'country',
            	hidden       : true,
			hideable     : !App.user.isOperator,
			flex         : 1
        	},{
			header	   : t('zipcode'),
			dataIndex    : 'zipcode',
            	hidden       : true,
			hideable     : !App.user.isOperator,
			flex         : 1
        	},{
			header	   : t('phone'),
			dataIndex    : 'phone',
			flex         : 1
        	},{
			header	   : t('Usuario TNS'),
			dataIndex    : 'usuario_tns',
			flex         : 1
        	},{
			header	   : t('Training'),
			dataIndex    : 'training',
            	hidden       : true,
			hideable     : !App.user.isOperator,
			renderer	   : Helper.Util.formattyyesno,
			flex         : 1,
			filter	   : {
			type         : 'list',
			options 	   : [
					    	[1, t('yes')],
					    	[0, t('no')]
				        ]
			}
			

        	}];

		me.callParent(arguments);
	}
});
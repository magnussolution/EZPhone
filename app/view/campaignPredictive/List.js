/**
 * Classe que define a lista de "Campaign"
 *
 * MagnusSolution.com <info@magnussolution.com> 
 * 19/09/2012
 */
Ext.define('CallCenter.view.campaignPredictive.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.campaignpredictivelist',
    store: 'CampaignPredictive',
    initComponent: function() {
        var me = this;
        me.buttonCsv = false;
        me.allowCreate = false;
        me.allowPrint = false;
        me.allowDelete = false;
        me.buttonUpdateLot = false;
        me.buttonCleanFilter = false;
        me.columns = me.columns || [{
            header: t('Campaign'),
            dataIndex: 'name',
            flex: 8
        }, {
            header: t('Total Calls'),
            dataIndex: 'total_calls',
            flex: 5
        }, {
            header: t('Answered'),
            dataIndex: 'answered',
            flex: 5
        }, {
            header: t('Not answered'),
            dataIndex: 'error',
            flex: 5
        }, {
            header: t('ASR'),
            dataIndex: 'asr',
            flex: 5
        }, {
            header: t('Ringing delay'),
            dataIndex: 'ring_delay',
            renderer: Helper.Util.formatsecondsToTime,
            flex: 5
        }, {
            header: t('Answered call ratio'),
            renderer: Helper.Util.formatsecondsToTime,
            dataIndex: 'answered_call_ratio',
            flex: 5
        }, {
            header: t('AMD'),
            dataIndex: 'call_amd',
            flex: 5
        }, {
            header: t('Call lost'),
            dataIndex: 'call_lost',
            flex: 5
        }]
        me.callParent(arguments);
    }
});
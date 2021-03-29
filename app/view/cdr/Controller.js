/**
 * Classe que define a window para "sobre"
 *
 * CallCenter <info@CallCenter.com>
 * 12/12/2012
 */
Ext.define('CallCenter.view.cdr.Controller', {
    extend: 'Ext.ux.app.ViewController',
    alias: 'controller.cdr',
    recordCall: function(btn) {
        var me = this,
            record = me.list.getSelectionModel().getSelection()[0],
            filter = Ext.encode(me.list.filters.getFilterData()),
            idRecord = [];
        //no have filter and not select any selected record
        if (!record && filter.length < 5) {
            Ext.ux.Alert.alert(me.titleError, t('Please select one or more register'), 'notification');
        } else {
            Ext.each(me.list.getSelectionModel().getSelection(), function(record) {
                idRecord.push(record.get(me.idProperty));
            });
            if (App.user.isAdmin && idRecord.length > 1000) {
                Ext.ux.Alert.alert(me.titleError, t('Your limit to download record is') + ' 1000', 'error');
            } else {
                window.open('index.php/cdr/downloadRecord?ids=' + Ext.encode(idRecord) + '&filter=' + filter);
            }
        }
    },
    onDownloadClick: function(grid, rowIndex, colIndex) {
        window.open('index.php/cdr/downloadRecord?id=' + grid.getStore().getAt(rowIndex).getData().id);
    }
});
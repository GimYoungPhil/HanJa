Ext.define('HanJa.store.BulkStore', {
	extend: 'Ext.data.Store',
	config: {
		model: 'HanJa.model.BulkModel',
		sorters: 'index',
		fields: ['index', 'description','data']
	}
});
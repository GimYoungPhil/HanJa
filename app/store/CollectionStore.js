Ext.define('HanJa.store.CollectionStore', {
	extend: 'Ext.data.Store',
	config: {
		model: 'HanJa.model.CollectionModel',
		sorters: 'index',
		fields: ['index', 'description','collection']
	}
});
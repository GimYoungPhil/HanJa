Ext.define('HanJa.store.CollectionStore', {
	extend: 'Ext.data.Store',
	config: {
		model: 'HanJa.model.CollectionModel',
		fields: ['index', 'description','collection']
	}
});
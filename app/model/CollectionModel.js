Ext.define('HanJa.model.CollectionModel', {
	extend: 'Ext.data.Model',

	config: {
		idProperty: 'index',
		fields: [
			{ name: 'index', type: 'int'},
			{ name: 'description', type: 'string'},
			{ name: 'collection'}
		]
	}
});
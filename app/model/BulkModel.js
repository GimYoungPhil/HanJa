Ext.define('HanJa.model.BulkModel', {
	extend: 'Ext.data.Model',

	config: {
		idProperty: 'index',
		fields: [
			{ name: 'index', type: 'int'},
			{ name: 'description', type: 'string'},
			{ name: 'data'}
		]
	}
});
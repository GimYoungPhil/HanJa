Ext.define('HanJa.store.BulkStore', {
	extend: 'Ext.data.Store',
	config: {
		model: 'HanJa.model.BulkModel',
		sorters: 'index',
		fields: ['index', 'description'],
		data : [
	        {index: "Ed",    description: "Spencer"},
	        {index: "Tommy", description: "Maintz"},
	        {index: "Aaron", description: "Conran"},
	        {index: "Jamie", description: "Avins"}
    	]
	}
});
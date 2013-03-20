Ext.define('HanJa.view.MainList', {
    extend: 'Ext.List',
    xtype: 'mainList',
    config: {
        fullscreen: true,
        itemTpl: '<div class="contact">{index} <strong>{description}</strong></div>',

        // store: 'BulkStore',
        // fields: ['index', 'description'],
        data : [
            {index: "Ed",    description: "Spencer"},
            {index: "Tommy", description: "Maintz"},
            {index: "Aaron", description: "Conran"},
            {index: "Jamie", description: "Avins"}
        ],

        items: [
            {
                xtype: 'titlebar',
                title: 'hey',
                docked: 'top'
            }
        ]
    }
});

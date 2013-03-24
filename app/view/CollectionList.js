Ext.define('HanJa.view.CollectionList', {
    extend: 'Ext.dataview.List',
    xtype: 'collectionList',
    config: {
        cls: 'collectionList',
        store: 'CollectionStore',
        itemTpl: Ext.create('Ext.XTemplate',
            '<span class="index">{index} | </span>',
            '<span class="hanja">{[this.display(values.collection)]} | </span>',
            '<span class="descr">{description}</span>',
            {
                display: function(collection){
                    return collection[0].character + '~' + collection[collection.length-1].character;
                }
            }
        )
    }
});

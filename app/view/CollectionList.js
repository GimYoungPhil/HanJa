Ext.define('HanJa.view.CollectionList', {
    extend: 'Ext.List',
    xtype: 'collectionList',
    config: {
        cls: 'collectionList',
        store: 'CollectionStore',
        itemTpl: Ext.create('Ext.XTemplate',
            '<span class="index">{index} </span>',
            '<span class="hanja"> {[this.display(values.collection)]} </span>',
            '<span class="descr"> {description}</span>',
            {
                display: function(collection){
                    return collection[0].character;
                }
            }
        )
    }
});

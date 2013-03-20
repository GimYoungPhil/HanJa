Ext.define('HanJa.view.MainList', {
    extend: 'Ext.List',
    xtype: 'mainList',
    config: {
        cls: 'hanList',
        store: 'BulkStore',
        itemTpl: Ext.create('Ext.XTemplate',
            '<span>{index}</span>',
            '<span>{[this.hanja(values.data)]}</span>',
            '<span>{description}</span>',
            {
                hanja: function(data){
                    return data[0].character;
                }
            }
        )
    }
});

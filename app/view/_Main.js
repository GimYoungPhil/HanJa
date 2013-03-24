Ext.define('HanJa.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'HanJa.view.CollectionList'
    ],
    config: {
        layout: 'card',
        autoDestory: true,

        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                items: [
                    {
                        xtype: 'button',
                        ui: 'plain',
                        iconCls: 'reply',
                        iconMask: true,
                        hidden: true
                    }
                ]
            },
            {
                xtype: 'collectionList'
            }
        ]
    }
});

Ext.define('HanJa.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'HanJa.view.MainList'
    ],
    config: {
        layout: 'card',

        items: [
            {
                xtype: 'titlebar',
                docked: 'top'
            },
            {
                xtype: 'mainList'
            }
        ]
    }
});

Ext.define('HanJa.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'Ext.TitleBar'
    ],
    config: {

        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: '급 한자'
            },
            {
                xtype: 'list'
            }
        ]
    }
});

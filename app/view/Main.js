Ext.define('HanJa.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'HanJa.view.MainList'
    ],
    config: {

        layout: 'fit',

        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: ''
            },
            {
                xtype: 'mainList'
            }
        ]
    }
});

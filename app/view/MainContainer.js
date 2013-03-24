Ext.define('HanJa.view.MainContainer', {
    extend: 'Ext.Container',
    requires: [
        'Ext.TitleBar',
        'Ext.carousel.Carousel'
    ],
    xtype: 'mainContainer',
    config: {
        layout: 'fit',
        autoDestroy: true,
        fullscreen: true,
        items: [
            {
                xtype: 'titlebar',
                title: 'cool',
                docked: 'top',
                items:[
                    {
                        iconCls: 'more',
                        iconMask: true,
                        align: 'left'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        ui: 'plain',
                        iconCls: 'info',
                        iconMask: true,
                        align: 'right'
                    }
                ]
            }
        ]
    }
});
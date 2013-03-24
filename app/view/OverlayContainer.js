Ext.define('HanJa.view.OverlayContainer', {
    extend: 'Ext.Panel',
    xtype: 'overlayContainer',
    config: {
        modal: true,
        hideOnMaskTap: true,
        centered: true,
        hidden: true,

        width: '60%',
        height: '50%',

        layout: 'fit',
        items: [
            {
                xtype: 'titlebar',
                title: '범위 선택',
                docked: 'top'
            },
            {
                xtype: 'collectionList'
            }
        ]
    }
});

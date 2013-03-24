Ext.define('HanJa.controller.CollectionList', {
    extend: 'Ext.app.Controller',
    requires: [
        // 'HanJa.view.VerticalCarousel'
    ],

    config: {
        refs: {
            main: 'main',
            mainTitle: 'main titlebar',
            backButton: 'main titlebar button',
            collectionList: 'collectionList'
        },
        control: {
            collectionList: {
                itemtap: 'tapCollectionList'
            }
        }
    },

    // itemtap( this, index, target, record, e, eOpts )
    tapCollectionList: function(list, index, target, record) {
        if(list){
            console.log(list);
            console.log(index);
            console.log(target);
            console.log(record);
        }
        var mc = HanJa.app.getController('MainContainer');
        mc.createVertical(index);

        var overlayMenu = HanJa.app.overlayMenu;
        overlayMenu.hide();
    }
});
Ext.define('HanJa.controller.CollectionList', {
    extend: 'Ext.app.Controller',

    requries: [
        'HanJa.view.VerticalCarousel'
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
            },
            backButton: {
                tap: 'tapBackButton'
            }
        }
    },

    // itemtap( this, index, target, record, e, eOpts )
    tapCollectionList: function(list, index, target, record) {

        var hj = HanJa.app.getController('HanJa');
        var items = hj.createCarousels(record.data.collection)
        var main = this.getMain();
        main.setActiveItem(
            {
                xtype:'verticalCarousel', 
                items:items
            }
        );
        this.getBackButton().show();
    },

    tapBackButton: function() {
        this.getBackButton().hide();
        var main = this.getMain();
        main.setActiveItem(0);
    }
});
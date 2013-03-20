Ext.define('HanJa.controller.MainList', {
    extend: 'Ext.app.Controller',

    requries: [
        'HanJa.view.VerticalCarousel'
    ],
    
    config: {
        refs: {
            main: 'main',
            mainTitle: 'main titlebar',
            mainList: 'mainList'
        },
        control: {
            mainList: {
                itemtap: 'tapList'
            }
        }
    },

    // itemtap( this, index, target, record, e, eOpts )
    tapList: function(list, index, target, record){
        console.log(record.data);
        var hj = HanJa.app.getController('HanJa');
        var items = hj.createCarousels(record.data.data)
        var main = this.getMain();
        main.setActiveItem(
            {
                xtype:'verticalCarousel', 
                items:items
            }
        );
    }
});
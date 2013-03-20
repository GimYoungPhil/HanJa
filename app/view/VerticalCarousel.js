Ext.define('HanJa.view.VerticalCarousel', {
    extend: 'Ext.Carousel',
    
    xtype: 'verticalCarousel',
    
    config: {
    	autoDestroy: true,
        fullscreen: true,
        indicator : false,
        direction: 'vertical',
        style: 'background:black'
    }
});

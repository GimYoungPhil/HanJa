Ext.define('HanJa.view.MainCarousel', {
    extend: 'Ext.Carousel',
    requires: [
    	'Ext.TitleBar'
    ],
    
    xtype: 'mainCarousel',
    
    config: {
    	autoDestroy: true,
        fullscreen: true,
        indicator : false,
        direction: 'vertical',
        style: 'background:black',

        items: [
        	{
        		xtype: 'titlebar',
        		title: 'cool',
        		docked: 'top',
        		items:[
        			{
        				ui: 'plain',
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

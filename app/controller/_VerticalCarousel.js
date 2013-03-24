Ext.define('HanJa.controller.VerticalCarousel', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            verticalCarousel: 'verticalCarousel',
            startButton: 'verticalCarousel button'
        },
        control: {
            startButton: {
                tap: 'tapStartButton'
            }
        }
    },

    tapStartButton: function(button) {
        // console.log('tapStartButton');
        var overlay = HanJa.app.overlay;
        // overlay.showBy(button);
        overlay.show();
    }
});
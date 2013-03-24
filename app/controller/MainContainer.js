Ext.define('HanJa.controller.MainContainer', {
    extend: 'Ext.app.Controller',
    requires: [
        'HanJa.view.VerticalCarousel'
    ],
    config: {
        refs: {
            mainContainer: 'mainContainer',
            mainTitlebar:  'mainContainer titlebar',
            moreButton:    'mainContainer titlebar button[iconCls="more"]',
            infoButton:    'mainContainer titlebar button[iconCls="info"]',
            // mainCarousel:  'mainContainer carousel'
        },
        control: {
            moreButton: {
                tap: 'tapMoreButton'
            },
            infoButton: {
                tap: 'tapInfoButton'
            }
        }
    },
    
    jsonObject: null,
    collectionList: null,
    collectionLength: 50,

    //called when the Application is launched, remove if not needed
    launch: function(app) {
        this.jsonObject = this.loadJsonFile(app.fileName);
        this.collectionLength = app.collectionLength;
        this.getMainTitlebar().setTitle(this.jsonObject.description);

        this.collectionList = this.sliceArray();
        Ext.getStore('CollectionStore').setData(this.collectionList);
        this.createVertical(0);
    },

    loadJsonFile: function(fileName) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', fileName, false);
        xhr.send(null);
        var obj = eval("(" + xhr.responseText + ")");
        return obj;
    },

    sliceArray: function() {
        var array = [];
        var count = this.jsonObject.hanjaCount;
        var origin = this.jsonObject.hanjaList;
        var length = this.collectionLength;
        for(var i=0, j=1; count > i; i=length*j, j++){
            var fragment = Ext.Array.slice(origin, i, length * j);
            var result = this.createCarousels(fragment);
            var obj = {
                "index": j,
                "description": (i + 1) + "~" + ( count > (length * j) ? (length * j) : count ),
                "collection":result
            };
            array.push(obj);
        }
        return array;        
    },

    insertSpanTag:function(str){
        str = '<span>' + str.split('').join('</span><span>') + '</span>';
        return str;
    },

    sliceMeanTones: function(tones) {
        var result = '';
        for(var j = 0; j < tones.length; j++ ){
            result += '<div class="meanTones">'+ this.insertSpanTag(tones[j]) + '</div>';
        }
        return result;
    },

    clearCarouselList: function() {
        // var mainCarousel = this.getMainCarousel();
        // mainCarousel.removeAll();
        // console.log(mainCarousel);
    },

    setCarouselList: function(index) {
        var list = this.createCarousels(this.collectionList[index]['collection']);

        var mainCarousel = this.getMainCarousel();

        mainCarousel.setItems(list);
        // var items = mainCarousel.getItems();
        // console.log(items);
        // if(items){
        //     mainCarousel.remove(items, true);
        //     console.log('mainCarousel remove');
        // }
        
    },

    createVertical: function(index) {
        var vertical = Ext.create('HanJa.view.VerticalCarousel');
        vertical.setItems(this.collectionList[index]['collection']);
        var mainContainer = this.getMainContainer();
        mainContainer.removeAll();
        mainContainer.setItems(vertical);
    },

    createCarousels: function(hanjaList, direction) {
        var self = this;
        var carousels = [];
        direction = direction || 'horizontal';

        for (var i = 0; i < hanjaList.length; i++) {
            carousels.push({
                xtype: 'carousel',
                direction: direction,
                directionLock: true,
                indicator: false,
                character: hanjaList[i]['character'],
                items: [
                {
                    html: '<div class="left_Page">' + hanjaList[i]['character'] + '</div>',
                    styleHtmlContent: true,
                    style: 'background-color: #9dadaa',
                    autoDestroy: true
                },{
                    html: '<div class="right_Page">' + self.sliceMeanTones(hanjaList[i]['meanTones']) + '</div>',
                    styleHtmlContent: true,
                    style: 'background-color: #8CC84B',
                    autoDestroy: true
                }]
            });
        }
        return carousels;
    },

    tapMoreButton: function(button) {
        var overlayMenu = HanJa.app.overlayMenu;
        overlayMenu.showBy(button);
    },

    tapInfoButton: function() {
        console.log('tapMoreButton');

    }
});
Ext.define('HanJa.controller.MainCarousel', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            mainCarousel: 'mainCarousel',
            mainTitlebar: 'mainCarousel titlebar'
        },
        control: {
            
        }
    },
    
    jsonObject: null,
    collectionLength: 50,

    //called when the Application is launched, remove if not needed
    launch: function(app) {
        this.jsonObject = this.loadJsonFile(app.fileName);
        this.collectionLength = app.collectionLength;

        this.getMainTitlebar().setTitle(this.jsonObject.description);

        var collectionList = this.sliceArray();
        Ext.getStore('CollectionStore').setData(collectionList);

        var horizontalCarousels = this.createCarousels(collectionList[0]['collection']);
        this.getMainCarousel().setItems(horizontalCarousels);
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
        // var fragment;
        for(var i=0, j=1; count > i; i=length*j, j++){
            var fragment = Ext.Array.slice(origin, i, length * j);
            var obj = {
                "index": j,
                "description": (i + 1) + "~" + ( count > (length * j) ? (length * j) : count ),
                "collection":fragment
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

    createCarousels: function(hanjaList, direction) {
        var self = this;
        var carousels = [];
        direction = direction || 'horizontal';

        for (var i = 0; i < hanjaList.length; i++) {
            carousels.push({
                xtype: 'carousel',
                direction: direction,
                directionLock: true,
                indicator : false,
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
    }
});
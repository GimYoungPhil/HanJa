Ext.define('HanJa.controller.HanJa', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            main: 'main',
            mainTitle: 'main titlebar',
            mainList: 'mainList'
        },
        control: {
            
        }
    },
    
    jsonObject: null,
    collectionLength: 50,

    //called when the Application is launched, remove if not needed
    launch: function(app) {
        this.create(app.fileName, app.collectionLength);
    },

    create: function(fileName, collectionLength) {
        this.jsonObject = this.loadJsonFile(fileName);
        this.collectionLength = collectionLength;

        this.getMainTitle().setTitle(this.jsonObject.description);
        Ext.getStore('CollectionStore').setData(this.sliceArray());
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
    },

        createFlipCards: function(characters) {
        var self = this;
        var flipCards = [];
        var ch;

        var flippingCard = function(rowIndex, columnIndex){
            return function(){
                return flipCards[rowIndex].setActiveItem(columnIndex);
            }
        }

        for (var i = 0; i < characters.length; i++) {
            ch = characters[i];

            var pan1 = Ext.create('Ext.Panel', {
                layout: 'fit',
                styleHtmlContent: true,
                html: '<div class="oneChar">' + ch['character'] + '</div>',
                style: 'background: #5E99CC',
                listeners: {
                    tap: {
                        element: 'element',
                        fn: flippingCard(i, 1)
                    }
                }
            });

            var pan2 = Ext.create('Ext.Panel', {
                layout: 'fit',
                styleHtmlContent: true,
                html: '<div class="smallChar">' + self.sliceMeanTones(ch['meanTones']) + '</div>',
                style: 'background: #759E60',
                listeners: {
                    tap: {
                        element: 'element',
                        fn: flippingCard(i, 0)
                    }
                }
            });

            var con = Ext.create('Ext.Panel', {
                layout: {
                    type:'card',
                    animation:'flip'
                },
                items: [
                    pan1,
                    pan2
                ]
            });

            flipCards.push(con);
        }
        return flipCards;
    }
});
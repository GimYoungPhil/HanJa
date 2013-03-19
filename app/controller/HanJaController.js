Ext.define('HanJa.controller.HanJaController', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            
        },
        control: {
            
        }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        console.log(this.json);
        console.log(this.number);
    },

    json: undefined,
    number: undefined,

    create: function(json, number) {
        this.json = json;
        this.number = number;
    },

    loadJsonFile: function(fileName) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', fileName, false);
        xhr.send(null);
        var result = eval("(" + xhr.responseText + ")");
        return result;
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
                    style: 'background-color: #585344'
                },{
                    html: '<div class="right_Page">' + self.sliceMeanTones(hanjaList[i]['meanTones']) + '</div>',
                    styleHtmlContent: true,
                    style: 'background-color: #8CC84B'
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

var Gamescenes = cc.Scene.extend({
    onEnter: function () {
        this._super();
        // var layer2= new Gamelayers2;
        var layer = new Gamelayers;
        layer.init();
        // this.addChild(layer2);
        this.addChild(layer);
    },

});



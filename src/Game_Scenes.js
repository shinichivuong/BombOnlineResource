
var Gamescenes = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new Gamelayers;
        layer.init();
        this.addChild(layer);
    },

});

var Gamescenes2 = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new Gamelayers2;
        layer.init();
        this.addChild(layer);
    },

});


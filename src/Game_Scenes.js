
var Gamescenes = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new Gamelayers;
        layer.init();
        this.addChild(layer);
    },

});



var arrcreeps = [];
addCreep = function ( game) {
    for(var i=0;i<5;i++){
        arrcreeps[i] = new cc.Sprite.create(res.Creepleft_png);
        arrcreeps[i].setAnchorPoint(cc.p(0.5,0.5));
        game.addChild(arrcreeps[i]);

    }
    arrcreeps[0].setPosition(cc.p(115,75));
    arrcreeps[1].setPosition(cc.p(835,120));
    arrcreeps[2].setPosition(cc.p(115,435));
    arrcreeps[3].setPosition(cc.p(790,550));
    arrcreeps[4].setPosition(cc.p(475,255));
},
    generateDirection = function () {
    var i=Math.floor((Math.random()*4));
        var v = 45;
        switch (i) {
            case 0:
                return cc.p(0, v);
                break;
            case 1:
                return cc.p(0, -v);
                break;
            case 2:
                return cc.p(v, 0);
                break;
            case 3:
                return cc.p(-v, 0);
                break;
        }
        return cc.p(0, 0);
    }

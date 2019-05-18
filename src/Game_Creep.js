var arrcreeps = [];
var countHeartBoss = 10;
var heart = [];
var chat = null;
addCreep = function (game) {
    for (var i = 0; i < 7; i++) {
        arrcreeps[i] = new cc.Sprite.create(res.Creepleft_png);
        arrcreeps[i].setAnchorPoint(cc.p(0.5, 0.5));
        game.addChild(arrcreeps[i]);

    }
    arrcreeps[0].setPosition(cc.p(115, 75));
    arrcreeps[1].setPosition(cc.p(835, 120));
    arrcreeps[2].setPosition(cc.p(115, 435));
    arrcreeps[3].setPosition(cc.p(790, 525));
    arrcreeps[4].setPosition(cc.p(475, 210));
    arrcreeps[5].setPosition(cc.p(520, 345));

    arrcreeps[5].setTexture(res.BigBossDown_png);
    arrcreeps[6].setPosition(cc.p(835, 390));
},
    generateDirection = function () {
        var i = Math.floor((Math.random() * 4));
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
    },

    bossHeart = function (game) {
        for (var i = 0; i < countHeartBoss; i++) {
            heart[i] = new cc.Sprite(res.BigBossHeart_png);
            heart[i].setAnchorPoint(cc.p(0.5, 0.5));
            heart[i].setPosition(cc.p(arrcreeps[5].getPositionX() - arrcreeps[5].getContentSize().width / 3 + i * 10, arrcreeps[5].getPositionY() + 80));
            game.addChild(heart[i]);
        }
        chat = new cc.Sprite(res.Chat_png);
        chat.setAnchorPoint(cc.p(0.5, 0.5));
        chat.setPosition(cc.p(arrcreeps[5].getPositionX(), arrcreeps[5].getPositionY() + 130));
        game.addChild(chat);
    };

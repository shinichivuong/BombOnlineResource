var arrcreeps = [];
var countHeartBoss = 10;
var heart = [];
var chat = null;
var v=45;
addCreep = function (game) {
    for (var i = 0; i < 7; i++) {
        arrcreeps[i] = new cc.Sprite.create(res.Creepleft_png);
        arrcreeps[i].setAnchorPoint(cc.p(0.5, 0.5));
        arrcreeps[i].setVisible(true);
        game.addChild(arrcreeps[i]);


    }
    arrcreeps[0].setPosition(cc.p(115, 75));
    arrcreeps[1].setPosition(cc.p(340, 525));
    arrcreeps[2].setPosition(cc.p(115, 435));
    arrcreeps[3].setPosition(cc.p(790, 525));
    arrcreeps[4].setPosition(cc.p(475, 210));
    arrcreeps[6].setPosition(cc.p(520, 345));

    arrcreeps[6].setTexture(res.BigBossDown_png);
    arrcreeps[5].setPosition(cc.p(835, 390));
},
    generateDirection = function () {
        var i = Math.floor((Math.random() * 4));
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
    AI = function (size) {
        if (mytime - mytime2 > speedBoss) {
            for (var i = 0; i < 7; i++) {
                huong[i] = generateDirection();
                var pos = arrcreeps[i].getPosition();
                var skipeX = pos.x;
                var skipeY = pos.y;


                if (huong[i].x == 0 && huong[i].y == 45) {
                    if (i == 6) {
                        arrcreeps[i].setTexture(res.BigBossUp_png);

                    }
                    else {
                        arrcreeps[i].setTexture(res.Creepup_png);

                    }
                }
                if (huong[i].x == 45 && huong[i].y == 0) {
                    if (i == 6) {
                        arrcreeps[i].setTexture(res.BigBossRight_png);

                    }
                    else {
                        arrcreeps[i].setTexture(res.Creepright_png);
                    }
                }
                if (huong[i].x == (-45) && huong[i].y == 0) {
                    if (i == 6) {
                        arrcreeps[i].setTexture(res.BigBossLeft_png);

                    }
                    else {
                        arrcreeps[i].setTexture(res.Creepleft_png);
                    }
                }
                if (huong[i].x == 0 && huong[i].y == (-45)) {
                    if (i == 6) {
                        arrcreeps[i].setTexture(res.BigBossDown_png);

                    }
                    else {
                        arrcreeps[i].setTexture(res.Creepdown_png);
                    }
                }
                var point = cc.pAdd(pos, huong[i]);

                var rectCreep = cc.rect(point.x - arrcreeps[i].getContentSize().width / 2 * arrcreeps[i].getScaleX(),
                    point.y - arrcreeps[i].getContentSize().width / 2 * arrcreeps[i].getScaleY(),
                    arrcreeps[i].getContentSize().width * arrcreeps[i].getScaleX(),
                    arrcreeps[i].getContentSize().width * arrcreeps[i].getScaleY());
                if (checkPlayerGame(rectCreep) == false || checkBoom(rectCreep) == false || point.x > size.width - 230 || point.x < 0 + 70 || point.y < 0 + 30 || point.y > size.height - 70) {
                    point.x = skipeX;
                    point.y = skipeY;
                }
                mytime2 = mytime;
                sprite_action2 = new cc.MoveTo(speedBoss, point);
                arrcreeps[i].runAction(sprite_action2);
                if (i == 6) {
                    for (var j = 0; j < countHeartBoss; j++) {
                        actionHeart = new cc.MoveTo(speedBoss, cc.p(point.x - arrcreeps[6].getContentSize().width / 3 + j * 10, point.y + 80));
                        heart[j].runAction(actionHeart);
                    }

                }

            }
        }


    },
    bossHeart = function (game) {
        for (var i = 0; i < countHeartBoss; i++) {
            heart[i] = new cc.Sprite(res.BigBossHeart_png);
            heart[i].setAnchorPoint(cc.p(0.5, 0.5));
            heart[i].setPosition(cc.p(arrcreeps[6].getPositionX() - arrcreeps[6].getContentSize().width / 3 + i * 10, arrcreeps[6].getPositionY() + 80));
            game.addChild(heart[i]);
        }
    };

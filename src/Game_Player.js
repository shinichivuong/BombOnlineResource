// creatPlayer = function (game,size) {
//     var player = new cc.Sprite(res.BeBongDown_png);
//     player.setAnchorPoint(cc.p(0.5, 0.5));
//     player.setPosition(150, size.height - 70);
//     game.addChild(player,2);
// }varr
var popupSax = null;
creatPlayer = function (game) {
    player = new cc.Sprite.create(arrPlayer[0]);
    player.setAnchorPoint(cc.p(0.5, 0.5));
    player.setLocalZOrder(3);
    game.addChild(player);
    player.setPosition(cc.p(750, 120));


},
    checkDie = function (rect) {
        for (var i = 0; i < arrcreeps.length; i++) {
            if (arrcreeps[i].visible == true) {
                var rectEnemy = cc.rect(arrcreeps[i].getPositionX() - arrcreeps[i].getContentSize().width / 2 * arrcreeps[i].getScaleX(),
                    arrcreeps[i].getPositionY() - arrcreeps[i].getContentSize().height / 2 * arrcreeps[i].getScaleY(),
                    arrcreeps[i].getContentSize().width * arrcreeps[i].getScaleX(),
                    arrcreeps[i].getContentSize().width * arrcreeps[i].getScaleY());
                if (cc.rectIntersectsRect(rect, rectEnemy)) {
                    return false;
                    cc.audioEngine.playMusic();
                }
            }

        }
        return true;
    },
    checkPlayerSax = function () {
        var rectHero = cc.rect(player.getPositionX() + 10 - player.getContentSize().width / 2 * player.getScaleX(),
            player.getPositionY() - player.getContentSize().height / 2 * player.getScaleY(),
            (player.getContentSize().width - 20) * player.getScaleX(),
            30 * player.getScaleY());
        if (checkBomNew(rectHero) == false) {
            return false;
        }
        return true;
    },
    playerItem = function () {
        var playeritem = new cc.LabelTTF("Press Z");
        playeritem.setFontSize(15);
        playeritem.setTag(5);
        playeritem.setPosition(cc.p(x_sprite, y_sprite + 50));
        playeritem.setColor(cc.color(0, 0, 0));
        game.addChild(playeritem);
    },
    //di chuyen
    moveGame = function () {
        checkItemGame(rectHero, itemBombs);
        checkItemGame(rectHero, itemShoes);
        checkItemGame(rectHero, itemBombsizes);
        x_sprite = player.getPosition().x;
        y_sprite = player.getPosition().y;
        xK = x_sprite;
        yK = y_sprite;
        xR = (x_sprite + speedX * speed) * player.getScaleX();
        yR = (y_sprite + speedY * speed) * player.getScaleY();
        var rectHeroDemo = cc.rect(xR - player.getContentSize().width / 2 * player.getScaleX(),
            yR - player.getContentSize().height / 2 * player.getScaleY(),
            (player.getContentSize().width) * player.getScaleX(),
            30 * player.getScaleY());
        if (checkMap(rectHeroDemo) == false) {

//dang lam
            if (speedY == 1 || speedY == -1) {
                for (var i = 0; i < arrrectMap.length; i++) {
                    if (arrrectMap[i].visible == true) {
                        var rectMap = cc.rect((arrrectMap[i].getPositionX()) - arrrectMap[i].getContentSize().width / 2 * arrrectMap[i].getScaleX(),
                            (arrrectMap[i].getPositionY()) - arrrectMap[i].getContentSize().height / 2 * arrrectMap[i].getScaleY(),
                            (arrrectMap[i].getContentSize().width) * arrrectMap[i].getScaleX(),
                            (arrrectMap[i].getContentSize().height) * arrrectMap[i].getScaleY());
                        if (cc.rectIntersectsRect(rectHeroDemo, rectMap)) {
                            //trai
                            var a = arrrectMap[i].getPositionX();
                            var rectMap2 = cc.rect((arrrectMap[i].getPositionX() - 45) - arrrectMap[i].getContentSize().width / 2 * arrrectMap[i].getScaleX(),
                                (arrrectMap[i].getPositionY()) - arrrectMap[i].getContentSize().height / 2 * arrrectMap[i].getScaleY(),
                                (arrrectMap[i].getContentSize().width) * arrrectMap[i].getScaleX(),
                                (arrrectMap[i].getContentSize().height) * arrrectMap[i].getScaleY());
                            var rectMap3 = cc.rect((arrrectMap[i].getPositionX() + 45) - arrrectMap[i].getContentSize().width / 2 * arrrectMap[i].getScaleX(),
                                (arrrectMap[i].getPositionY()) - arrrectMap[i].getContentSize().height / 2 * arrrectMap[i].getScaleY(),
                                (arrrectMap[i].getContentSize().width) * arrrectMap[i].getScaleX(),
                                (arrrectMap[i].getContentSize().height) * arrrectMap[i].getScaleY());

                            if (a - xR > 20) {
                                if (checkMap(rectMap2) != false) {
                                    xR = xR - 1;
                                    player.setTexture(arrPlayer[1]);
                                    yR = yK;

                                }
                                else {
                                    xR = xK;
                                    yR = yK;
                                }
                            }
//ph
                            else if (a - xR < -20) {
                                if (checkMap(rectMap3) != false) {
                                    xR = xR + 1;
                                    player.setTexture(arrPlayer[2]);

                                    yR = yK;


                                }
                                else {
                                    xR = xK;
                                    yR = yK;
                                }
                            }
                            else {
                                xR = xK;
                                yR = yK;

                            }

                        }
                    }

                }
            }
            else if (speedX == 1 || speedX == -1) {
                for (var i = 0; i < arrrectMap.length; i++) {
                    if (arrrectMap[i].visible == true) {
                        var rectMap = cc.rect((arrrectMap[i].getPositionX()) - arrrectMap[i].getContentSize().width / 2 * arrrectMap[i].getScaleX(),
                            (arrrectMap[i].getPositionY()) - arrrectMap[i].getContentSize().height / 2 * arrrectMap[i].getScaleY(),
                            (arrrectMap[i].getContentSize().width) * arrrectMap[i].getScaleX(),
                            (arrrectMap[i].getContentSize().height) * arrrectMap[i].getScaleY());
                        if (cc.rectIntersectsRect(rectHeroDemo, rectMap)) {
                            //trai
                            var a = arrrectMap[i].getPositionY();
                            var rectMap2 = cc.rect((arrrectMap[i].getPositionX()) - arrrectMap[i].getContentSize().width / 2 * arrrectMap[i].getScaleX(),
                                (arrrectMap[i].getPositionY() - 45) - arrrectMap[i].getContentSize().height / 2 * arrrectMap[i].getScaleY(),
                                (arrrectMap[i].getContentSize().width) * arrrectMap[i].getScaleX(),
                                (arrrectMap[i].getContentSize().height) * arrrectMap[i].getScaleY());
                            var rectMap3 = cc.rect((arrrectMap[i].getPositionX()) - arrrectMap[i].getContentSize().width / 2 * arrrectMap[i].getScaleX(),
                                (arrrectMap[i].getPositionY() + 45) - arrrectMap[i].getContentSize().height / 2 * arrrectMap[i].getScaleY(),
                                (arrrectMap[i].getContentSize().width) * arrrectMap[i].getScaleX(),
                                (arrrectMap[i].getContentSize().height) * arrrectMap[i].getScaleY());

                            if (a - yR > 2) {
                                if (checkMap(rectMap2) != false) {
                                    yR = yR - 1;
                                    player.setTexture(arrPlayer[0]);

                                    xR = xK;
                                }
                                else {
                                    xR = xK;
                                    yR = yK;
                                }
                            }
//ph
                            else if (a - yR < -30) {
                                if (checkMap(rectMap3) != false) {
                                    yR = yR + 1;
                                    player.setTexture(arrPlayer[3]);

                                    xR = xK;

                                }
                                else {
                                    xR = xK;
                                    yR = yK;
                                }
                            }
                            else {
                                xR = xK;
                                yR = yK;

                            }

                        }
                    }

                }
            }

            //dang lam

            else {
                xR = xK;
                yR = yK;

            }
        }

        player.setPosition(cc.p(xR, yR));
        var actionPlayer = new cc.MoveTo(0, cc.p(xR,yR+35));
        popupSax.runAction(actionPlayer);
    },
    popupSaxPlayer = function () {
        popupSax = new cc.LabelTTF("Press Z");
        popupSax.setFontSize(15);
        popupSax.setLocalZOrder(3);
        popupSax.setVisible(false);
        popupSax.setPosition(cc.p(player.getPosition().x, player.getPosition().y + 35));
        game.addChild(popupSax);
    },
    playertoDie = function () {
        rectHero = cc.rect(player.getPositionX() + 10 - player.getContentSize().width / 2 * player.getScaleX(),
            player.getPositionY() - player.getContentSize().width / 2 * player.getScaleY(),
            (player.getContentSize().width - 20) * player.getScaleX(),
            20 * player.getScaleY());
        if (checkDie(rectHero) == false) {


            player.setPosition(cc.p(795, 120));
            player.setOpacity(0);
            player.setTexture(arrPlayer[0]);

            var FadedInPlayer = cc.FadeIn.create(2);
            player.runAction(FadedInPlayer);
            countPlayerHeart -= 1;

        }


    };
// creatPlayer = function (game,size) {
//     var player = new cc.Sprite(res.BeBongDown_png);
//     player.setAnchorPoint(cc.p(0.5, 0.5));
//     player.setPosition(150, size.height - 70);
//     game.addChild(player,2);
// }varr
creatPlayer = function (game) {
    player = new cc.Sprite.create(arrPlayer[0]);
    player.setAnchorPoint(cc.p(0.5, 0.5));
    player.setLocalZOrder(1);
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
                    cc.audioEngine.playMusic()
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
            (player.getContentSize().width ) * player.getScaleX(),
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
                                if (checkMap(rectMap2)!=false){
                                    xR = xR - 1;
                                    yR = yK;

                                }
                                else {
                                    xR = xK;
                                    yR = yK;
                                }
                            }
//ph
                            else if (a - xR < -20) {
                                if (checkMap(rectMap3)!=false){
                                    xR = xR + 1;
                                    yR = yK;


                                }
                                else
                                {
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
            else if (speedX == 1|| speedX==-1) {
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

                            if (a - yR > 3) {
                                if (checkMap(rectMap2) != false) {
                                    yR = yR - 1;
                                    xR=xK;
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
                                    xR=xK;

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

        if (checkBoom(rectHeroDemo) == false) {
            for (var i = 0; i < arrBombs.length; i++) {
                if (arrBombs[i].visible == true) {
                    var recBombWidth = cc.rect(arrBombs[i].getPositionX()+1 - arrBombs[i].getContentSize().width / 2 * arrBombs[i].getScaleX(),
                        arrBombs[i].getPositionY()+1 - player.getContentSize().width / 2 * arrBombs[i].getScaleY(),
                        arrBombs[i].getContentSize().width-2 * arrBombs[i].getScaleX(),
                        player.getContentSize().width -2 * arrBombs[i].getScaleY());

                    if (cc.rectIntersectsRect(rectHeroDemo, recBombWidth) ) {
                        if (timeBB[i] > 30) {
                            xR = xK;
                            yR = yK;
                        }
                    }
                }

            }
        }
        player.setPosition(cc.p(xR, yR));
    },
    playertoDie = function () {
        rectHero = cc.rect(player.getPositionX() + 10 - player.getContentSize().width / 2 * player.getScaleX(),
            player.getPositionY() - player.getContentSize().width / 2 * player.getScaleY(),
            (player.getContentSize().width - 20) * player.getScaleX(),
            20 * player.getScaleY());
        if (checkDie(rectHero) == false) {


            player.setPosition(cc.p(795, 120));
            player.setOpacity(0);
            player.setTexture(res.BeBongDown_png);

            var FadedInPlayer = cc.FadeIn.create(2);
            player.runAction(FadedInPlayer);
            countPlayerHeart -= 1;

        }


    };
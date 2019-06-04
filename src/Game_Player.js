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
        var rectHero = cc.rect(player.getPositionX()+10 - player.getContentSize().width / 2 * player.getScaleX(),
            player.getPositionY() - player.getContentSize().height / 2 * player.getScaleY(),
            (player.getContentSize().width-20) * player.getScaleX(),
            30 * player.getScaleY());
        if (checkBomNew(rectHero) == false) {
            return false;
        }
        return true;
    },
    playerItem=function () {
        var playeritem = new cc.LabelTTF("Press Z");
        playeritem.setFontSize(15);
        playeritem.setTag(5);
        playeritem.setPosition(cc.p(x_sprite, y_sprite+50));
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
        var rectHeroDemo = cc.rect(xR + 10 - player.getContentSize().width / 2 * player.getScaleX(),
            yR - player.getContentSize().height / 2 * player.getScaleY(),
            (player.getContentSize().width - 20) * player.getScaleX(),
            20 * player.getScaleY());
        if (checkMap(rectHeroDemo) == false) {
            xR = xK;
            yR = yK;

        }
        if (checkBoom(rectHeroDemo)==false){
            for (var i = 0; i < arrBombs.length; i++) {
                if (arrBombs[i].visible == true) {
                    var recBombWidth = cc.rect(arrBombs[i].getPositionX() - arrBombs[i].getContentSize().width / 2 * arrBombs[i].getScaleX(),
                        arrBombs[i].getPositionY() - player.getContentSize().width / 2 * arrBombs[i].getScaleY(),
                        arrBombs[i].getContentSize().width * arrBombs[i].getScaleX(),
                        player.getContentSize().width / 2 * arrBombs[i].getScaleY());
                    var recBombheight = cc.rect(arrBombs[i].getPositionX() - player.getContentSize().width / 2 * arrBombs[i].getScaleX(),
                        arrBombs[i].getPositionY() - arrBombs[i].getContentSize().height / 2 * arrBombs[i].getScaleY(),
                        player.getContentSize().width / 2 * arrBombs[i].getScaleX(),
                        arrBombs[i].getContentSize().height * arrBombs[i].getScaleY());

                    if (cc.rectIntersectsRect(rectHeroDemo, recBombWidth) || cc.rectIntersectsRect(rectHeroDemo, recBombheight)) {
                        if (timeBB[i]>30){
                            xR=xK;
                            yR=yK;
                        }
                    }
                }

            }
        }
        player.setPosition(cc.p(xR, yR));
    },
    playertoDie = function () {
        rectHero = cc.rect(player.getPositionX()+10 - player.getContentSize().width / 2 * player.getScaleX(),
            player.getPositionY() - player.getContentSize().width / 2 * player.getScaleY(),
            (player.getContentSize().width-20) * player.getScaleX(),
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
// creatPlayer = function (game,size) {
//     var player = new cc.Sprite(res.BeBongDown_png);
//     player.setAnchorPoint(cc.p(0.5, 0.5));
//     player.setPosition(150, size.height - 70);
//     game.addChild(player,2);
// }varr
creatPlayer = function (game) {
    player = new cc.Sprite.create(arrPlayer[0]);
    player.setAnchorPoint(cc.p(0.5, 0.5));
    game.addChild(player);
    player.setPosition(cc.p(750, 75));


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
        var rectHero = cc.rect(player.getPositionX() - player.getContentSize().width / 2 * player.getScaleX(),
            player.getPositionY() - player.getContentSize().height / 2 * player.getScaleY(),
            player.getContentSize().width * player.getScaleX(),
            player.getContentSize().height / 3 * player.getScaleY());
        if (checkBoom(rectHero) == false) {
            return false;
        }
        return true;
    },
    playertoDie = function () {
        rectHero = cc.rect(player.getPositionX() - player.getContentSize().width / 2 * player.getScaleX(),
            player.getPositionY() - player.getContentSize().width / 2 * player.getScaleY(),
            player.getContentSize().width * player.getScaleX(),
            (player.getContentSize().width-4) * player.getScaleY());
        if (checkDie(rectHero) == false) {


                player.setPosition(cc.p(795, 75));
                player.setOpacity(0);
                player.setTexture(res.BeBongDown_png);

                var FadedInPlayer = cc.FadeIn.create(2);
                player.runAction(FadedInPlayer);
                countPlayerHeart -= 1;

            }




    }
var arrBombs = [];
var timeBB=[];
creatBoom = function (game) {
    if (timer - mycurrentime > 0.5) {
        timeBB[timeBB.length]=0;
        cc.audioEngine.playEffect(res.Sound_creatBoom);
        boom = new cc.Sprite.create(res.Boom_png);
        boom.setAnchorPoint(cc.p(0.5, 0.5));
        boom.setTag(h);
        boom.setPosition(cc.p(x_sprite, y_sprite-10));
        game.addChild(boom);
        arrBombs.push(boom);
        mycurrentime = timer;

    }
},
    //pha tuong
    destroybox=function () {
         for (var j = 0; j < arrrectMap.length; j++) {
            if (arrrectMap[j].visible==true){
                if (arrrectMap[j].getTag().toString()=="4"){
                    var rectMap = cc.rect(arrrectMap[j].getPositionX() - arrrectMap[j].getContentSize().width / 2 * arrrectMap[j].getScaleX(),
                        arrrectMap[j].getPositionY() - arrrectMap[j].getContentSize().height / 2 * arrrectMap[j].getScaleY(),
                        arrrectMap[j].getContentSize().width * arrrectMap[j].getScaleX(),
                        arrrectMap[j].getContentSize().height * arrrectMap[j].getScaleY());
                    if (checkBoom(rectMap) == false) {
                        arrrectMap[j].setVisible(false);
                    }
                }
            }
        }
    },
    checkBombSmall=function () {// check khong cho dat boom trung nhau
        var rectHero = cc.rect(player.getPositionX() - player.getContentSize().width / 2 * player.getScaleX(),
            player.getPositionY() - player.getContentSize().width / 2 * player.getScaleY(),
            player.getContentSize().width * player.getScaleX(),
            player.getContentSize().width * player.getScaleY());// kich thuoc qua boom do nguoi choi se dat
        for (var j = 0; j < arrBombs.length; j++) {
            if (arrBombs[j].visible==true){
                    var rectMap = cc.rect(arrBombs[j].getPositionX() - arrBombs[j].getContentSize().width / 2 * arrBombs[j].getScaleX(),
                        arrBombs[j].getPositionY() - arrBombs[j].getContentSize().height / 2 * arrBombs[j].getScaleY(),
                        arrBombs[j].getContentSize().width * arrBombs[j].getScaleX(),
                        arrBombs[j].getContentSize().height * arrBombs[j].getScaleY());
                if (cc.rectIntersectsRect(rectHero,rectMap)){
                    return false;
                }
            }
        }
        return true;
    },
    checkBoom = function (rect) {
        for (var i = 0; i < arrBombs.length; i++) {
            if (arrBombs[i].visible == true) {
                var recBombWidth = cc.rect(arrBombs[i].getPositionX() - arrBombs[i].getContentSize().width / 2 * arrBombs[i].getScaleX(),
                    arrBombs[i].getPositionY() - player.getContentSize().width / 2 * arrBombs[i].getScaleY(),
                    arrBombs[i].getContentSize().width * arrBombs[i].getScaleX(),
                    player.getContentSize().width/2 * arrBombs[i].getScaleY());
                var recBombheight = cc.rect(arrBombs[i].getPositionX() - player.getContentSize().width / 2 * arrBombs[i].getScaleX(),
                    arrBombs[i].getPositionY() - arrBombs[i].getContentSize().height / 2 * arrBombs[i].getScaleY(),
                    player.getContentSize().width/2  * arrBombs[i].getScaleX(),
                    arrBombs[i].getContentSize().height * arrBombs[i].getScaleY());

                if (cc.rectIntersectsRect(rect, recBombWidth) || cc.rectIntersectsRect(rect, recBombheight)) {
                    return false;
                }
            }

        }
        return true;
    };

//
itemCount=0;
additemsBoom = function(game) {
    for (var i = 0; i < 4; i++) {
        itemBombs[i] = new cc.Sprite.create(res.ItemBoom_png);
        itemBombs[i].setAnchorPoint(cc.p(0.5, 0.5));
        game.addChild(itemBombs[i]);

    }
    itemBombs[0].setPosition(cc.p(160, 75));
    itemBombs[1].setPosition(cc.p(790, 210));
    itemBombs[2].setPosition(cc.p(115, 525));
    itemBombs[3].setPosition(cc.p(700, 525));
},
    additemsShoe = function(game) {
        for (var i = 0; i < 4; i++) {
            itemShoes[i] = new cc.Sprite.create(res.ItemShoe_png);
            itemShoes[i].setAnchorPoint(cc.p(0.5, 0.5));
            game.addChild(itemShoes[i]);

        }
        itemShoes[0].setPosition(cc.p(250, 75));
        itemShoes[1].setPosition(cc.p(835, 210));
        itemShoes[3].setPosition(cc.p(475, 210));
    },
    checkItemGame = function (rect,items) {
        for (var i = 0; i < items.length; i++) {
            if (items[i].visible == true) {
                var rectEnemy = cc.rect(items[i].getPositionX() - items[i].getContentSize().width / 2 * items[i].getScaleX(),
                    items[i].getPositionY() - items[i].getContentSize().height / 2 * items[i].getScaleY(),
                    (items[i].getContentSize().width - 1) * items[i].getScaleX(),
                    (items[i].getContentSize().height - 1) * items[i].getScaleY());
                if (cc.rectIntersectsRect(rect, rectEnemy)) {
                    cc.audioEngine.playMusic(res.Sound_item);
                    items[i].visible=false;
                    if (items==itemShoes){
                        speed+=1;
                        countItemSpeddGame+=1
                    }
                    if (items==itemBombs){
                        countBomb+=1;
                        itemCount+=1;
                    }
                    return false;
                }
            }

        }
        return true;
    }


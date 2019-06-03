itemCount=0;
countBoomSize=1;
additemsBoom = function(game) {
    for (var i = 0; i < 8; i++) {
        itemBombs[i] = new cc.Sprite.create(res.ItemBoom_png);
        itemBombs[i].setAnchorPoint(cc.p(0.5, 0.5));
        game.addChild(itemBombs[i]);

    }
    itemBombs[0].setPosition(cc.p(160, 75));
    itemBombs[1].setPosition(cc.p(790, 210));
    itemBombs[2].setPosition(cc.p(115, 525));
    itemBombs[3].setPosition(cc.p(700, 525));
    itemBombs[4].setPosition(cc.p(745, 345));
    itemBombs[5].setPosition(cc.p(745, 210));
    itemBombs[6].setPosition(cc.p(610, 300));
    itemBombs[7].setPosition(cc.p(610, 345));
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
    additemsBoomSize = function(game) {
        for (var i = 0; i < 6; i++) {
            itemBombsizes[i] = new cc.Sprite.create(res.ItemBoomSize_png);
            itemBombsizes[i].setAnchorPoint(cc.p(0.5, 0.5));
            game.addChild(itemBombsizes[i]);

        }
        itemBombsizes[0].setPosition(cc.p(295, 75));
        itemBombsizes[1].setPosition(cc.p(835, 255));
        itemBombsizes[3].setPosition(cc.p(475, 255));
        itemBombsizes[4].setPosition(cc.p(835, 300));
        itemBombsizes[5].setPosition(cc.p(835, 345));
    },
    checkItemGame = function (rect,items) {
        for (var i = 0; i < items.length; i++) {
            if (items[i].visible == true) {
                var rectEnemy = cc.rect(items[i].getPositionX() - items[i].getContentSize().width / 2 * items[i].getScaleX(),
                    items[i].getPositionY() - items[i].getContentSize().height / 2 * items[i].getScaleY(),
                    (items[i].getContentSize().width - 4) * items[i].getScaleX(),
                    (items[i].getContentSize().height - 4) * items[i].getScaleY());
                if (cc.rectIntersectsRect(rect, rectEnemy)) {
                    cc.audioEngine.playEffect(res.Sound_item);
                    items[i].visible=false;
                    if (items==itemShoes){
                        speed+=1;
                        countItemSpeddGame+=1
                    }
                    if (items==itemBombs){
                        countBomb+=1;
                        itemCount+=1;
                    }
                    if (items==itemBombsizes){
                        countBoomSize+=1
                        cc.log(countBoomSize);
                    }
                    return false;
                }
            }

        }
        return true;
    }


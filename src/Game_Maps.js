
var arrrectMap=[];
var k=0;
var tag=0;
creatMap= function (name,arrMap) {
    for (var i = 0; i < arrMap.length; i++) {
        for (var j = 0; j < arrMap[i].length; j++) {
            if (arrMap[i][j] == 0 ) {
                a=res.Boxland2_png;
                tag=5;
            }
            if (arrMap[i][j] == 1) {
                a = res.BoxSat_png;
                tag=1;
            }
            if (arrMap[i][j] == 2) {
                a = res.BoxGo2_png;
                tag=2;
            }
            if (arrMap[i][j] == 3) {
                a = res.BoxSatMain_png;
                tag=3;
            }
            if (arrMap[i][j] == 4) {
                a = res.BoxGo_png;
                tag=4;
            }
            if (arrMap[i][j]==1|| arrMap[i][j]==2 || arrMap[i][j]==3 || arrMap[i][j]==4 ){
                x = 45 * j + 70;
                y = 45 * i+ 30;
                var sprite = new cc.Sprite.create(a);
                sprite.setAnchorPoint(cc.p(0.5, 0.5));
                sprite.setPosition(x, y);
                sprite.setTag(tag);
                sprite.setLocalZOrder(2);
                name.addChild(sprite);
                arrrectMap.push(sprite);
            }
        }
    }
}

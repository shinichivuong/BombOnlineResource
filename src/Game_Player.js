// creatPlayer = function (game,size) {
//     var player = new cc.Sprite(res.BeBongDown_png);
//     player.setAnchorPoint(cc.p(0.5, 0.5));
//     player.setPosition(150, size.height - 70);
//     game.addChild(player,2);
// }varr
creatPlayer=function (game) {
    player = new cc.Sprite.create(res.BeBongDown_png);
    player.setAnchorPoint(cc.p(0.5, 0.5));
    game.addChild(player);
    player.setPosition(cc.p(795, 75));


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
}
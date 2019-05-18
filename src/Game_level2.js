win = function (game) {
    var size= cc.director.getWinSize();
    var layout = new ccui.Layout();
    layout.setLayoutType(ccui.Layout.LINEAR_HORIZONTAL);
    layout.sizeType = ccui.Widget.SIZE_PERCENT;
    layout.visible = true;
    layout.setSizePercent(cc.p(0.5, 0.5));
    layout.setPositionType(ccui.Widget.POSITION_PERCENT);
    layout.setPositionPercent(cc.p(0.25, 0.25));
    layout.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
    layout.setBackGroundColor(cc.color.GRAY);
    var back= new ccui.Text();

    back.attr({
        textAlign: cc.TEXT_ALIGNMENT_CENTER,
        String:"Gameover",
        font:"Arial"
    });
    layout.addChild(back);

    // var buttonwin = new ccui.Button();
    // buttonwin.loadTextures(res.Start_png, res.Start2_png);
    // layout.addChild(buttonwin);
    game.addChild(layout);
};
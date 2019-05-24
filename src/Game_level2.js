win = function (game) {
    var size= cc.director.getWinSize();
     layout2 = new ccui.Layout();
    layout2.setLayoutType(ccui.Layout.LINEAR_HORIZONTAL);
    layout2.sizeType = ccui.Widget.SIZE_PERCENT;
    layout2.visible = true;
    layout2.setSizePercent(cc.p(0.5, 0.5));
    layout2.setPositionType(ccui.Widget.POSITION_PERCENT);
    layout2.setPositionPercent(cc.p(0.25, 0.25));
    layout2.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
    layout2.setBackGroundColor(cc.color.GRAY);
    var back= new ccui.Text();

    back.attr({
        textAlign: cc.TEXT_ALIGNMENT_CENTER,
        String:"Gameover",
        font:"Arial"
    });
    layout2.addChild(back);

    // var buttonwin = new ccui.Button();
    // buttonwin.loadTextures(res.Start_png, res.Start2_png);
    // layout.addChild(buttonwin);
    game.addChild(layout2);
};
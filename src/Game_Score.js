//    startPhysics = function () {
//     world = new cp.Space();
//     world.gravity = cp.v(0, -500);
//     coliders = [];
// },
//     startPhysicsDebug = function (game) {
//         var debigDraw = cc.PhysicsDebugNode.create(world);
//         debigDraw.setVisible(true);
//         game.addChild(debigDraw);
//     },
//     addPhysicsBodies = function (game) {
//         var config = {
//             posX: 320,
//             posY: 20,
//             width: 640,
//             height: 20,
//             isDynamic: false,
//             sensor: false,
//             spriteImage: "null",
//             type: "ground",
//             id: "tag"
//         };
//
//         game.addBody(config);
//
//         var config = {
//             posX: 320,
//             posY: 480,
//             width: 64,
//             height: 64,
//             isDynamic: true,
//             sensor: false,
//             spriteImage: res.BoomBang_png,
//             type: "box",
//             id: "tag_1"
//         };
//
//         game.addBody(config);
//
//         var config = {
//             posX: 290,
//             posY: 64,
//             width: 64,
//             height: 64,
//             isDynamic: true,
//             sensor: false,
//             spriteImage: res.BoomBang_png,
//             type: "box",
//             id: "tag_2"
//         };
//
//         game.addBody(config);
//     },
//     addPhysicsShapes = function (body, config) {
//
//         var shape = new cp.BoxShape(body, config.width, config.height);
//         shape.setFriction(1);
//         shape.setElasticity(0);
//         shape.name = config.type;
//         shape.image = addPhysicsSprites(config);
//         shape.id = config.id;
//         shape.sensor = config.sensor;
//         world.addShape(shape);
//
//         coliders.push(shape);
//     },
//     addPhysicsSprites = function (config,game) {
//
//         var bodySprite = cc.Sprite.create(config.spriteImage);
//         Gamelayers.addChild(bodySprite, 0);
//         bodySprite.setPosition(config.posX, config.posY);
//         return bodySprite
//     },
//     Gamelayers.prototype.addBody = function (config) {
//
//         if (config.isDynamic) var body = new cp.Body(1, cp.momentForBox(1, config.width, config.height));
//         else var body = new cp.Body(Infinity, Infinity);
//         body.setPos(cp.v(config.posX, config.posY));
//
//         if (config.isDynamic) world.addBody(body);
//
//         addPhysicsShapes(body, config);
//     }
var realTimeLB = null;
var countBomLB = null;
var countSpeedLB = null;
var countKillBossLB = null;
var userNameLB = null;
var playerLiveLB = null;
var countKim = 5;
var kimLB = null;
var size = null;
score = function (game) {
    realTimeLB = new cc.LabelTTF(realTime.toString());
    realTimeLB.setFontSize(15);
    realTimeLB.setPosition(cc.p(110, size.height - 20));
    realTimeLB.setColor(cc.color(0, 0, 0));
    game.addChild(realTimeLB);
},


    countItemBoom = function (game) {
        countBomLB = new cc.LabelTTF("0");
        countBomLB.setFontSize(15);
        countBomLB.setPosition(cc.p(size.width - 100, 340));
        countBomLB.setColor(cc.color(0, 0, 0));
        game.addChild(countBomLB);
    },
    countItemSpeed = function (game) {
        countSpeedLB = new cc.LabelTTF(realTime.toString());
        countSpeedLB.setFontSize(15);
        countSpeedLB.setPosition(cc.p(size.width - 100, 300));
        countSpeedLB.setColor(cc.color(0, 0, 0));
        game.addChild(countSpeedLB);
    },
    userName = function (game) {
        userNameLB= new cc.LabelTTF();
        // userNameLB.setTouchEnabled(true);
        userNameLB.fontName="Marker Felt";
        // userNameLB.setPlaceHolder(userNameGame.getString());
        userNameLB.fontSize=20;
        userNameLB.setString(userNameGame.getString());
        userNameLB.setPosition(cc.p(size.width-100,570));
        // userNameLB.addEventListener(game.textFieldEvent,game);
        game.addChild(userNameLB);
    },


    playerLive = function (game) {
        playerLiveLB = new cc.LabelTTF("0");
        playerLiveLB.setFontSize(15);
        playerLiveLB.setPosition(cc.p(size.width - 100, 360));
        playerLiveLB.setColor(cc.color(0, 0, 0));
        game.addChild(playerLiveLB);
    },
    kim = function (game) {
        kimLB = new cc.LabelTTF("5");
        kimLB.setFontSize(15);
        kimLB.setPosition(cc.p(size.width - 160, 260));
        kimLB.setColor(cc.color(0, 0, 0));
        game.addChild(kimLB);
    },
    countKillBoos = function (game) {


        countKillBossLB = new cc.LabelTTF("0");
        countKillBossLB.setFontSize(15);
        countKillBossLB.setPosition(cc.p(size.width - 100, 280));
        countKillBossLB.setColor(cc.color(0, 0, 0));
        game.addChild(countKillBossLB);
    },
    gameover = function (game) {
    cc.audioEngine.playMusic(res.sound_lose);
        highScores="User: " +userNameLB.getString()+" Score: "+countkillboss.toString();
        arrHighScores.push(highScores);

        var overgame = new cc.LabelTTF("GAME OVER");
        overgame.setFontSize(30);
        overgame.setAnchorPoint(cc.p(0.5, 0.5));
        overgame.setColor(cc.color(0, 0, 0));
        overgame.setPosition(cc.p(size.width / 2 - 50, size.height / 2 + 60));
        game.addChild(overgame);


        var player = new cc.LabelTTF("User Name:" + userNameLB.getString());
        player.setAnchorPoint(cc.p(0.5, 0.5));
        player.setFontSize(20);
        player.setPosition(cc.p(size.width / 2 - 50, size.height / 2 + 30));
        player.setColor(cc.color(0, 0, 0));
        game.addChild(player);

        var score = new cc.LabelTTF("Score: " + countkillboss.toString());
        score.setFontSize(20);
        score.setAnchorPoint(cc.p(0.5, 0.5));
        score.setPosition(cc.p(size.width / 2 - 50, size.height / 2));
        score.setColor(cc.color(0, 0, 0));
        game.addChild(score);

    };
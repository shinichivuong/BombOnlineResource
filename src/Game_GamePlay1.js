var rectHero = null;
var creepLive = [];
var speedBoss = 1;
var win = null;
var timeplayerdie;
var Gamelayers = cc.Layer.extend({
    init: function () {
        gameOverNow = true;
        size = cc.director.getWinSize();
        this._super();
        game = this;
        startGame(game);
        score(game);
        countItemBoom(game);
        countItemSpeed(game);
        countKillBoos(game);
        playerLive(game);
        countItemBomSize(game);
        kim(game);

        // win(game);
        // var size=cc.director.getWinSize();


        if (cc.sys.capabilities.hasOwnProperty('keyboard')) {

            cc.eventManager.addListener(
                {
                    event: cc.EventListener.KEYBOARD,

                    onKeyPressed: function (key, event) {
                        cc.log("Keypressed:" + key.toString());
                        switch (key) {
                            case 37:
                                keyLeft = true;
                                break;
                            case 39:
                                keyRight = true;
                                break;
                            case 38:
                                keyUp = true;
                                break;
                            case 40:
                                keyDown = true;
                                break;

                            case 65:
                                keyLeft = true;
                                break;
                            case 68:
                                keyRight = true;
                                break;
                            case 87:
                                keyUp = true;
                                break;
                            case 83:
                                keyDown = true;
                                break;
                            case 32:
                                keySpace = true;
                                GamekeySpace();
                                break;
                            case 13:
                                keyEnter = true;
                                GamekeyEnter();
                                break;
                            case 27:
                                keyEsc = true;
                                GamekeyEsc();
                                break;
                            case 90:
                                keyZ = true;
                                GamekeyZ();
                                break;
                            case 88:
                                keyX = true;
                                GamekeyX();
                                break;
                        }
                    },

                    onKeyReleased: function (key, event) {
                        switch (key) {
                            case 37:
                                keyLeft = false;
                                break;
                            case 39:
                                keyRight = false;
                                break;
                            case 38:
                                keyUp = false;
                                break;
                            case 40:
                                keyDown = false;
                                break;

                            case 65:
                                keyLeft = false;
                                break;
                            case 68:
                                keyRight = false;
                                break;
                            case 87:
                                keyUp = false;
                                break;
                            case 83:
                                keyDown = false;
                                break;

                            case 32:
                                keySpace = false;
                                break;
                            case 13:
                                keyEnter = false;
                                break;
                            case 27:
                                keyEsc = false;
                                break;
                            case 90:
                                keyZ = false;
                            {
                                if (isAlive == false) {
                                    if (countKim > 0) {
                                        player.setPosition(cc.p(750, 120));
                                        player.setOpacity(0);
                                        player.setTexture(arrPlayer[0]);
                                        popupSax.setVisible(false);
                                        var FadedInPlayer = cc.FadeIn.create(2);
                                        player.runAction(FadedInPlayer);
                                        countKim = countKim - 1;
                                        speed = 3;
                                        isAlive = true;
                                    }

                                }

                            }
                                break;
                            case 88:
                                keyX = false;
                                break;
                        }
                    }
                }, this);
        }
        game.scheduleUpdate();
    },
    update: function (dt) {
        if (gameOverNow == true && gameWinNow == true) {
//so mang cua nguoi choi
            if (countPlayerHeart == 0) {
                gameover(game);
                var scene = new GameMenuHighScore;
                cc.director.pushScene(new cc.TransitionFade(10, scene));
                gameOverNow = false;
            }
            //so diem ha guc boss e win
            if (countkillboss == 16) {
                gamewin(game);
                gameWinNow = false;
                var scene = new GameMenuHighScoreScene;
                cc.director.runScene(new cc.TransitionFade(5, scene));
            }
            //an boss khi chet
            for (var k = 0; k < creepLive.length; k++) {
                creepLive[k] += dt;
                if (creepLive[k] > 0.1 && k != 6 && creepLive[k] < 0.3) {
                    countkillboss = countkillboss + 1;
                    arrcreeps[k].setVisible(false);
                    cc.audioEngine.playEffect(res.Sound_Monsterdie);
                    creepLive[k] = 2;

                }
            }
            var size = cc.director.getWinSize();
            mytime += dt;
            timer += dt;
            bossDie += dt;
            myTimePlayer += dt;
            myTimePlayerSax += dt;
            timeplayerdie += dt;
            headCreep();
            move();
            playertoDie();
            AI(size);
            //set thời gian game
            realTime += dt;

            if (countHeartBoss == 5) {
                for (var i = 0; i < arrrectMap.length; i++) {
                    if (arrrectMap[i].getTag().toString() != 1) {
                        arrrectMap[i].setVisible(false);
                    }
                }
                var BossDie = cc.TintTo.create(2, -127, -255, -127);
                arrcreeps[6].runAction(BossDie);
                speedBoss = 0.5;


            }
            //he thong hien thi
            realTimeLB.setString("Time: " + realTime.toFixed(2));
            countBomLB.setString((itemCount + 1));
            countSpeedLB.setString((countItemSpeddGame + 1));
            countKillBossLB.setString(countkillboss);
            kimLB.setString("Kim(press Z):" + countKim);
            countBomSizeLB.setString(countBoomSize);
            playerLiveLB.setString(countPlayerHeart);
            if (arrcreeps[6].visible == true) {
                if (countHeartBoss == 0) {
                    countkillboss += 10;
                    arrcreeps[6].setVisible(false);
                }
            }

            //Bomb nổ
            for (var i = 0; i < arrBombs.length; i++) {

                if (timeBB[i] == 120) {
                    checkwave(i);
                    boomSize(i);

                    cc.audioEngine.playEffect(res.Sound_bombang);
                    cc.audioEngine.setEffectsVolume(0.6);
                    if (myTimePlayerSax - myCurrentPlayerSax > 2) {
                        isAlive = checkPlayerSax();

                    }

                    destroybox();

                    // Boss
                }
                if (timeBB[i] > 120) {
                    for (var k = 0; k < arrcreeps.length; k++) {
                        if (arrcreeps[k].visible == true) {
                            var rectEnemy2 = cc.rect(arrcreeps[k].getPositionX() - arrcreeps[k].getContentSize().width / 2 * arrcreeps[k].getScaleX(),
                                arrcreeps[k].getPositionY() - arrcreeps[k].getContentSize().height / 2 * arrcreeps[k].getScaleY(),
                                arrcreeps[k].getContentSize().width * arrcreeps[k].getScaleX(),
                                arrcreeps[k].getContentSize().width * arrcreeps[k].getScaleY());
                            if (checkBomNew(rectEnemy2) == false) {
                                creepLive[k] = 0;
                                if (k == 6) {
                                    heart[countHeartBoss - 1].setVisible(false);
                                    isBossBomb = false;
                                }
                                else {
                                    arrcreeps[k].setTexture(res.GhostCr_png);
                                }

                            }

                        }
                    }
                }


                if (timeBB[i] == 130) {
                    arrBombs[i].setVisible(false);
                    bomleft[i].setVisible(false);
                    bomdown[i].setVisible(false);
                    bomright[i].setVisible(false);
                    bomup[i].setVisible(false);
                    countBomb = countBomb + 1;
                    if (isBossBomb == false) {
                        countHeartBoss -= 1;

                    }
                    delete timeBB[i];

                }
                isBossBomb = true;
            }

// nhan vat khi trung boom
            if (isAlive == false) {
                player.setTexture(res.SaxNuoc_png);
                if (popupSax.visible==false){
                    popupSax.setVisible(true);
                }
                myCurrentPlayerSax = myTimePlayerSax;
                speed = 0.5;
            }

        }

    },
    touchEvent: function (sender, type) {

        switch (type) {
            case ccui.Widget.TOUCH_BEGAN:
                break;
            case ccui.Widget.TOUCH_ENDED:
                cc.director.popScene();
                break;
        }
    },
    textFieldEvent: function (sender, type) {
        switch (type) {
            case ccui.TextField.EVENT_ATTACH_WITH_IME:
                break;
            case ccui.TextField.EVENT_INSERT_TEXT:
                cc.log(userNameLB.string);
                break;
        }
    }
});


startGame = function (game) {
    arrMap = arrMap2;
    arrrectMap = [];
    bomup = [];
    bomleft = [];
    bomright = [];
    bomdown = [];
    sizelefts = [];
    sizeups = [];
    sizedowns = [];
    sizerights = [];
    gameOverNow = true;
    gameWinNow = true;
    itemCount = 0;
    countkillboss = 0;
    countHeartBoss = 10;
    mytime = 0;
    mytime2 = 0;
    mycurrentime = 0;
    weight = 0;
    speed = 2;
    isAlive = true;
    realTime = 0;
    checkPlayer = true;
    countBomb = 0;
    countItemSpeddGame = 0;
    countBoomSize = 1;
    timer = 0;
    bossDie = 0;
    checkbossDie = 0;
    isBossBomb = true;
    countPlayerHeart = 5;
    myTimePlayer = 0;
    myCurrentPlayer = 0;
    myTimePlayerSax = 0;
    myCurrentPlayerSax = 0;
    checkPlayer = true;
    arrBombs = [];
    timeBB = [];

    var size = cc.director.getWinSize();
    // cc.audioEngine.playMusic(res.Playgame_sound, 3);

    var backGr = new cc.Sprite(res.Map_png);
    backGr.setAnchorPoint(cc.p(0.5, 0.5));
    backGr.setPosition(size.width / 2, size.height / 2);
    game.addChild(backGr);
    additemsBoom(game);
    additemsShoe(game);
    additemsBoomSize(game);

    addCreep(game);

    creatMap(game, arrMap);

    creatPlayer(game);
    userName(game);
    bossHeart(game);
    popupSaxPlayer();

    var cancel = new ccui.Button();
    cancel.loadTextures(res.BtnCancel_png, res.BtnCancel2_png);
    cancel.x = size.width - 50;
    cancel.y = 50;
    cancel.addTouchEventListener(game.touchEvent, game);
    game.addChild(cancel);

    avtPlayer = new cc.Sprite(avtplayerback);
    avtPlayer.setAnchorPoint(cc.p(0.5, 0.5));
    avtPlayer.setPosition(size.width - 100, size.height - 170);
    avtPlayer.setScale(0.4);
    game.addChild(avtPlayer, 0);

    win = new cc.Sprite(res.win_png);
    win.setAnchorPoint(cc.p(0.5, 0.5));
    win.setPosition(size.width / 2, size.height / 2);
    win.setScale(0.5);
    win.setVisible(false);
    game.addChild(win, 0);


    GamekeyX = function () {
        console.log("press keyX")
    },

        GamekeyZ = function () {
            console.log("press keyZ")
        },

        GamekeySpace = function () {
            console.log("press keySpace")
        },

        GamekeyEnter = function () {
            console.log("press keyEnter")
        },

        GamekeyEsc = function () {
            console.log("press keyEsc")
        },
        move = function () {

            for (var i = 0; i < timeBB.length; i++) {
                timeBB[i] += 1;
            }
            if (keyZ) {
            }
            if (keyRight) {
                speedX = 1;
            }
            else if (keyLeft) {
                speedX = -1;
            }
            else speedX = 0;

            if (keyUp) {
                speedY = 1;
            }
            else if (keyDown) {
                speedY = -1;
            }
            else speedY = 0;
            if (keyLeft) setLeft();
            if (keyRight) setRight();
            if (keyUp) setUp();
            if (keyDown) setDown();
            if (keyLeft || keyRight || keyDown || keyUp) {
                moveGame();

            }
            if (keySpace) {
                9
                if (arrBombs.length <= countBomb && checkBombSmall() == true) {
                    creatBoom(game);
                }
            }
        },
        setLeft = function () {
            player.setTexture(arrPlayer[1]);
        },
        setRight = function () {
            player.setTexture(arrPlayer[2]);
        },
        setUp = function () {
            player.setTexture(arrPlayer[3]);
        },
        setDown = function () {
            player.setTexture(arrPlayer[0]);
        },


        checkMap = function (rect) {
            for (var i = 0; i < arrrectMap.length; i++) {
                if (arrrectMap[i].visible == true) {
                    var rectEnemy = cc.rect((arrrectMap[i].getPositionX() + 0.5) - arrrectMap[i].getContentSize().width / 2 * arrrectMap[i].getScaleX(),
                        (arrrectMap[i].getPositionY() + 0.5) - arrrectMap[i].getContentSize().height / 2 * arrrectMap[i].getScaleY(),
                        (arrrectMap[i].getContentSize().width - 1) * arrrectMap[i].getScaleX(),
                        (arrrectMap[i].getContentSize().height - 1) * arrrectMap[i].getScaleY());
                    if (cc.rectIntersectsRect(rect, rectEnemy)) {
                        return false;
                    }
                }

            }
            return true;
        }

};


var rectHero = null;
var creepLive = [];
var speedBoss = 1;
var win = null;
var timeplayerdie;
var Gamelayers = cc.Layer.extend({
    init: function () {
        this._super();
        game = this;
        startGame(game);
        score(game);
        countItemBoom(game);
        countItemSpeed(game);
        countKillBoos(game);
        playerLive(game);
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
                                player.setPosition(cc.p(795, 75));
                                player.setOpacity(0);
                                player.setTexture(res.BeBongDown_png);

                                var FadedInPlayer = cc.FadeIn.create(2);
                                player.runAction(FadedInPlayer);

                                speed=2;
                                countKim= countKim-1;
                                isAlive=true;
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
        if (countkillboss==20){
            for (var i=0;i<arrrectMap.length;i++){
                arrrectMap[i].setVisible(false);
            }
            arrMap=[];
            arrMap=arrMap3;
            startGame(game);
            }
        if (countHeartBoss == 5) {
            var BossDie = cc.TintTo.create(2, -127, -255, -127);
            arrcreeps[6].runAction(BossDie);
            speedBoss = 0.5;
        }
        if (arrcreeps.length == 0) {
            win.setVisible(true);
        }
        for (var k = 0; k < creepLive.length; k++) {
            creepLive[k] += dt;
            if (creepLive[k] > 0.1 && k != 6) {
                arrcreeps[k].setVisible(false);
                creepLive[k] = 0;

            }
        }
        var size = cc.director.getWinSize();
        mytime += dt;
        timer += dt;
        bossDie += dt;
        myTimePlayer += dt;
        myTimePlayerSax += dt;
        timeplayerdie += dt;
        move();
        playertoDie();

        AI(size);
        //set thời gian game
        realTime += dt;

        if (countHeartBoss==5){
            for (var i=0;i<arrrectMap.length;i++){
                if (arrrectMap[i].getTag().toString()!=1){
                    arrrectMap[i].setVisible(false);

                }
            }
        }
        realTimeLB.setString("Time: " + realTime.toFixed(2));
        countBomLB.setString((itemCount + 1));
        countSpeedLB.setString((countItemSpeddGame + 1));
        countKillBossLB.setString(countkillboss);
        kimLB.setString("Kim(press Z):"+countKim);
        playerLiveLB.setString(countPlayerHeart);
        //Bomb nổ
        if (countHeartBoss == 0) {
            arrcreeps[6].setVisible(false);
        }
        for (var i = 0; i < arrBombs.length; i++) {
            if (timeBB[i] == 120) {
                arrBombs[i].setTexture(res.BoomBang_png);
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
                        if (checkBoom(rectEnemy2) == false) {
                            creepLive[k] = 0;
                            if (k == 6) {
                                heart[countHeartBoss - 1].setVisible(false);
                                isBossBomb = false;
                            }
                            else {
                                arrcreeps[k].setTexture(res.GhostCr_png);
                                countkillboss = countkillboss + 1;

                            }

                        }

                    }
                }
            }


            if (timeBB[i] == 130) {
                arrBombs[i].setVisible(false);
                countBomb = countBomb + 1;
                if (isBossBomb == false) {
                    countHeartBoss -= 1;

                }
                delete timeBB[i];

            }
            isBossBomb = true;
        }

//nhan vat khi trung boom
        if (isAlive == false) {
            player.setTexture(res.SaxNuoc_png);
            speed = 0.5;
            myCurrentPlayerSax = myTimePlayerSax;


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
    }
});


    moveGame = function () {

        checkItemGame(rectHero, itemBombs);
        checkItemGame(rectHero, itemShoes);
        x_sprite = player.getPosition().x;
        y_sprite = player.getPosition().y;
        xK = x_sprite;
        yK = y_sprite;
        xR = (x_sprite + speedX * speed)*player.getScaleX();
        yR = (y_sprite + speedY * speed)*player.getScaleY();
        var rectHeroDemo = cc.rect(xR+4 - player.getContentSize().width / 2 * player.getScaleX(),
            yR+4 - player.getContentSize().width / 2 * player.getScaleY(),
            (player.getContentSize().width-8)  * player.getScaleX(),
            (player.getContentSize().width-8) * player.getScaleY());
        if (checkPlayerGame(rectHeroDemo) == false) {
            xR = xK;
            yR = yK;

        }
    player.setPosition(cc.p(xR, yR));
    },

    startGame = function (game) {
        itemCount = 0;
        countkillboss=0;
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
        countkillboss = 0;
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


        var backGr = new cc.Sprite(res.Map_png);
        backGr.setAnchorPoint(cc.p(0.5, 0.5));
        backGr.setPosition(size.width / 2, size.height / 2);
        // backGr.setScale(0.8);
        game.addChild(backGr);
        additemsBoom(game);
        additemsShoe(game);
        creatMap(game, arrMap);
        creatPlayer(game);
        addCreep(game);

        userName(game);
        bossHeart(game);


        var cancel = new ccui.Button();
        cancel.loadTextures(res.BtnCancel_png, res.BtnCancel2_png);
        cancel.x = size.width - 50;
        cancel.y = 50;
        cancel.addTouchEventListener(game.touchEvent, game);
        game.addChild(cancel);
        var avtPlayer = new cc.Sprite(res.AvtBeBong1_png);
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
               if(keyZ){

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
                    if (arrBombs.length <= countBomb && checkBombSmall() == true) {
                        creatBoom(game);
                    }
                }
            },
            setLeft = function () {
                player.setTexture(res.BeBongLeft_png);
            },
            setRight = function () {
                player.setTexture(res.BeBongRight_png);
            },
            setUp = function () {
                player.setTexture(res.BeBongUp_png);
            },
            setDown = function () {
                player.setTexture(res.BeBongDown_png);
            },


            checkPlayerGame = function (rect) {
                for (var i = 0; i < arrrectMap.length; i++) {
                    if (arrrectMap[i].visible == true) {
                        var rectEnemy = cc.rect((arrrectMap[i].getPositionX() + 1) - arrrectMap[i].getContentSize().width / 2 * arrrectMap[i].getScaleX(),
                            (arrrectMap[i].getPositionY() + 1) - arrrectMap[i].getContentSize().height / 2 * arrrectMap[i].getScaleY(),
                            (arrrectMap[i].getContentSize().width - 2) * arrrectMap[i].getScaleX(),
                            (arrrectMap[i].getContentSize().height - 2) * arrrectMap[i].getScaleY());
                        if (cc.rectIntersectsRect(rect, rectEnemy)) {
                            return false;
                        }
                    }

                }
                return true;
            }

    };


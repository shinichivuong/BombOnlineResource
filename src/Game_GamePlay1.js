var Gamelayers = cc.Layer.extend({
    init: function () {
        this._super();
        var game = this;
        startGame(game);
        score(game);
        countItemBoom(game);
        countItemSpeed(game);
        countKillBoos(game);
        playerLive(game);
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
        var size = cc.director.getWinSize();
        mytime = mytime + dt;
        timer = timer + dt;
        bossDie = bossDie + dt;
        move();

        AI(size);
        //set thời gian game
        realTime += dt;
        realTimeLB.setString("Time: " + realTime.toFixed(2));
        countBomLB.setString((itemCount + 1));
        countSpeedLB.setString((countItemSpeddGame + 1));
        countKillBossLB.setString(countkillboss);
        playerLiveLB.setString(countPlayerHeart);
        //Bomb nổ
        if (countHeartBoss==0){
            arrcreeps[5].setVisible(false);
            chat.setVisible(false);
        }
        for (var i = 0; i < arrBombs.length; i++) {
            if (timeBB[i] > 120) {
                arrBombs[i].setTexture(res.BoomBang_png);
                isAlive = checkPlayerSax();
                destroybox();
                //Boss
                for (var k = 0; k < arrcreeps.length; k++) {
                    if (arrcreeps[k].visible == true) {
                        var rectEnemy2 = cc.rect(arrcreeps[k].getPositionX() - arrcreeps[k].getContentSize().width / 2 * arrcreeps[k].getScaleX(),
                            arrcreeps[k].getPositionY() - arrcreeps[k].getContentSize().height / 2 * arrcreeps[k].getScaleY(),
                            arrcreeps[k].getContentSize().width * arrcreeps[k].getScaleX(),
                            arrcreeps[k].getContentSize().width * arrcreeps[k].getScaleY());
                        if (checkBoom(rectEnemy2) == false) {
                            if (k == 5) {
                                heart[countHeartBoss - 1].setVisible(false);
                                isBossBomb = false;
                            }
                            else {
                                arrcreeps[k].setTexture(res.GhostCr_png);
                                arrcreeps[k].setVisible(false);
                                // checkbossDie=bossDie;
                                countkillboss = countkillboss + 1;
                            }

                        }

                    }
                }


            }
            if (timeBB[i] > 130) {
                arrBombs[i].setVisible(false);
                countBomb = countBomb + 1;
                if (isBossBomb==false){
                    countHeartBoss -= 1;

                }
                delete timeBB[i];

            }
            isBossBomb=true;
        }

//nhan vat khi trung boom
        if (isAlive == false) {
            player.setTexture(res.SaxNuoc_png);
            speed = 0.5;
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

AI = function (size) {
    if (mytime - mytime2 > 1) {
        for (var i = 0; i < 7; i++) {
            huong[i] = generateDirection();
            var pos = arrcreeps[i].getPosition();
            var skipeX = pos.x;
            var skipeY = pos.y;


            if (huong[i].x == 0 && huong[i].y == 45) {
                if (i == 5) {
                    arrcreeps[i].setTexture(res.BigBossUp_png);

                }
                else {
                    arrcreeps[i].setTexture(res.Creepup_png);

                }
            }
            if (huong[i].x == 45 && huong[i].y == 0) {
                if (i == 5) {
                    arrcreeps[i].setTexture(res.BigBossRight_png);

                }
                else {
                    arrcreeps[i].setTexture(res.Creepright_png);
                }
            }
            if (huong[i].x == (-45) && huong[i].y == 0) {
                if (i == 5) {
                    arrcreeps[i].setTexture(res.BigBossLeft_png);

                }
                else {
                    arrcreeps[i].setTexture(res.Creepleft_png);
                }
            }
            if (huong[i].x == 0 && huong[i].y == (-45)) {
                if (i == 5) {
                    arrcreeps[i].setTexture(res.BigBossDown_png);

                }
                else {
                    arrcreeps[i].setTexture(res.Creepdown_png);
                }
            }
            var point = cc.pAdd(pos, huong[i]);

            var rectCreep = cc.rect(point.x - arrcreeps[i].getContentSize().width / 2 * arrcreeps[i].getScaleX(),
                point.y - arrcreeps[i].getContentSize().width / 2 * arrcreeps[i].getScaleY(),
                arrcreeps[i].getContentSize().width  * arrcreeps[i].getScaleX(),
                arrcreeps[i].getContentSize().width  * arrcreeps[i].getScaleY());
            if (checkPlayerGame(rectCreep) == false || checkBoom(rectCreep) == false || point.x > size.width || point.x < 0 || point.y < 0 || point.y > size.height) {
                point.x = skipeX;
                point.y = skipeY;
            }
            mytime2 = mytime;
            sprite_action2 = new cc.MoveTo(1, point);
            arrcreeps[i].runAction(sprite_action2);
            if (i == 5) {
                for (var j = 0; j < countHeartBoss; j++) {
                    actionHeart = new cc.MoveTo(1, cc.p(point.x - arrcreeps[5].getContentSize().width / 3 + j * 10, point.y + 80));
                    heart[j].runAction(actionHeart);
                }
                actionChat= new cc.moveTo(1,cc.p(point.x, point.y + 130));
                chat.runAction(actionChat);
            }

        }
    }

},
    moveGame = function () {
        var rectHero = cc.rect(player.getPositionX() - player.getContentSize().width / 2 * player.getScaleX(),
            player.getPositionY() - player.getContentSize().width / 2 * player.getScaleY(),
            player.getContentSize().width * player.getScaleX(),
            player.getContentSize().width * player.getScaleY());
        if (checkDie(rectHero) == false) {
            countPlayerHeart-=1;
            player.setTexture(res.Ghost_png);

        }
        checkItemGame(rectHero, itemBombs);
        checkItemGame(rectHero, itemShoes);
        x_sprite = player.getPosition().x;
        y_sprite = player.getPosition().y;
        xK = x_sprite;
        yK = y_sprite;
        xR = x_sprite + speedX * speed;
        yR = y_sprite + speedY * speed;
        var rectHeroDemo = cc.rect(xR - player.getContentSize().width / 2 * player.getScaleX(),
            yR - player.getContentSize().width / 2 * player.getScaleY(),
            player.getContentSize().width / 2 * player.getScaleX(),
            player.getContentSize().width / 2 * player.getScaleY());
        if (checkPlayerGame(rectHeroDemo) == false) {
            xR = xK;
            yR = yK;
            cc.log("false");
        }
        // sprite_action = new cc.MoveTo(0, cc.p(xR, yR));
        // player.runAction(sprite_action);
        // }
        player.setPosition(cc.p(xR, yR));


    },
    startGame = function (game) {
        checkPlayer = true;
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
                // mytime += 1;
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
                        var rectEnemy = cc.rect(arrrectMap[i].getPositionX()+1 - arrrectMap[i].getContentSize().width / 2 * arrrectMap[i].getScaleX(),
                            arrrectMap[i].getPositionY()+1 - arrrectMap[i].getContentSize().height / 2 * arrrectMap[i].getScaleY(),
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


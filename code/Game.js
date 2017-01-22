var glState = glState||{};

glState.Game = class {
	constructor() {
		let self = this;
		this.BORDER_LEFT = 90;
		this.BORDER_RIGHT = 610;
		this.BORDER_UP = 100;
		this.BORDER_DOWN = 300;
		this.generateBullets = function*() {
			let pattern = 0;
			let data = {};
			while (true) {
				switch (pattern) {
					case 0:
						if (self.frameTimer >= 100){
							pattern = 1;
						}
						yield;
						break;
					case 1:
						data.x = Math.floor(Math.random()*2)*600+50;
						data.y = Math.random()*300+100;
						if (data.x > 400) {
							data.vx = -1;
						} else {
							data.vx = 1;
						}
						for (let i = 0; i < 10; i++) {
							if (i%3 === 0) {
								self.shoot(self.bowl, {
									vx: data.vx*175,
									x: data.x,
									y: data.y,
									ay: 150,
									absoluteX: true,
									absoluteY: true,
									img: "fire",
									waveY: 8
								});
							}
							yield;
						}
						for (let i = 0; i < 10; i++) {
							yield;
						}
						yield;
						if (self.frameTimer >= 300){
							pattern = 2;
						}
						break;
					case 2:
						if (self.frameTimer%12 === 0) {
							data.x = Math.floor(Math.random()*2)*600+50;
							data.y = Math.random()*300+100;
							if (data.x > 400) {
								data.vx = -1;
							} else {
								data.vx = 1;
							}
						}
						if (self.frameTimer%3 === 0) {
							self.shoot(self.bowl, {
								vx: data.vx*175,
								x: data.x,
								y: data.y,
								ay: 150,
								absoluteX: true,
								absoluteY: true,
								img: "fire",
								waveY: 8
							});
						}
						if (self.frameTimer >= 600){
							pattern = 3;
						}
						yield;
						break;
					case 3:
						if (self.frameTimer%240 === 0) {
							this.shoot(self.bowl, {
								x: Math.random()*144+50,
								y: 25,
								vy: -322,
								vx: Math.random()*220-110,
								img: "popcorn" + Math.floor(Math.random()*5+1),
								ay: 200,
								angleVel: Math.random()*200-100
							});

							this.playRandomPop();
						}
						if (self.frameTimer%12 === 0) {
							data.x = Math.floor(Math.random()*2)*600+50;
							data.y = Math.random()*300+100;
							if (data.x > 400) {
								data.vx = -1;
							} else {
								data.vx = 1;
							}
						}
						if (self.frameTimer%3 === 0) {
							self.shoot(self.bowl, {
								vx: data.vx*175,
								x: data.x,
								y: data.y,
								ay: 150,
								absoluteX: true,
								absoluteY: true,
								img: "fire",
								waveY: 8
							});
						}
						if (self.frameTimer > 900) {
							pattern = 4;
						}
						yield;
						break;
					case 4:
						if (self.frameTimer%110 === 0) {
							this.shoot(self.bowl, {
								x: Math.random()*144+50,
								y: 25,
								vy: -322,
								vx: Math.random()*220-110,
								img: "popcorn" + Math.floor(Math.random()*5+1),
								ay: 200,
								angleVel: Math.random()*200-100

							});
							this.playRandomPop();
						}
						if (self.frameTimer%12 === 0) {
							data.x = Math.floor(Math.random()*2)*600+50;
							data.y = Math.random()*300+100;
							if (data.x > 400) {
								data.vx = -1;
							} else {
								data.vx = 1;
							}
						}
						if (self.frameTimer%3 === 0) {
							self.shoot(self.bowl, {
								vx: data.vx*175,
								x: data.x,
								y: data.y,
								ay: 150,
								absoluteX: true,
								absoluteY: true,
								img: "fire",
								waveY: 8
							});
						}
						if (self.frameTimer > 1200) {
							pattern = 5;
						}
						yield;
						break;
					case 5:
						if (self.frameTimer%65 === 0) {
							this.shoot(self.bowl, {
								x: Math.random()*144+50,
								y: 25,
								vy: -322,
								vx: Math.random()*220-110,
								img: "popcorn" + Math.floor(Math.random()*5+1),
								ay: 200,
								angleVel: Math.random()*200-100

							});
							this.playRandomPop();
						}
						if (self.frameTimer%12 === 0) {
							data.x = Math.floor(Math.random()*2)*600+50;
							data.y = Math.random()*300+100;
							if (data.x > 400) {
								data.vx = -1;
							} else {
								data.vx = 1;
							}
						}
						if (self.frameTimer%3 === 0) {
							self.shoot(self.bowl, {
								vx: data.vx*175,
								x: data.x,
								y: data.y,
								ay: 150,
								absoluteX: true,
								absoluteY: true,
								img: "fire",
								waveY: 8
							});
						}
						if (self.frameTimer > 1500) {
							pattern = 6;
						}
						yield;
						break;
					case 6:
						if (self.frameTimer%60 === 0) {
							this.shoot(self.bowl, {
								x: Math.random()*144+50,
								y: 25,
								vy: -322,
								vx: Math.random()*220-110,
								img: "popcorn" + Math.floor(Math.random()*5+1),
								ay: 200,
								angleVel: Math.random()*200-100

							});
							this.playRandomPop();
						}
						if (self.frameTimer%10 === 0) {
							data.x = Math.floor(Math.random()*2)*600+50;
							data.y = Math.random()*300+100;
							if (data.x > 400) {
								data.vx = -1;
							} else {
								data.vx = 1;
							}
						}
						if (self.frameTimer%2 === 0) {
							self.shoot(self.bowl, {
								vx: data.vx*200,
								x: data.x,
								y: data.y,
								ay: 150,
								absoluteX: true,
								absoluteY: true,
								img: "fire",
								waveY: 8
							});
						}
						if (self.frameTimer > 1800) {
							pattern = 7;
						}
						yield;
						break;
					case 7:
						if (self.frameTimer%60 === 0) {
							this.shoot(self.bowl, {
								x: Math.random()*144+50,
								y: 25,
								vy: -322,
								vx: Math.random()*220-110,
								img: "popcorn" + Math.floor(Math.random()*5+1),
								ay: 200,
								angleVel: Math.random()*200-100

							});
							this.playRandomPop();
						}
						if (self.frameTimer%10 === 0) {
							data.x = Math.floor(Math.random()*2)*600+50;
							data.y = Math.random()*300+100;
							if (data.x > 400) {
								data.vx = -1;
							} else {
								data.vx = 1;
							}
						}
						if (self.frameTimer%2 === 0) {
							self.shoot(self.bowl, {
								vx: data.vx*200,
								x: data.x,
								y: data.y,
								ay: 150,
								absoluteX: true,
								absoluteY: true,
								img: "fire",
								waveY: 8
							});
						}
						if (self.frameTimer%369 === 0) {
							if (self.frameTimer%2) {
								data.lazorX = Math.random()*200+50;
							} else {
								data.lazorX = Math.random()*200+410;
							}
							this.lazorSound.play();
						}
						if (self.frameTimer%369 < 60 && data.lazorX) {
							self.shoot(self.bowl, {
								vy: -600,
								x: data.lazorX,
								y: 600,
								absoluteX: true,
								absoluteY: true,
								img: "lazor",
							});
						}
						if (self.frameTimer > 2400) {
							pattern = 8;
						}
						yield;
						break;
					case 8:
						if (self.frameTimer%60 === 0) {
							this.shoot(self.bowl, {
								x: Math.random()*144+50,
								y: 25,
								vy: -322,
								vx: Math.random()*220-110,
								img: "popcorn" + Math.floor(Math.random()*5+1),
								ay: 200,
								angleVel: Math.random()*200-100

							});
							this.playRandomPop();
						}
						if (self.frameTimer%10 === 0) {
							data.x = Math.floor(Math.random()*2)*600+50;
							data.y = Math.random()*300+100;
							if (data.x > 400) {
								data.vx = -1;
							} else {
								data.vx = 1;
							}
						}
						if (self.frameTimer%2 === 0) {
							self.shoot(self.bowl, {
								vx: data.vx*200,
								x: data.x,
								y: data.y,
								ay: 150,
								absoluteX: true,
								absoluteY: true,
								img: "fire",
								waveY: 8
							});
						}
						if (self.frameTimer%369 === 0) {
							data.lazorX = Math.random()*200+50;
							data.lazorX2 = Math.random()*200+410;
							this.lazorSound.play();
						}
						if (self.frameTimer%369 < 60 && data.lazorX) {
							self.shoot(self.bowl, {
								vy: -600,
								x: data.lazorX,
								y: 600,
								absoluteX: true,
								absoluteY: true,
								img: "lazor",
							});
							self.shoot(self.bowl, {
								vy: -600,
								x: data.lazorX2,
								y: 600,
								absoluteX: true,
								absoluteY: true,
								img: "lazor",
							});
						}
						if (self.frameTimer > 3000) {
							pattern = 9;
						}
						yield;
						break;
					case 9:
						if (self.frameTimer%100 === 69) {
							for (let i = 0; i < 5; i++) {
								this.shoot(self.bowl, {
									x: Math.random()*28.8+10+28.8*i,
									y: 25,
									vy: -322,
									vx: Math.random()*44-22+44*i,
									img: "popcorn" + Math.floor(Math.random()*5+1),
									ay: 200,
									angleVel: Math.random()*200-100
								});

								this.playRandomPop();
							}
						}
						if (self.frameTimer%10 === 0) {
							data.x = Math.floor(Math.random()*2)*600+50;
							data.y = Math.random()*300+100;
							if (data.x > 400) {
								data.vx = -1;
							} else {
								data.vx = 1;
							}
						}
						if (self.frameTimer%2 === 0) {
							self.shoot(self.bowl, {
								vx: data.vx*200,
								x: data.x,
								y: data.y,
								ay: 150,
								absoluteX: true,
								absoluteY: true,
								img: "fire",
								waveY: 8
							});
						}
						if (self.frameTimer%369 === 0) {
							data.lazorX = Math.random()*200+50;
							data.lazorX2 = Math.random()*200+410;
							this.lazorSound.play();
						}
						if (self.frameTimer%369 < 60 && data.lazorX) {
							self.shoot(self.bowl, {
								vy: -600,
								x: data.lazorX,
								y: 600,
								absoluteX: true,
								absoluteY: true,
								img: "lazor",
							});
							self.shoot(self.bowl, {
								vy: -600,
								x: data.lazorX2,
								y: 600,
								absoluteX: true,
								absoluteY: true,
								img: "lazor",
							});
						}
						if (self.frameTimer > 4000) {
							pattern = 10;
						}
						yield;
						break;
					case 10:
						if (self.frameTimer%20 === 0) {
							this.shoot(self.bowl, {
								x: Math.random()*144+50,
								y: 25,
								vy: -322,
								vx: Math.random()*220-110,
								img: "popcorn" + Math.floor(Math.random()*5+1),
								ay: 200,
								angleVel: Math.random()*200-100

							});
							this.playRandomPop();
						}
						if (self.frameTimer%10 === 0) {
							data.x = Math.floor(Math.random()*2)*600+50;
							data.y = Math.random()*300+100;
							if (data.x > 400) {
								data.vx = -1;
							} else {
								data.vx = 1;
							}
						}
						if (self.frameTimer%2 === 0) {
							self.shoot(self.bowl, {
								vx: data.vx*225,
								x: data.x,
								y: data.y,
								ay: 150,
								absoluteX: true,
								absoluteY: true,
								img: "fire",
								waveY: 8
							});
						}
						if (self.frameTimer%369 === 0) {
							data.lazorX = Math.random()*200+50;
							data.lazorX2 = Math.random()*200+410;
						}
						if (self.frameTimer%369 === 15) {
							this.lazorSound.play();
						}
						if (self.frameTimer%369 < 60 && data.lazorX) {
							self.shoot(self.bowl, {
								vy: -600,
								x: data.lazorX,
								y: 600,
								absoluteX: true,
								absoluteY: true,
								img: "lazor",
							});
							self.shoot(self.bowl, {
								vy: -600,
								x: data.lazorX2,
								y: 600,
								absoluteX: true,
								absoluteY: true,
								img: "lazor",
							});
						}
						if (self.frameTimer%10 === 0) {
							self.shoot(this.bowl,{
								x: self.player.x,
								y: 600,
								vx: -100,
								absoluteX: true,
								absoluteY: true,
								img: "fire",
								waveX: 8
							});
						}
						yield;
						break;
					default:
						console.error("something went wrong with pattern id - reverting to default");
						pattern = 0;
				}
			}
		};
	}
	create() {
		this.microwave = game.add.audio('microwave');
		this.microwave.loop = true;
		this.microwave.play();
		this.saltsound = game.add.audio('saltsound');
		this.bibend = game.add.audio('bibend');
		this.bulletPtr = 0;
		glState.score = 0;
		this.gameover = false;
		this.gameoverFrame = 0;
		this.popSound1 = game.add.audio('pop1');
		this.popSound2 = game.add.audio('pop2');
		this.popSound3 = game.add.audio('pop3');
		this.popSound4 = game.add.audio('pop4');
		this.popSound5 = game.add.audio('pop5');
		this.lazorSound = game.add.audio('lazorSound');
		this.bulletPtr = 0;
		glState.score = 0;
		this.saltValue = 1000;
		this.frameTimer = 0;
		this.spawnBullets = this.generateBullets();
		this.bounds = new Phaser.Rectangle(68, 75, 568, 448);
		this.add.sprite(0,0,"bg2");
		this.player = this.add.sprite(128,128,"player");
		game.physics.arcade.enable(this.player);
		this.player.body.setCircle(6);
		game.physics.arcade.enable(this.player);
		this.bowlAnim = 0;
		this.bowlSpriteArray = [];
		for (let i = 0; i <= 9; i++) {
			this.bowlSpriteArray.push('bowl'+i);
		}
		this.bowl = this.add.sprite(229,350,this.bowlSpriteArray[0]);
		this.bullets = this.add.group();
		for (let i = 0; i < 500; i++) {
			this.bullets.add(new Bullet());
		}
		this.add.sprite(68,54,"glass");
		this.add.sprite(0,0,"border");
		this.createSalt();
		this.add.sprite(637,470,"sticky");

		//Display score
		this.scoreInfo = this.game.add.text(660, 86, "", { fill:"#00ff00" } );
		this.scoreInfo.font = 'VT323';
		this.scoreInfo.text = "SCORE:";
		this.displayscore = this.game.add.text(684, 108, "", { fill:"#00ff00" } );
		this.displayscore.font = 'VT323';
		this.displayscore.text = "000000000";
		this.hiScoreInfo = this.game.add.text(660, 130, "", { fill:"#00ff00" } );
		this.hiScoreInfo.font = 'VT323';
		this.hiScoreInfo.text = "HI-SCORE:";
		this.displayhiScore = this.game.add.text(684, 152, "", { fill:"#00ff00" } );
		this.displayhiScore.font = 'VT323';
		this.displayhiScore.text = Math.floor(glState.hiScore);

		this.displayhiScore.text = (() => {
			let scoreStr = "" + Math.floor(glState.hiScore);
			let retStr = "";
			for (var i = 0; i < 9-scoreStr.length; i++) {
				retStr += "0";
			}
			retStr += scoreStr;
			return retStr;
		})();
		//bounds
		this.bounds = [
			this.add.sprite(null,0,0),
			this.add.sprite(null,0,0),
			this.add.sprite(null,0,0),
			this.add.sprite(null,0,0)
		];
		this.bounds.forEach(i => {
			game.physics.arcade.enable(i);
			i.body.immovable = true;
			i.visible = false;
		});
		this.bounds[0].body.setSize(this.BORDER_LEFT,600,0,0); //left
		this.bounds[1].body.setSize(400,600,this.BORDER_RIGHT,0); //right
		this.bounds[2].body.setSize(800,this.BORDER_UP,0,0); //top
		this.bounds[3].body.setSize(800,400,0,this.BORDER_DOWN); //bottom
	}
	update() {
		if (this.gameover) {
			if (this.gameoverFrame === 0) {
				this.microwave.stop();
				this.player.kill();
				this.shoot(this.player,{
					vy:-100,
					img: "popcorn" + Math.floor(Math.random()*5+1),
					ay: 200,
					angleVel: Math.random()*200-100
				});
				this.playRandomPop();
				this.bibend.play();
				if (glState.score > glState.hiScore) {
					glState.hiScore = glState.score;
					localStorage.POP_SCORE = glState.hiScore;
				}
			}
			if (this.gameoverFrame === 300) {
				game.state.start("main");
			}
			this.gameoverFrame++;
		} else {
			this.checkAlive();
			this.physics.arcade.overlap(this.player, this.salt, this.saltPick, null, this);
			this.movePlayer();
			this.bounds.forEach(i => {
				game.physics.arcade.collide(this.player,i);
				i.visible = false;
			});
			this.bounds.forEach(i => {
				this.physics.arcade.overlap(this.salt,i,this.resetSalt, null, this);
			});

			this.spawnBullets.next();
			glState.score += 20;
			this.displayscore.text = (() => {
				let scoreStr = "" + Math.floor(glState.score);
				let retStr = "";
				for (var i = 0; i < 9-scoreStr.length; i++) {
					retStr += "0";
				}
				retStr += scoreStr;
				return retStr;
			})();
			this.frameTimer++;
			this.physics.arcade.overlap(this.player, this.bullets, ()=>{this.gameover=true;});
			this.bowlAnim = this.bowlAnim+1;
			let bowlAnimID = Math.floor(this.bowlAnim/4)%18;
			switch (bowlAnimID) {
				case 0:
					this.bowl.loadTexture("bowl9",0);
					break;
				case 1:
					this.bowl.loadTexture("bowl1",0);
					break;
				case 2:
					this.bowl.loadTexture("bowl2",0);
					break;
				case 3:
					this.bowl.loadTexture("bowl3",0);
					break;
				case 4:
					this.bowl.loadTexture("bowl4",0);
					break;
				case 14:
					this.bowl.loadTexture("bowl5",0);
					break;
				case 15:
					this.bowl.loadTexture("bowl6",0);
					break;
				case 16:
					this.bowl.loadTexture("bowl7",0);
					break;
				case 17:
					this.bowl.loadTexture("bowl8",0);
					break;
				default:
				this.bowl.loadTexture("bowl0",0);
			}
		}
		this.bullets.children.forEach(i => {
			if (i.baseWaveY > 0) {
				if (this.frameTimer > i.waveY) {
					i.body.acceleration.y = -i.body.acceleration.y;
					i.waveY += (i.baseWaveY+1)*2;
				}
			}
			if (i.baseWaveX > 0) {
				if (this.frameTimer > i.waveX) {
					i.body.acceleration.x = -i.body.acceleration.x;
					i.waveX += (i.baseWaveX+1)*2;
				}
			}
			if (i.angleVel) {
				i.angle += i.angleVel/60;
			}
		});
	}
	movePlayer() {
		let directionX = 0;
		let directionY = 0;
		let moveSpeed = 200;
		if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
			directionY--;
		}
		if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
			directionY++;
		}
		if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
			directionX--;
		}
		if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
			directionX++;
		}
		if (directionX && directionY) {
			moveSpeed *= Math.SQRT1_2;
		}
		this.player.body.velocity.x = moveSpeed*directionX;
		this.player.body.velocity.y = moveSpeed*directionY;
	}
	shoot(src,options){
		let opts = options || {};
		opts.x = (opts.x === undefined) ? 0 : opts.x;
		opts.y = (opts.y === undefined) ? 0 : opts.y;
		opts.vx = (opts.vx === undefined) ? 0 : opts.vx;
		opts.vy = (opts.vy === undefined) ? 0 : opts.vy;
		opts.ax = (opts.ax === undefined) ? 0 : opts.ax;
		opts.ay = (opts.ay === undefined) ? 0 : opts.ay;
		opts.gx = (opts.gx === undefined) ? 0 : opts.gx;
		opts.gy = (opts.gy === undefined) ? 0 : opts.gy;
		opts.angleVel = (opts.angleVel === undefined) ? 0 : opts.angleVel;
		opts.omega = (opts.omega === undefined) ? 0 : opts.omega;
		opts.epsilon = (opts.epsilon === undefined) ? 0 : opts.epsilon;
		opts.absoluteX = !!opts.absoluteX;
		opts.absoluteY = !!opts.absoluteY;
		opts.lifespan = (opts.lifespan === undefined) ? 0 : opts.lifespan;
		opts.waveY = (opts.waveY === undefined) ? 0 : opts.waveY;
		opts.waveX = (opts.waveX === undefined) ? 0 : opts.waveX;
		opts.img = (opts.img === undefined) ? "fire" : opts.img;

		if (!opts.absoluteX) {
			opts.x += src.x;
		}
		if (!opts.absoluteY) {
			opts.y += src.y;
		}

		this.bullets.children[this.bulletPtr].reset(opts.x,opts.y);
		this.bullets.children[this.bulletPtr].lifespan = opts.lifespan;
		this.bullets.children[this.bulletPtr].body.velocity.x = opts.vx;
		this.bullets.children[this.bulletPtr].body.velocity.y = opts.vy;
		this.bullets.children[this.bulletPtr].body.acceleration.x = opts.ax;
		this.bullets.children[this.bulletPtr].body.acceleration.y = opts.ay;
		this.bullets.children[this.bulletPtr].body.gravity.x = opts.gx;
		this.bullets.children[this.bulletPtr].body.gravity.y = opts.gy;
		this.bullets.children[this.bulletPtr].body.angularVelocity = opts.omega;
		this.bullets.children[this.bulletPtr].body.angularAcceleration = opts.epsilon;
		this.bullets.children[this.bulletPtr].angleVel = opts.angleVel;
		this.bullets.children[this.bulletPtr].startTime = this.frameTimer;
		this.bullets.children[this.bulletPtr].baseWaveY = opts.waveY;
		this.bullets.children[this.bulletPtr].baseWaveX = opts.waveX;
		this.bullets.children[this.bulletPtr].waveY = this.frameTimer + opts.waveY;
		this.bullets.children[this.bulletPtr].waveX = this.frameTimer + opts.waveX;
		this.bullets.children[this.bulletPtr].loadTexture(opts.img, 0);
		this.bullets.children[this.bulletPtr].outOfboundsKill = true;
		switch (opts.img) {
			case "fire":
				this.bullets.children[this.bulletPtr].body.setCircle(6);
				break;
			case "popcorn1":
			case "popcorn2":
			case "popcorn3":
			case "popcorn4":
			case "popcorn5":
				this.bullets.children[this.bulletPtr].body.setCircle(12);
				break;
			case "lazor":
				this.bullets.children[this.bulletPtr].body.setCircle(12);
				break;
			default:
				this.bullets.children[this.bulletPtr].body.setCircle(6);
		}
		this.bullets.children[this.bulletPtr].revive();
		this.bulletPtr++;
		if (this.bulletPtr >= this.bullets.length) {
			this.bulletPtr = 0;
		}
	}
    createSalt(){
        this.salt = this.add.sprite(Math.floor((Math.random()*this.BORDER_RIGHT-this.BORDER_LEFT)+this.BORDER_LEFT),Math.floor((Math.random()*this.BORDER_DOWN-this.BORDER_UP)+this.BORDER_UP),"salt");
        game.physics.arcade.enable(this.salt);
        this.salt.anchor.setTo(0.5,0.5);
        this.salt.alive=true;
    }
		resetSalt(){
			this.salt.reset(
				Math.random()*440+130,
				Math.random()*160+120
			);
			this.salt.revive();
		}
    checkAlive(){
        if(this.salt.alive===false){
            this.resetSalt();
        }
    }
    saltKill(){
        this.salt.kill();
    }
    saltPick(){
        this.salt.kill();
		this.saltsound.play();
        console.log(this.salt.alive);
				glState.score += this.saltValue;
				this.saltValue += 10;
    }
		playRandomPop(){
			let popID = Math.floor(Math.random()*5)+1;
			this["popSound"+popID].play();
		}
};

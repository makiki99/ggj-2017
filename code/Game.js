var glState = glState||{};

var score = 0;
var highestscore = 0;
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
						if (self.frameTimer >= 480){
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
						if (self.frameTimer >= 960){
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
						if (self.frameTimer > 1600) {
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
						if (self.frameTimer > 3000) {
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
						if (self.frameTimer > 6000) {
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
						if (self.frameTimer > 9000) {
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
						if (self.frameTimer > 12000) {
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
						if (self.frameTimer > 15000) {
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
						if (self.frameTimer > 18000) {
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
		this.bulletPtr = 0;
		this.score = 0;
		this.frameTimer = 0;
		this.spawnBullets = this.generateBullets();
		this.bounds = new Phaser.Rectangle(68, 75, 568, 448);
		this.add.sprite(0,0,"bg2");
		this.player = this.add.sprite(128,128,"player");
		game.physics.arcade.enable(this.player);
		this.player.body.setCircle(6);
		game.physics.arcade.enable(this.player);
		this.bowl = this.add.sprite(240,340,"bowl");
		this.bullets = this.add.group();
		for (var i = 0; i < 2000; i++) {
			this.bullets.add(new Bullet());
		}
		this.add.sprite(68,54,"glass");
		this.add.sprite(0,0,"border");

		//Display score
		this.scoreInfo = this.game.add.text(660, 86, "", { fill:"lime" } );
		this.scoreInfo.font = 'VT323';
		this.scoreInfo.text = "SCORE:";
		this.displayscore = this.game.add.text(684, 108, "", { fill:"lime" } );
		this.displayscore.font = 'VT323';
		this.displayscore.text = "000000000";
		this.hiScoreInfo = this.game.add.text(660, 130, "", { fill:"lime" } );
		this.hiScoreInfo.font = 'VT323';
		this.hiScoreInfo.text = "HI-SCORE:";
		this.displayhiScore = this.game.add.text(684, 152, "", { fill:"lime" } );
		this.displayhiScore.font = 'VT323';
		this.displayhiScore.text = "000000000";
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
        this.player.alive = true;
        this.createSalt();
	}
	update() {
        this.checkAlive();
        this.physics.arcade.overlap(this.player, this.salt, this.saltPick, null,this)
		this.movePlayer();
		this.bounds.forEach(i => {
			game.physics.arcade.collide(this.player,i);
			i.visible = false;
		});
        this.bounds.forEach(i => {
            this.physics.arcade.overlap(this.salt,i,this.saltKill,null,this)
        })
		game.physics.arcade.collide(this.player,this.bowl);
		game.physics.arcade.collide(this.player,this.bullets,()=>{
			game.state.start("end");
		});
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
		this.spawnBullets.next();
		this.score = Math.floor(this.frameTimer * 100 / 60);
		let self = this;
		this.displayscore.text = (() => {
			let scoreStr = "" + self.score;
			let retStr = "";
			for (var i = 0; i < 9-scoreStr.length; i++) {
				retStr += "0";
			}
			retStr += scoreStr;
			return retStr;
		})();
		this.frameTimer++;
        this.physics.arcade.overlap(this.player, this.bullets, this.gameover, null, this)
        if(this.player.alive === false){
            game.state.start('end')
        }
        
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
		this.bullets.children[this.bulletPtr].revive();
		this.bulletPtr++;
		if (this.bulletPtr >= this.bullets.length) {
			this.bulletPtr = 0;
		}
	}
    gameover(){
        game.time.events.remove(this.timer)
        
        this.bullets.children.forEach(i => {
            i.body.moves = false;
        })
        this.player.body.moves = false;
        //TU WSTAW ANIMACJIE ŚMIERCI 
        this.player.alive = false
    }
    createSalt(){
        this.salt = this.add.sprite(Math.floor((Math.random()*this.BORDER_RIGHT-this.BORDER_LEFT)+this.BORDER_LEFT),Math.floor((Math.random()*this.BORDER_DOWN-this.BORDER_UP)+this.BORDER_UP),"salt")
        game.physics.arcade.enable(this.salt);
        this.salt.anchor.setTo(0.5,0.5)
        this.salt.alive=true;
    }
    checkAlive(){
        if(this.salt.alive===false){
            this.createSalt();
        }
    }
    saltKill(){
        this.salt.kill();
        this.salt.alive=false;
    }
    saltPick(){
        this.salt.kill();
        this.salt.alive=false;
        console.log(this.salt.alive)
    }

};

var glState = glState||{};

glState.Game = class {
	constructor() {
		this.BORDER_LEFT = 90;
		this.BORDER_RIGHT = 610;
		this.BORDER_UP = 100;
		this.BORDER_DOWN = 300;
	}
	create() {
		let self = this;
		this.bulletPtr = 0;
		this.score = 0;
		this.frameTimer = 0;
		let generateBullets = function*() {
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
						if (self.frameTimer >= 600){
							pattern = 2;
						}
						break;
					case 2:
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
						yield;
						// if (self.frameTimer >= 600){
						// 	pattern = 2;
						// }
						break;
					default:
						console.error("something went wrong with pattern id - reverting to default");
						pattern = 0;
				}
			}
		};
		this.spawnBullets = generateBullets();
		this.bounds = new Phaser.Rectangle(68, 75, 568, 448);
		this.add.sprite(0,0,"bg2");
		this.player = this.add.sprite(128,128,"player");
		game.physics.arcade.enable(this.player);
		this.player.body.setCircle(6);
		this.player.inputEnabled = true;
		this.player.input.enableDrag();
		this.player.input.boundsRect = this.bounds;
		this.test = {
			x: 400,
			y: 500
		};
		game.physics.arcade.enable(this.player);
		this.bullets = this.add.group();
		for (var i = 0; i < 2000; i++) {
			this.bullets.add(new Bullet());
		}
		this.bowl = this.add.sprite(240,340,"bowl");
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
	}
	update() {
		// temp
		// this.shoot(this.test, {
		// 	x: 100,
		// 	y: 300,
		// 	vx: 0,
		// 	vy: 0,
		// 	ay: -500,
		// 	ax: 0,
		// 	absoluteX: true,
		// 	absoluteY: true,
		// 	waveY: 20,
		// });
		this.movePlayer();
		this.bounds.forEach(i => {
			game.physics.arcade.collide(this.player,i);
			i.visible = false;
		});
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
};

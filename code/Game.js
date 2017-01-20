var glState = glState||{};

glState.Game = class {
	constructor() {
		this.bulletPtr = 0;
        this.ms = 0;
        this.displayscore;
        this.score = 0;
        this.timer;
	}
	create() {
		//game.world.setBounds(68, 75, 568, 448);
		this.bounds = new Phaser.Rectangle(68, 75, 568, 448);
		this.add.sprite(0,0,"bg");
		this.player = this.add.sprite(128,128,"player");
		game.physics.arcade.enable(this.player);
		this.player.body.setCircle(2);
		this.player.inputEnabled = true;
		this.player.input.enableDrag();
		this.player.input.boundsRect = this.bounds;
		this.test = {
			x: 400,
			y: 500
		};
		game.physics.arcade.enable(this.player);
		for (var i = 0; i < 2000; i++) {
			this.bullets.add(new Bullet());
		}
        
        //Punkty/Timer
        this.timer = game.time.create(false);
        this.timer.loop(100, this.counttime, this);
        this.timer.start();
        
        //Display score
        this.displayscore = this.game.add.text(500, 500, "", { fill:"#ffffff"} );
	}
	update() {
		this.shoot(this.test, {
			x: 0,
			y: 0,
			vx: Math.random()*200-100,
			vy: Math.random()*600-300,
			gy: 100
		});
        
        this.displayscore.text = this.score;

		this.bullets = this.add.group();
		for (var i = 0; i < 2000; i++) {
			this.bullets.add(new Bullet());
		}
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
		this.bounds[0].body.setSize(68,600,0,0); //left
		this.bounds[1].body.setSize(400,600,622,0); //right
		this.bounds[2].body.setSize(800,75,0,0); //top
		this.bounds[3].body.setSize(800,400,0,512); //bottom
	}
	update() {
		//temp
		// this.shoot(this.test, {
		// 	x: 0,
		// 	y: 0,
		// 	vx: Math.random()*200-100,
		// 	vy: Math.random()*600-300,
		// 	gy: 100
		// });
		this.movePlayer();
		this.bounds.forEach(i => {
			game.physics.arcade.collide(this.player,i);
			i.visible = false;
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
		opts.gx = (opts.gx === undefined) ? 0 : opts.gx;
		opts.gy = (opts.gy === undefined) ? 0 : opts.gy;
		opts.absoluteX = !!opts.absoluteX;
		opts.absoluteY = !!opts.absoluteY;
		opts.lifespan = (opts.lifespan === undefined) ? 0 : opts.lifespan;

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
		this.bullets.children[this.bulletPtr].body.gravity.x = opts.gx;
		this.bullets.children[this.bulletPtr].body.gravity.y = opts.gy;
		this.bullets.children[this.bulletPtr].revive();
		this.bulletPtr++;
		if (this.bulletPtr >= this.bullets.length) {
			this.bulletPtr = 0;
		}
	}

    
    counttime() {
        this.ms++;
        this.score = this.ms * 100;
    }
};

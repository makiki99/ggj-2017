var glState = glState||{};

glState.Game = class {
	constructor() {
		this.bulletPtr = 0;
	}
	create() {
		this.add.sprite(0,0,"bg");
		this.player = this.add.sprite(128,128,"player");
		this.bullets = this.add.group();
		this.test = {
			x: 400,
			y: 500
		};
		game.physics.arcade.enable(this.player);
		for (var i = 0; i < 2000; i++) {
			this.bullets.add(new Bullet());
		}
	}
	update() {
		this.shoot(this.test, {
			x: 0,
			y: 0,
			vx: Math.random()*200-100,
			vy: Math.random()*600-300,
			gy: 100
		});
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
};

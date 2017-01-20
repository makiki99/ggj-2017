class Bullet extends Phaser.sprite {
	constructor() {
		super(0,0,["fire","popcorn"]);
		this.kill();
		game.physics.arcade.enable(this);
	}
}

class Bullet extends Phaser.sprite {
	constructor() {
		super(0,0,"bullet");
		this.kill();
		game.physics.arcade.enable(this);
	}
}

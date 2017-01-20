class Bullet extends Phaser.Sprite {
	constructor() {
		super(game,0,0,"popcorn");
		this.kill();
		game.physics.arcade.enable(this);
	}
}

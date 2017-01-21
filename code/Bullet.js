class Bullet extends Phaser.Sprite {
	constructor() {
		super(game,0,0,"popcorn");
		game.physics.arcade.enable(this);
		this.body.setCircle(5); //temp
		this.checkWorldBounds = true;
		this.kill();
	}
}

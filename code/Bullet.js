class Bullet extends Phaser.Sprite {
	constructor() {
		super(game,0,0,"popcorn");
		game.physics.arcade.enable(this);
		this.body.setCircle(10); //temp
		this.checkWorldBounds = true;
		this.kill();
	}
}

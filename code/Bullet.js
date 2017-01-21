class Bullet extends Phaser.Sprite {
	constructor() {
		super(game,0,0,"fire");
		game.physics.arcade.enable(this);
		this.body.setCircle(5); //temp
		this.anchor.x = 0.5;
		this.anchor.y = 0.5;
		this.checkWorldBounds = true;
		this.kill();
	}
}

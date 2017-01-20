var glState = glState||{};

glState.MainState = class {
	constructor() {
		
	}
	create() {
		this.add.sprite(0,0,"bg");
	}
	update() {

	}
};

let game = new Phaser.Game(800, 600, Phaser.AUTO, '');
game.state.add('boot', new glState.Boot());
game.state.add('main', new glState.MainState());
game.state.start('boot');

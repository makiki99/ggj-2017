var glState = glState||{};

glState.Boot = class {
	constructor() {
	}
	preload() {
		game.physics.startSystem(Phaser.Physics.ARCADE);
		this.load.image("bg","assets/placeholder_menu.png");
	}
	update() {
		game.state.start('main');
	}
};

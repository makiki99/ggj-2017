var glState = glState||{};

glState.Boot = class {
	constructor() {
	}
	preload() {
		game.physics.startSystem(Phaser.Physics.ARCADE);
		this.load.image("bg","assets/placeholder_menu.png");
		this.load.image("fire","assets/fire_placeholder.png");
		this.load.image("popcorn","assets/fire_placeholder.png");
	}
	update() {
		game.state.start('main');
	}
};

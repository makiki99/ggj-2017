var glState = glState||{};

glState.Boot = class {
	constructor() {
	}
	preload() {
		this.load.image("bg","assets/placeholder_menu.png");
	}
	update() {
		game.state.start('main');
	}
};

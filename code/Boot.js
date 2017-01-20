var glState = glState||{};

glState.Boot = class {
	constructor() {
	}
	preload() {
		
	}
	update() {
		game.state.start('main');
	}
};

var glState = glState||{};

glState.Boot = class {
	constructor() {
	}
	preload() {
		game.physics.startSystem(Phaser.Physics.ARCADE);
		this.load.image("bg","assets/mainmenu.png");
		this.load.image("fire","assets/fire_placeholder.png");
		this.load.image("popcorn","assets/fire_placeholder.png");
		this.load.image("player","assets/player.png");
        this.load.image('endscreen',"assets/endscreen.png");
	}
	update() {
		game.state.start('main');
	}
};

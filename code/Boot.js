var glState = glState||{};

var score = 0;
var highestscore = 0;

glState.Boot = class {
	constructor() {
	}
	preload() {
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.load.image("bg1","assets/mainmenu1.png");
		this.load.image("bg2","assets/mainmenu2.png");
		this.load.image("glass","assets/glass.png");
		this.load.image("bowl","assets/bowl.png");
		this.load.image("fire","assets/fire_placeholder.png");
		this.load.image("popcorn","assets/fire_placeholder.png");
		this.load.image("player","assets/player.png");
        this.load.image('endscreen',"assets/endscreen.png");
	}
	update() {
		game.state.start('main');
	}
};

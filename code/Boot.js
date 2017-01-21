var glState = glState||{};

glState.score = 0;
glState.hiScore = 0;
var WebFontConfig ={
	google: {
		families: ["VT323"]
	}
};

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
		this.load.image("border","assets/border.png");
		this.load.image("fire","assets/fire.png");
		this.load.image("laser","assets/laser.png");
		this.load.image("popcorn","assets/fire_placeholder.png");
		this.load.image("player","assets/player.png");
		this.load.image('endscreen',"assets/endscreen.png");
		this.load.script("webfont", "//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js");
	}
	update() {
		game.state.start('main');
	}
};

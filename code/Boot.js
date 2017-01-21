var glState = glState||{};

glState.score = 0;
glState.hiScore = 50000;
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
		this.load.image("lazor","assets/lazor.png");
		this.load.image("popcorn1","assets/popcorn1.png");
		this.load.image("popcorn2","assets/popcorn2.png");
		this.load.image("popcorn3","assets/popcorn3.png");
		this.load.image("popcorn4","assets/popcorn4.png");
		this.load.image("popcorn5","assets/popcorn5.png");
		this.load.image("player","assets/player.png");
        this.load.image("salt", "assets/PJSalt.png");
		this.load.script("webfont", "//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js");
    this.load.image('endscreen',"assets/endscreen.png");
		this.load.audio('light','assets/swiatlo switch.wav');
		this.load.audio('lazorSound','assets/lazor.wav');
    this.load.audio('pop1','assets/singlepop.wav');
	}
	update() {
		game.state.start('main');
	}
};

var glState = glState||{};

glState.score = 0;
glState.hiScore = 50000;
if (localStorage.POP_SCORE) {
	glState.hiScore = +localStorage.POP_SCORE;
}
var WebFontConfig ={
	google: {
		families: ["VT323"]
	}
};

glState.PreBoot = class {
	constructor() {

	}
	preload() {
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.load.image("loadingScreen","assets/loading.png");
	}
	create(){
	}
	update(){
		game.state.start('boot');
	}
};

glState.Boot = class {
	constructor() {
	}
	preload() {
		this.add.sprite(0,0,"loadingScreen");
		game.physics.startSystem(Phaser.Physics.ARCADE);
		this.load.script("webfont", "//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js");
		this.load.image("bg1","assets/mainmenu1.png");
		this.load.image("bg2","assets/mainmenu2.png");
		this.load.image("glass","assets/glass.png");
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
    	this.load.image('endscreen',"assets/endscreen.png");
    	this.load.audio('light','assets/swiatlo switch.wav');
		this.load.audio('bgpopcorn', 'assets/bgpopcorn.wav');
    this.load.image('endscreen',"assets/endscreen.png");
		this.load.audio('light','assets/swiatlo switch.wav');
		this.load.audio('lazorSound','assets/lazor.wav');
		this.load.audio('pop1','assets/pop1.wav');
		this.load.audio('pop2','assets/pop2.wav');
		this.load.audio('pop3','assets/pop3.wav');
		this.load.audio('pop4','assets/pop4.wav');
		this.load.audio('pop5','assets/pop5.wav');
		this.load.audio('stsignal', 'assets/stsignal.wav');
		this.load.audio('microwave', 'assets/microwave.wav');
		this.load.audio('bibend', 'assets/bibend.wav');
		this.load.audio('saltsound', 'assets/saltsound.wav');
		this.load.image('sticky', 'assets/move.png');
		for (var i = 0; i <= 9; i++) {
			this.load.image('bowl'+i,'assets/bowl/miska'+i+'.png');
		}
	}
	update() {
		game.state.start('main');
	}
};

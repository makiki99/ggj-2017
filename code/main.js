var glState = glState||{};

glState.MainState = class {
	constructor() {
	}
	create() {
		this.add.sprite(0,0,"bg1");
		this.add.sprite(68,54,"glass");
		this.spacebar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		this.spacebar.onDown.add(this.startGame, this);
        this.lightsound = game.add.audio('light')
	}
	startGame(){
		//animacja
        this.lightsound.play();
		game.state.start('game')
	}
	update() {

	}
};

let game = new Phaser.Game(800, 600, Phaser.AUTO, '');
game.state.add('boot', new glState.Boot());
game.state.add('main', new glState.MainState());
game.state.add('game', new glState.Game());
game.state.add('end', new glState.End());
game.state.start('boot');

var glState = glState||{};

glState.MainState = class {
	constructor() {
		this.spacebar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	}
	create() {
		this.add.sprite(0,0,"bg");
		this.spacebar.onDown.add(this.startGame, this);
	}
	startGame(){
		//animacja
		game.state.start('game');
	}
	update() {

	}
};

let game = new Phaser.Game(800, 600, Phaser.AUTO, '');
game.state.add('boot', new glState.Boot());
game.state.add('main', new glState.MainState());
game.state.start('boot');

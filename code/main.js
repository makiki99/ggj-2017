var glState = glState||{};

glState.MainState = class {
	constructor() {
	}
	create() {
		this.add.sprite(0,0,"bg1");
		this.add.sprite(68,54,"glass");
		this.spacebar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		this.spacebar.onDown.add(this.startGame, this);
		this.scoreInfo = this.game.add.text(660, 86, "", { fill:"lime" } );
		this.scoreInfo.font = 'VT323';
		this.scoreInfo.text = "SCORE:";
		this.displayscore = this.game.add.text(684, 108, "", { fill:"lime" } );
		this.displayscore.font = 'VT323';
		this.displayscore.text = "000000000";
		this.hiScoreInfo = this.game.add.text(660, 130, "", { fill:"lime" } );
		this.hiScoreInfo.font = 'VT323';
		this.hiScoreInfo.text = "HI-SCORE:";
		this.displayhiScore = this.game.add.text(684, 152, "", { fill:"lime" } );
		this.displayhiScore.font = 'VT323';
		this.displayhiScore.text = "000000000";
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
game.state.add('game', new glState.Game());
game.state.add('end', new glState.End());
game.state.start('boot');

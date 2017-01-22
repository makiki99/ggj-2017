var glState = glState||{};

glState.MainState = class {
	constructor() {
	}
	create() {
		this.add.sprite(0,0,"bg1");
		this.add.sprite(68,54,"glass");
		this.spacebar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		this.spacebar.onDown.add(this.startGame, this);
		this.add.sprite(637,470,"sticky");
		this.scoreInfo = this.game.add.text(660, 86, "", { fill:"lime" } );
		this.scoreInfo.font = 'VT323';
		this.scoreInfo.text = "PRESS";
		this.displayscore = this.game.add.text(684, 108, "", { fill:"lime" } );
		this.displayscore.font = 'VT323';
		this.displayscore.text = "SPACEBAR";
		this.hiScoreInfo = this.game.add.text(660, 130, "", { fill:"lime" } );
		this.hiScoreInfo.font = 'VT323';
		this.hiScoreInfo.text = "TO BEGIN";
		this.displayhiScore = this.game.add.text(695, 152, "", { fill:"lime" } );
		this.displayhiScore.font = 'VT323';
		this.displayhiScore.text = "COOKING";
		this.lightsound = game.add.audio('light');
		this.stsignal = game.add.audio('stsignal');
	}
	startGame(){
		//animacja
		this.lightsound.play();
		this.stsignal.play();
		game.state.start('game');
	}
	update() {

	}
};

let game = new Phaser.Game(800, 600, Phaser.AUTO, '');
game.state.add('preboot', new glState.PreBoot());
game.state.add('boot', new glState.Boot());
game.state.add('main', new glState.MainState());
game.state.add('game', new glState.Game());
game.state.add('end', new glState.End());
game.state.start('preboot');

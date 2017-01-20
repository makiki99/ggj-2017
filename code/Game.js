var glState = glState||{};

glState.MainState = class {
	constructor() {
		this.bullets = [];
	}
	create() {
		this.add.sprite(0,0,"bg");
		for (var i = 0; i < 3000; i++) {
			this.bullets.push(new Bullet());
		}
	}
	startGame(){
		//animacja
		game.state.start('game');
	}
	update() {

	}
};

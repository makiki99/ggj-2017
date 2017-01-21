var glState = glState||{};

glState.End = class {
	constructor() {
	}
	create() {
		this.add.sprite(0,0,'endscreen');
<<<<<<< HEAD
		this.game.add.text(200, 145, "You got Pop'ed.");
		this.endtext = this.game.add.text(220,180, "SCORE: " + Math.floor(glState.score));
		//Highest score
		if (glState.score > glState.hiScore) {
			glState.hiScore = glState.score;
			this.game.add.text(280, 240, "You've beaten your old highscore! :)");
			this.game.add.text(300, 290, "Your current highscore is: " + Math.floor(glState.hiScore));
		} else {
			this.game.add.text(280, 290, "Your highest score is: " + Math.floor(glState.hiScore));
=======
		this.game.add.text(280, 145, "You got Pop'ed.");
		this.endtext = this.game.add.text(300,180, "SCORE: " + Math.floor(glState.score));
		//Highest score
		if (glState.score > glState.hiScore) {
			glState.hiScore = glState.score;
			this.game.add.text(280, 350, "You've beaten your old highscore! :)");
			this.game.add.text(400, 390, "Your current highscore is: " + Math.floor(glState.hiScore));
		} else {
			this.game.add.text(280, 350, "Your highest score is: " + Math.floor(glState.hiScore));
>>>>>>> refs/remotes/origin/makiki
		}

		this.game.add.text(50, 570, "Press enter to try again.");
		this.enter = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
		this.enter.onDown.add(this.startMenu, this);
		
		
	}
	startMenu(){
		game.state.start("main");
	}
};

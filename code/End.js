var glState = glState||{};



glState.End = class {
	constructor() {
        this.endtext;
        
    }
    
    create() {
        this.add.sprite(0,0,'endscreen');
        this.game.add.text(280, 145, "You got Pop'ed.");
        this.endtext = this.game.add.text(300,180, "SCORE: " + score);
        //Highest score
        if (score > highestscore) {
            highestscore = score
            this.game.add.text(280, 350, "You've beaten your old highscore! :)");
            this.game.add.text(400, 390, "Your current highscore is: " + highestscore);
        } else {
            this.game.add.text(280, 350, "Your highest score is: " + highestscore);
        }
        
        
        
        this.game.add.text(50, 570, "Press enter to try again.");
        this.enter = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
		this.enter.onDown.add(this.startMenu, this);
    }
    startMenu(){
        game.state.start("main")
    }
}
    
 
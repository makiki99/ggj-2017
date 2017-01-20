var glState = glState||{};



glState.Game = class {
	constructor() {
        this.endtext;
        
    }
    
    create() {
        this.add.sprite(0,0,'endscreen');
        this.game.add.text(280, 145, "You got Pop'ed.");
        this.endtext = this.game.add.text(290,160, "SCORE:" + this.score);
        //Highest score
        if (this.score > this.highestscore) {
            this.highestscore = this.score
            this.game.add.text(400, 145, "You ")
        };
        
        
    }
    
    update() {
        
        
        
    }
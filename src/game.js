import Juggernaut from "./juggernaut";
import Background from "./background";
import Wall from "./wall";
import OtherWalls from "./other_walls";
import Phrases from "./phrases";

export default class JuggernautGame {
  constructor(canvas, movingBackground, sentenceInput, wallCount) {
    
    this.canvas = canvas; 
    this.movingBackground = movingBackground;
    this.input = sentenceInput;
    

    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };

    this.background = new Background(movingBackground);
    // this.background = new Background(this.ctx);
    this.juggernaut = new Juggernaut(this.ctx, this.dimensions);


    this.wall = new Wall(this.ctx);
    this.otherWalls = new OtherWalls(this.ctx);

    this.phrases = new Phrases();
    this.phrase = "inner monologue"; 
    this.successfulSmash; 

    this.breakable = false; 
    this.wallCount = 0;
    this.wallCountText = wallCount;

    this.level = 1;
    this.levelDisplay = document.getElementById("current-level");

    this.wallSpeed = 1; 
    // this.cycleLoop = [0, 1, 0, 0, 1, 0, 0, 1, 0, 2];
    // this.cycleLoop = [0, 1];
    this.cycleLoop = [0, 1, 0, 2];
    this.currentLoopIndex = 0;
    this.frameCount = 0;
    

    this.arcadeMusic = new Audio('./assets/sounds/game_music.wav');
    this.arcadeMusic.loop = true; 

    this.wallType = "brick";

    this.gameOverScreen = document.getElementById("game-over-screen");
    this.levelInfo = document.getElementById("level-info");

    this.handleLevel = this.handleLevel.bind(this);
    this.handleCollision = this.handleCollision.bind(this);
    this.juggernautLoopIterate = this.juggernautLoopIterate.bind(this);

    this.renderLevelInfo = this.renderLevelInfo.bind(this);
    this.removeLevelInfo = this.removeLevelInfo.bind(this);
    this.handlePhrase = this.handlePhrase.bind(this);
    this.handleMusic = this.handleMusic.bind(this);
    this.handleGameOver = this.handleGameOver.bind(this);
    this.handleRestart = this.handleRestart.bind(this);
    this.render = this.render.bind(this);

  }

  handlePhrase(event) {
    if (event.keyCode === 13) {
      let value = this.input.value.trim();
      if (value === this.phrase && !this.breakable) {
        this.breakable = true; 
        this.successfulSmash = this.phrases.samplePositivity();
        this.phrase = this.successfulSmash; 
        this.wallSpeed = 4.0;
        this.input.value = "";
      }

    }
    
  }

  handleMusic() {
    let muteButton = document.getElementById("arcade-music");
    // this.arcadeMusic.muted = !this.arcadeMusic.muted;
    if (!this.arcadeMusic.muted) {
      this.arcadeMusic.muted = !this.arcadeMusic.muted;
      muteButton.classList.add("muted");
      muteButton.innerHTML = "UNMUTE MUSIC";
    } else {
      this.arcadeMusic.muted = !this.arcadeMusic.muted;
      muteButton.classList.remove("muted");
      muteButton.innerHTML = "Mute Music ";
    }
  }

  handleGameOver() {
    this.gameOverScreen.classList.remove("displaynone");
    this.gameOverScreen.addEventListener('click', this.handleRestart);
  }

  handleRestart() {
    // event.preventDefault();
    this.wallCountText.innerHTML = "Walls Smashed: 0";
    this.levelDisplay.innerHTML = "Level 1";
    let newGame = new JuggernautGame(this.canvas, this.movingBackground, this.input, this.wallCountText);
    newGame.render();
    this.gameOverScreen.removeEventListener("click", this.handleRestart);
    this.gameOverScreen.classList.add("displaynone");
  }

  handleLevel() {
    if (this.wallCount === 5) {
      this.level = 2; 
      this.levelDisplay.innerHTML = "Level " + this.level;
      this.renderLevelInfo();
    } else if (this.wallCount === 10) {
      this.level = 3; 
      this.levelDisplay.innerHTML = "Level " + this.level;
      this.renderLevelInfo();
    } else if (this.wallCount === 15) {
      this.level = 4; 
      this.levelDisplay.innerHTML = "Level " + this.level;
      this.renderLevelInfo();
    } else if (this.wallCount === 25) {
      this.level = 5;
      this.levelDisplay.innerHTML = "Level " + this.level;
      this.renderLevelInfo();
    }
  }

  renderLevelInfo() {
    let levelInfoParagraph1 = document.getElementById("level-info-p-tag1");
    let levelInfoParagraph2 = document.getElementById("level-info-p-tag2");
    if (this.level === 2) {
      this.levelInfo.classList.remove("displaynone");
      levelInfoParagraph1.innerHTML = "LEVEL 2!";
      levelInfoParagraph2.innerHTML = "You've unlocked new sentences!";
      setTimeout(this.removeLevelInfo, 1000);
    }
    if (this.level === 3) {
      this.levelInfo.classList.remove("displaynone");
      levelInfoParagraph1.innerHTML = "LEVEL 3!";
      levelInfoParagraph2.innerHTML = "You've got new walls to smash!";
      setTimeout(this.removeLevelInfo, 1000);
    }
    if (this.level === 4) {
      this.levelInfo.classList.remove("displaynone");
      levelInfoParagraph1.innerHTML = "LEVEL 4!";
      levelInfoParagraph2.innerHTML = "You can now break the 4th wall!";
      setTimeout(this.removeLevelInfo, 1000);
    }
    if (this.level === 5) {
      this.levelInfo.classList.remove("displaynone");
      levelInfoParagraph1.innerHTML = "LEVEL 5!";
      levelInfoParagraph2.innerHTML = "YOU'RE ON FIRE!";
      setTimeout(this.removeLevelInfo, 1000);
    }
  }

  removeLevelInfo() {
    this.levelInfo.classList.add("displaynone");
  }

  handleCollision() {
    if (this.wall.x === 181 && this.breakable === false) {
      this.handleGameOver();
      return true;
    }
    if (this.wall.x < 180 && this.wall.x > 175 && this.breakable === true) {
      this.wallCount++;

      this.wallCountText.innerHTML = "Walls Smashed: " + this.wallCount;
      return false; 
    }  
  }

  juggernautLoopIterate() {
    if (this.frameCount > 15 && !this.breakable) {
      this.currentLoopIndex++;
      this.frameCount = 0;
    }
    if (this.frameCount > 5 && this.breakable) {
      this.currentLoopIndex++;
      this.frameCount = 0;
    } 
  }

  render() {
    
    this.handleLevel();

    // this.handleCollision();
    if (this.handleCollision()) {
      return; 
    }

    this.input.addEventListener('keydown', this.handlePhrase);

    this.frameCount++;
    this.juggernautLoopIterate();
    
    this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);


    if (this.wall.x <= -240 && this.level >= 3) {
      this.wall.x = -300; 
      this.wallType = this.wall.wallRandomizer(this.level);
    }
    if (this.wall.x === 646) {
      this.phrase = this.phrases.sample(this.level);
      this.ctx.font = "normal bold 30px Courier";
      this.ctx.fillStyle = "white";
      
      this.breakable = false; 
      this.wallSpeed = 1.0;
    }

    this.wall.render(this.wallSpeed, this.wallType);

    this.juggernaut.drawJuggernaut(this.cycleLoop[this.currentLoopIndex]);

    

    if (this.breakable) {
      this.ctx.fillText(this.phrase, 150, 170);
      this.ctx.fillStyle = "red";
      this.ctx.font = "normal bold 30px Courier";
    } else {
      this.ctx.fillText(this.phrase, 150, 170);
    }

    if (this.currentLoopIndex >= this.cycleLoop.length) {
      this.currentLoopIndex = 0;
    }
    this.background.render();

    window.requestAnimationFrame(this.render);


  }


}

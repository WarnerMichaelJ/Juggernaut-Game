import Juggernaut from "./juggernaut";
import Level from "./level";
import Background from "./background";
import Wall from "./wall";
import Phrases from "./phrases";

export default class JuggernautGame {
  constructor(canvas, movingBackground, sentenceInput, wallCount) {
    

    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };

    this.background = new Background(movingBackground);
    // this.background = new Background(this.ctx);
    this.juggernaut = new Juggernaut(this.ctx, this.dimensions);

    this.input = sentenceInput;

    this.wall = new Wall(this.ctx);

    this.phrases = new Phrases();
    this.phrase = "inner monologue"; 
    this.successfulSmash; 

    this.breakable = false; 
    this.wallCount = 0;
    this.wallCountText = wallCount;

    this.wallSpeed = 1; 
    // this.cycleLoop = [0, 1, 0, 0, 1, 0, 0, 1, 0, 2];
    // this.cycleLoop = [0, 1];
    this.cycleLoop = [0, 1, 0, 2];
    this.currentLoopIndex = 0;
    this.frameCount = 0;
    this.walls = [];

    this.arcadeMusic = new Audio('../assets/sounds/game_music.wav');
    this.arcadeMusic.loop = true; 
    // this.arcadeMusic.muted = !this.arcadeMusic.muted; 
    // this.arcadeMusic.play();

    // this.step = this.step.bind(this);
    this.handlePhrase = this.handlePhrase.bind(this);
    this.handleMusic = this.handleMusic.bind(this);
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

  render() {
    // stops the game if the wall isn't breakable when the wall reaches the juggernaut
    // Will eventually replace this with some type of gameover logic

    if (this.wall.x === 181 && this.breakable === false) return; 
    if (this.wall.x < 180 && this.wall.x > 175 && this.breakable === true) {
      this.wallCount++;

      this.wallCountText.innerHTML = "Walls Smashed: " + this.wallCount;
    }  

    this.input.addEventListener('keydown', this.handlePhrase);

    this.frameCount++;
    if (this.frameCount > 15 && !this.breakable) {
      this.currentLoopIndex++;
      this.frameCount = 0;
    } 
    if (this.frameCount > 5 && this.breakable) {
      this.currentLoopIndex++;
      this.frameCount = 0;
    } 
    // debugger;
    this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);


    if (this.wall.x === 646) {
      this.phrase = this.phrases.sample();
      this.ctx.font = "15px Georgia";
      this.ctx.fillStyle = "white";
      
      this.breakable = false; 
      this.wallSpeed = 1.0;
    }

     this.wall.render(this.wallSpeed);

    this.juggernaut.drawJuggernaut(this.cycleLoop[this.currentLoopIndex]);

    

    if (this.breakable) {
      this.ctx.fillText(this.phrase, 150, 135);
      this.ctx.fillStyle = "green";
      this.ctx.font = "20px Georgia";
    } else {
      this.ctx.fillText(this.phrase, 150, 135);
    }
    
    // this.currentLoopIndex++;
    if (this.currentLoopIndex >= this.cycleLoop.length) {
      this.currentLoopIndex = 0;
    }
    this.background.render();
    this.arcadeMusic.play();
    window.requestAnimationFrame(this.render);
    // this.juggernaut.step();

  }


}

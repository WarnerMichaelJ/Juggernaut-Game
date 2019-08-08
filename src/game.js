import Juggernaut from "./juggernaut";
import Level from "./level";
import Background from "./background";
import Wall from "./wall";
import Phrases from "./phrases";

export default class JuggernautGame {
  constructor(canvas, movingBackground, sentenceInput) {
    

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
    // this.registerEvents();
    // this.restart();
    this.breakable = false; 

    // this.cycleLoop = [0, 1, 0, 0, 1, 0, 0, 1, 0, 2];
    // this.cycleLoop = [0, 1];
    this.cycleLoop = [0, 1, 0, 2];
    this.currentLoopIndex = 0;
    this.frameCount = 0;
    this.walls = [];

    this.arcadeMusic = new Audio('../assets/sounds/game_music.wav');
    this.arcadeMusic.loop = true; 
    // this.arcadeMusic.play();

    // this.step = this.step.bind(this);
    this.handlePhrase = this.handlePhrase.bind(this);
    this.render = this.render.bind(this);

  }

  handlePhrase(event) {
    if (event.keyCode === 13) {
      let value = this.input.value.trim();
      if (value === this.phrase) {
        this.breakable = true; 
      }
      this.input.value = "";
    }
  }

  render() {
    // stops the game if the wall isn't breakable when the wall reaches the juggernaut
    if (this.wall.x === 181 && this.breakable === false) return; 

    this.input.addEventListener('keydown', this.handlePhrase);

    this.frameCount++;
    if (this.frameCount > 15) {
      this.currentLoopIndex++;
      this.frameCount = 0;
    }
    // debugger;
    this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);

    this.wall.render();
    // console.log(this.wall.x);
    this.juggernaut.drawJuggernaut(this.cycleLoop[this.currentLoopIndex]);
    
    if (this.wall.x === 649) {
      this.phrase = this.phrases.sample();
      this.ctx.font = "15px Georgia";
      this.ctx.fillStyle = "white";
      
      this.breakable = false; 
    }

    if (this.wall.x === 179) {
      this.successfulSmash = this.phrases.samplePositivity();

    }
    if (this.wall.x < 180) {
      this.phrase = this.successfulSmash;
      this.ctx.fillStyle = "green";
      this.ctx.font = "20px Georgia";
    }
    this.ctx.fillText(this.phrase, 150, 135);
    // this.currentLoopIndex++;
    if (this.currentLoopIndex >= this.cycleLoop.length) {
      this.currentLoopIndex = 0;
    }
    this.background.render();
    this.arcadeMusic.play();
    window.requestAnimationFrame(this.render);
    // this.juggernaut.step();

  }


  // init() {
  //   let canvasScale = 0.2;
  //   const width = 500;
  //   const height = 410;
  //   const scaledWidth = canvasScale * width;
  //   const scaledHeight = canvasScale * height;
  
  //   // Two images for running
  //   this.ctx.drawImage(this.img, 0, 430, width, 395, 0, 0, scaledWidth, scaledHeight);
  //   this.ctx.drawImage(this.img, 930, 1150, width, 420, scaledWidth, 0, scaledWidth, scaledHeight);
  //   // Image for punching
  //   this.ctx.drawImage(this.img, 0, 0, width, height, scaledWidth * 2, 0, scaledWidth, scaledHeight);

  //   // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
    
  // }


  // play() {
  //   this.running = true;
  //   this.animate();
  // }

  // restart() {
  //   this.running = false;
  //   this.score = 0;
  //   this.bird = new Juggernaut(this.dimensions);
  //   this.level = new Level(this.dimensions);

  //   this.animate();
  // }

  // registerEvents() {
  //   this.boundClickHandler = this.click.bind(this);
  //   this.ctx.canvas.addEventListener("mousedown", this.boundClickHandler);
  // }

  // click(e) {
  //   if (!this.running) {
  //     this.play();
  //   }
  //   this.bird.flap();
  // }

  // gameOver() {
  //   return (
  //     this.level.collidesWith(this.bird.bounds()) || this.bird.outOfBounds(this.height)
  //   );
  // }

  // this is the key method of gaming action
  // animate tells the game to advance one bit
  // the bird moves, the level moves
  // everything is redrawn to the screen
  // animate() {
  //   //first we move and draw the level
  //   this.level.animate(this.ctx);
  //   //then we move and draw the bird
  //   this.bird.animate(this.ctx);
  //   //then we check to see if the game is over and let the player know
  //   if (this.gameOver()) {
  //     alert(this.score);
  //     this.restart();
  //   }

  //   //we see if they have scored a point by passing a pipe
  //   this.level.passedPipe(this.bird.bounds(), () => {
  //     this.score += 1;
  //     console.log(this.score);
  //   });

  //   //and draw the score
  //   this.drawScore();

  //   //if the game is NOT running, we do not animate the next frame
  //   if (this.running) {
  //     //This calls this function again, after around 1/60th of a second
  //     requestAnimationFrame(this.animate.bind(this));
  //   }
  // }

  // drawScore() {
  //   //loc will be the location 
  //   const loc = { x: this.dimensions.width / 2, y: this.dimensions.height / 4 }
  //   this.ctx.font = "bold 50pt serif";
  //   this.ctx.fillStyle = "white";
  //   this.ctx.fillText(this.score, loc.x, loc.y);
  //   this.ctx.strokeStyle = "black";
  //   this.ctx.lineWidth = 2;
  //   this.ctx.strokeText(this.score, loc.x, loc.y);
  // }
}

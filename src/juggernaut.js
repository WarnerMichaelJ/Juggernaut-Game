import Background from "./background";

// const CONSTANTS = {
//   RUNNING_SPEED: 8,
//   JUGGERNAUT_WIDTH: 40,
//   JUGGERNAUT_HEIGHT: 30
// };

// export default class Juggernaut {
//   constructor(dimensions) {
//     this.dimensions = dimensions; 
//     this.x = this.dimensions.width / 3;
//     this.y = this.dimensions.height / 2;
//     this.vel = 0;
//   }



// }

const CONSTANTS = {
  JUGGERNAUT_WIDTH: 530,
  JUGGERNAUT_HEIGHT: 430,
  FRAME_Y: 0,
  CANVAS_X: 150,
  CANVAS_Y: 150
};

export default class Juggernaut {

  constructor(ctx, dimensions) {
    // this.x = this.dimensions.width / 3;
    // this.y = this.dimensions.height / 2;
    this.ctx = ctx; 
    // this.imgBackground = new Image();
    // this.imgBackground.src = "../assets/images/X-Men_background_image.png";
    // this.imgBackground.id = "imgBackground";
    this.imgBackground = new Image();
    this.imgBackground.src = "../assets/images/X-Men_background_image.png";
    this.canvasDimensions = dimensions;
    this.img = new Image();
    this.img.src = "../assets/spritesheets/Juggernaut_Spritesheet_Simplified.png";
    this.img.onload = () => {
      this.init();
    };

    // this.cycleLoop = [0, 1, 0, 2];
    this.cycleLoop = [0, 1];

    this.currentLoopIndex = 0;
    this.frameCount = 0;
    this.step = this.step.bind(this);
    this.drawJuggernaut = this.drawJuggernaut.bind(this);
  }

  drawJuggernaut(frameX) {
    // this.ctx.drawImage(this.imgBackground, 0, 0);
    this.ctx.drawImage(this.img,
      frameX * 500, CONSTANTS.FRAME_Y * 410, 500, 410,
      CONSTANTS.CANVAS_X, CONSTANTS.CANVAS_Y, 100, 82);
  }

  drawGameState() {

  }

  step() {
    // debugger; 
    this.frameCount++;
    if (this.frameCount < 10) {
      window.requestAnimationFrame(this.step);
      return;
    }
    this.frameCount = 0;
    this.ctx.clearRect(0, 0, this.canvasDimensions.width, this.canvasDimensions.height);
    this.ctx.drawImage(this.imgBackground, 0, 0);
    this.drawJuggernaut(this.cycleLoop[this.currentLoopIndex]);
    this.currentLoopIndex++;
    if (this.currentLoopIndex >= this.cycleLoop.length) {
      this.currentLoopIndex = 0;
    }
    window.requestAnimationFrame(this.step);
  }

  init() {
    window.requestAnimationFrame(this.step);
  }

  // bounds() {
  //   return {
  //     left: this.x,
  //     right: this.x + CONSTANTS.JUGGERNAUT_WIDTH,
  //     top: this.y,
  //     bottom: this.y + CONSTANTS.JUGGERNAUT_HEIGHT
  //   };
  // }

  // outOfBounds() {
  //   const aboveTheTop = this.y < 0;
  //   const belowTheBottom = this.y + CONSTANTS.JUGGERNAUT_HEIGHT > this.dimensions.height;
  //   return aboveTheTop || belowTheBottom;
  // }
}

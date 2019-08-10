
const CONSTANTS = {
  JUGGERNAUT_WIDTH: 530,
  JUGGERNAUT_HEIGHT: 430,
  FRAME_Y: 0,
  CANVAS_X: 145,
  CANVAS_Y: 185
};

export default class Juggernaut {

  constructor(ctx, dimensions) {
    // this.x = this.dimensions.width / 3;
    // this.y = this.dimensions.height / 2;
    this.ctx = ctx; 

    this.canvasDimensions = dimensions;
    this.img = new Image();
    this.img.src = "./assets/spritesheets/Juggernaut_Spritesheet_Simplified.png";


    this.cycleLoop = [0, 1, 0, 2];
    // this.cycleLoop = [0, 1];

    this.currentLoopIndex = 0;
    this.frameCount = 0;
    // this.step = this.step.bind(this);
    this.drawJuggernaut = this.drawJuggernaut.bind(this);
  }

  drawJuggernaut(frameX) {

    this.ctx.drawImage(this.img,
      frameX * 500, 0, 528, 435,
      CONSTANTS.CANVAS_X, CONSTANTS.CANVAS_Y, 146, 120);
  }


  // step() {
  //   // debugger; 
  //   this.frameCount++;
  //   if (this.frameCount < 10) {
  //     window.requestAnimationFrame(this.step);
  //     return;
  //   }
  //   this.frameCount = 0;
  //   this.ctx.clearRect(0, 0, this.canvasDimensions.width, this.canvasDimensions.height);

  //   this.drawJuggernaut(this.cycleLoop[this.currentLoopIndex]);
  //   this.currentLoopIndex++;
  //   if (this.currentLoopIndex >= this.cycleLoop.length) {
  //     this.currentLoopIndex = 0;
  //   }
  //   window.requestAnimationFrame(this.step);
  // }



  // init() {
  //   window.requestAnimationFrame(this.step);
  // }

  // bounds() {
  //   return {
  //     left: this.x,
  //     right: this.x + CONSTANTS.JUGGERNAUT_WIDTH,
  //     top: this.y,
  //     bottom: this.y + CONSTANTS.JUGGERNAUT_HEIGHT
  //   };
  // }

}

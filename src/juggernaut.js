
const CONSTANTS = {
  JUGGERNAUT_WIDTH: 530,
  JUGGERNAUT_HEIGHT: 430,
  FRAME_Y: 0,
  CANVAS_X: 145,
  CANVAS_Y: 185
};

export default class Juggernaut {

  constructor(ctx, dimensions) {
    this.ctx = ctx; 

    this.canvasDimensions = dimensions;
    this.img = new Image();
    this.img.src = "./assets/spritesheets/Juggernaut_Spritesheet_Simplified.png";

    this.cycleLoop = [0, 1, 0, 2];
    // this.cycleLoop = [0, 1];

    this.currentLoopIndex = 0;
    this.frameCount = 0;

    this.drawJuggernaut = this.drawJuggernaut.bind(this);
  }

  drawJuggernaut(frameX) {

    this.ctx.drawImage(this.img,
      frameX * 500, 0, 528, 435,
      CONSTANTS.CANVAS_X, CONSTANTS.CANVAS_Y, 146, 120);
  }


}

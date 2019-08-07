export default class Background { 
  constructor(ctx, dimensions) {
    this.ctx = ctx;

    this.canvasDimensions = dimensions;

    this.imgBackground = new Image();
    this.imgBackground.src = "../assets/images/X-Men_background_image.png";
    this.imgBackground.id = "imgBackground";
    this.imgBackground.onload = () => {
      this.init();
    };
    this.drawBackground = this.drawBackground.bind(this);
    // debugger; 
  }

  drawBackground() {
    // debugger;
    this.ctx.drawImage(this.imgBackground, 0, 0);
  }

  step() {
    // debugger; 
    // this.frameCount++;
    // if (this.frameCount < 10) {
    //   window.requestAnimationFrame(this.step);
    //   return;
    // }
    // this.frameCount = 0;
    // this.ctx.clearRect(0, 0, this.canvasDimensions.width, this.canvasDimensions.height);
    // // this.ctx.drawImage(this.img, 0, 430, 500, 395, 0, 0, 500 * 0.2, 410 * 0.2);
    // debugger; 
    this.drawBackground();
    // this.currentLoopIndex++;
    // if (this.currentLoopIndex >= this.cycleLoop.length) {
    //   this.currentLoopIndex = 0;
    // }
    window.requestAnimationFrame(this.step);
  }

  init() {
    this.drawBackground();
  }


}
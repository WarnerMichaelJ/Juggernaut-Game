const CANVAS_HEIGHT = 300;
const CANVAS_WIDTH = 760;

class MovingBackground {
  constructor(context) {

    this.options = {
      canvasCoord1: [null, 0, CANVAS_WIDTH, CANVAS_HEIGHT],
      canvasCoord2: [null, 0, CANVAS_WIDTH, CANVAS_HEIGHT]
    };
    this.imgLocation = [3, 0, 2000, 2000];
    this.xCurrent = 0;
    this.speed = 1.0;
    this.context = context;

    this.img = new Image();
    this.img.src = '../assets/images/X-Men_background_image.png';
    // debugger;
    this.drawBackground = this.drawBackground.bind(this);
    this.render = this.render.bind(this);
  }

  drawBackground() {
    // debugger; 
    this.context.drawImage(
      this.img,
      this.imgLocation[0],
      this.imgLocation[1],
      this.imgLocation[2],
      this.imgLocation[3],
      this.options["canvasCoord1"][0],
      this.options["canvasCoord1"][1],
      this.options["canvasCoord1"][2],
      this.options["canvasCoord1"][3]
    );
    this.context.drawImage(
      this.img,
      this.imgLocation[0],
      this.imgLocation[1],
      this.imgLocation[2],
      this.imgLocation[3],
      this.options["canvasCoord2"][0],
      this.options["canvasCoord2"][1],
      this.options["canvasCoord2"][2],
      this.options["canvasCoord2"][3]
    );
  }

  render() {
    this.context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    this.options["canvasCoord1"][0] = this.xCurrent;
    this.options["canvasCoord2"][0] = this.xCurrent + CANVAS_WIDTH;
    this.drawBackground();
    if (this.xCurrent <= -CANVAS_WIDTH) this.xCurrent = 0;
    this.xCurrent -= this.speed;
    // debugger;
    // console.log(CANVAS_WIDTH);
    console.log(this.xCurrent);
  }
}

module.exports = MovingBackground;


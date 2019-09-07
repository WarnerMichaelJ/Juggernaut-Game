const CANVAS_HEIGHT = 381;
const CANVAS_WIDTH = 1000;

class MovingBackground {
  constructor(movingBackground) {

    this.imgCoordinates = [0, 0, 759, 285];
    this.canvasCoordinates1 = [null, 0, CANVAS_WIDTH, CANVAS_HEIGHT];
    this.canvasCoordinates2 = [null, 0, CANVAS_WIDTH, CANVAS_HEIGHT];
    this.xCurrent = 0;
    this.speed = 2.0;
    this.context = movingBackground;

    this.img = new Image();
    this.img.src = './assets/images/X-Men_background_image.png';

    this.drawBackground = this.drawBackground.bind(this);
    this.render = this.render.bind(this);
  }


  drawBackground() {
    this.context.drawImage(
      this.img,
      this.imgCoordinates[0],
      this.imgCoordinates[1],
      this.imgCoordinates[2],
      this.imgCoordinates[3],
      this.canvasCoordinates1[0],
      this.canvasCoordinates1[1],
      this.canvasCoordinates1[2],
      this.canvasCoordinates1[3]
    );
    this.context.drawImage(
      this.img,
      this.imgCoordinates[0],
      this.imgCoordinates[1],
      this.imgCoordinates[2],
      this.imgCoordinates[3],
      this.canvasCoordinates2[0],
      this.canvasCoordinates2[1],
      this.canvasCoordinates2[2],
      this.canvasCoordinates2[3]
    );
  }

  render() {
    this.context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    this.canvasCoordinates1[0] = this.xCurrent;
    this.canvasCoordinates2[0] = this.xCurrent + CANVAS_WIDTH;
    this.drawBackground();
    if (this.xCurrent <= -CANVAS_WIDTH) this.xCurrent = 0;
    this.xCurrent -= this.speed;
  }
}

module.exports = MovingBackground;


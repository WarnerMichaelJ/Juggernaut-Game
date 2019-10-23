
const WALL_SPRITESHEET_COORDINATE = {

};

const WALL_CONSTANTS = {

};


export default class OtherWalls {
  constructor(ctx, props) {
    this.x = 650;
    // this.y = props.y;
    this.speed = 1.0;
    this.ctx = ctx;


    this.img = new Image();
    this.img.src = './assets/spritesheets/4th_wall_spritesheet.png';

    this.bricksBreaking = new Audio('./assets/sounds/bricks_breaking.mp3');
    this.bricksBreaking.volume = 0.3;
    this.moveWall = this.moveWall.bind(this);
    this.drawWall = this.drawWall.bind(this);
  }

  moveWall(speed = 1.0) {
    this.x -= speed;
  }

  drawWall() {
    // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)


    if (this.x <= -150) this.x = 650;
    // console.log(this.x);
    if (this.x <= 180) {
      if (this.x > 165) this.bricksBreaking.play();
      // Simpsons couch gag
      this.ctx.drawImage(this.img,
        410, 0, 410, 300,
        this.x, 150, 300, 207);
      // this.ctx.drawImage(this.img,
      //   450, 280, 600, 450,
      //   this.x, 150, 300, 207);
    } else {
      // Simpsons staring
      this.ctx.drawImage(this.img,
        0, 0, 410, 300,
        this.x, 150, 300, 207);
      // Deadpool brickwall
      // this.ctx.drawImage(this.img,
      //   0, 400, 410, 300,
      //   this.x, 170, 300, 207);
    }

  }

  render(speed) {
    this.moveWall(speed);
    this.drawWall();
  }


}


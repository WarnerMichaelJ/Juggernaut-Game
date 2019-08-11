
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
    this.img.src = './assets/spritesheets/Other_Walls_Spritesheet.png';

    this.bricksBreaking = new Audio('./assets/sounds/bricks_breaking.mp3');
    this.bricksBreaking.volume = 0.5;
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
      // Genghis Khan
      // this.ctx.drawImage(this.img,
      //   350, 300, 430, 300,
      //   this.x, 95, 350, 300);
      // Reagan and Gorbachev
      this.ctx.drawImage(this.img,
        300, 0, 430, 300,
        this.x, 150, 250, 250);
    } else {
      // Great Wall of China
      // this.ctx.drawImage(this.img,
      //   0, 300, 300, 300,
      //   this.x, 95, 300, 300);
      // Berlin Wall
      this.ctx.drawImage(this.img,
        0, 0, 300, 300,
        this.x, 125, 300, 300);
    }

  }

  render(speed) {
    this.moveWall(speed);
    this.drawWall();
  }


}


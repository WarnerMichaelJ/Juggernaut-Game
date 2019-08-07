
const WALL_SPRITESHEET_COORDINATE = {

};

export default class Wall {
  constructor(ctx, props) {
    this.x = 500; 
    // this.y = props.y;
    this.speed = 1.0;
    this.ctx = ctx; 


    this.img = new Image();
    this.img.src = '../assets/spritesheets/Cropped_Brick_Wall.png';

    this.moveWall = this.moveWall.bind(this);
    this.drawWall = this.drawWall.bind(this);
  }

  moveWall() {
    this.x -= this.speed; 
  }

  drawWall() {
    // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
  
    if (this.x <= -150) this.x = 500;
    console.log(this.x);
    this.ctx.drawImage(this.img,
      500, 500, 500, 500,
      this.x, 150, 100, 100);
  }

  render() {
    this.moveWall();
    this.drawWall();
  }

  
}


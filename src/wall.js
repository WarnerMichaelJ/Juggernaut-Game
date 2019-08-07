
const WALL_SPRITESHEET_COORDINATE = {

};

export default class Wall {
  constructor(ctx, props) {
    // this.x = props.x; 
    // this.y = props.y;
    this.speed = 0.5;
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
    this.ctx.drawImage(this.img,
      500, 500, 500, 500,
      400, 150, 100, 100);
  }

  render() {

  }

  
}


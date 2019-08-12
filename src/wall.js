
const WALL_SPRITESHEET_COORDINATE = {

};

const WALL_CONSTANTS = {

};


export default class Wall {
  constructor(ctx, props) {
    this.x = 650; 
    // this.y = props.y;
    this.speed = 1.0;
    this.ctx = ctx; 


    this.img = new Image();
    this.img.src = './assets/spritesheets/Brick_Wall_Spritesheet.png';

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
      this.ctx.drawImage(this.img, 
        500, 0, 700, 700, 
        this.x, 125, 200, 200);
    } else {
      this.ctx.drawImage(this.img,
        0, 0, 500, 600,
        this.x, 125, 200, 200);
    }
    
  }

  render(speed, level) {
    this.moveWall(speed);
    this.drawWall();
  }

  
}


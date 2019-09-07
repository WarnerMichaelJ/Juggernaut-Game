
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


    this.brickWall = new Image();
    this.brickWall.src = './assets/spritesheets/Brick_Wall_Spritesheet.png';

    this.otherWalls = new Image();
    this.otherWalls.src = './assets/spritesheets/Other_Walls_Spritesheet.png';

    this.fourthWall = new Image();
    this.fourthWall.src = './assets/spritesheets/4th_wall_spritesheet.png';

    this.bricksBreaking = new Audio('./assets/sounds/bricks_breaking.mp3'); 
    this.bricksBreaking.volume = 0.5; 
    this.moveWall = this.moveWall.bind(this);
    this.drawWall = this.drawWall.bind(this);
    this.wallRandomizer = this.wallRandomizer.bind(this);
  }

  wallRandomizer(level) {
    if (level >= 4) {
      const moreWallTypes = ["brick", "berlinWall", "greatWall", "deadpool", "simpsons"];
      return moreWallTypes[Math.floor(Math.random() * moreWallTypes.length)];
    }
    const wallTypes = ["brick", "berlinWall", "greatWall"];
    return wallTypes[Math.floor(Math.random() * wallTypes.length)];
  }

  moveWall(speed = 1.0) {
    this.x -= speed; 
  }

  drawWall(wallType) {
    // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
    
    if (wallType === "brick") {
      if (this.x <= -250) this.x = 650;

      if (this.x <= 180) {
        if (this.x > 165) this.bricksBreaking.play();
        this.ctx.drawImage(this.brickWall, 
          500, 0, 700, 700, 
          this.x, 125, 200, 200);
      } else {
        this.ctx.drawImage(this.brickWall,
          0, 0, 500, 600,
          this.x, 125, 200, 200);
      }
    }

    if (wallType === "berlinWall") {
      if (this.x <= -250) this.x = 650;

      if (this.x <= 180) {
        if (this.x > 165) this.bricksBreaking.play();

        this.ctx.drawImage(this.otherWalls,
          300, 0, 430, 300,
          this.x, 150, 250, 250);
      } else {

        this.ctx.drawImage(this.otherWalls,
          0, 0, 300, 300,
          this.x, 125, 300, 300);
      }
    }

    if (wallType === "greatWall") {
      if (this.x <= -250) this.x = 650;

      if (this.x <= 180) {
        if (this.x > 165) this.bricksBreaking.play();
        // Genghis Khan
        this.ctx.drawImage(this.otherWalls,
          350, 300, 430, 300,
          this.x, 95, 350, 300);

      } else {
        // Great Wall of China
        this.ctx.drawImage(this.otherWalls,
          0, 300, 300, 300,
          this.x, 95, 300, 300);

      }
    }

    if (wallType === "deadpool") {
      if (this.x <= -250) this.x = 650;

      if (this.x <= 180) {
        if (this.x > 165) this.bricksBreaking.play();

        this.ctx.drawImage(this.fourthWall,
          450, 280, 600, 450,
          this.x, 150, 300, 207);
      } else {

        this.ctx.drawImage(this.fourthWall,
          0, 400, 430, 300,
          this.x, 180, 300, 207);
      }
    }

    if (wallType === "simpsons") {
      if (this.x <= -250) this.x = 650;

      if (this.x <= 180) {
        if (this.x > 165) this.bricksBreaking.play();
        // Simpsons couch gag
        this.ctx.drawImage(this.fourthWall,
          410, 0, 410, 300,
          this.x, 150, 300, 207);

      } else {
        // Simpsons staring
        this.ctx.drawImage(this.fourthWall,
          0, 0, 410, 300,
          this.x, 150, 300, 207);
      }
    }
    
  }

  render(speed, wallType) {
    this.moveWall(speed);
    this.drawWall(wallType);
  }

  
}


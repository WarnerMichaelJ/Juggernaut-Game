const CONSTANTS = {
  RUNNING_SPEED: 8,
  JUGGERNAUT_WIDTH: 40,
  JUGGERNAUT_HEIGHT: 30
};

export default class Juggernaut {
  constructor(dimensions) {
    this.dimensions = dimensions; 
    this.x = this.dimensions.width / 3;
    this.y = this.dimensions.height / 2;
    this.vel = 0;
  }



}
class Snake {
  constructor() {
    this.body = [];
    this.body[0] = createVector(9, 9);
    this.body[1] = createVector(8, 9);
    this.body[2] = createVector(7, 9);
    this.xdir = 0;
    this.ydir = 0; //direction
    this.pause = true;
    this.counter = 0;
  }

  setDir(x, y) {
    this.xdir = x;
    this.ydir = y;
  }

  stop() {
    // prevents snake from resuming backwards
    switch (this.xdir) {
      case -1:
        lockLeft = false;
        lockRight = true;
        break;
      case 1:
        lockLeft = true;
        lockRight = false;
        break;
      case 0:
        lockLeft = false;
        lockRight = false;
    }
    switch (this.ydir) {
      case -1:
        lockUp = false;
        lockDown = true;
        break;
      case 1:
        lockUp = true;
        lockDown = false;
        break;
      case 0:
        lockUp = false;
        lockDown = false;
    }
    this.pause = true;
    this.setDir(0, 0);
  }

  update() {
    // if head isn't moving, don't update the body
    if (this.xdir != 0 || this.ydir != 0) {
      // each body part gets new position from the part in front of it
      // iterating from last to first so we don't overwrite positions before we forward them to the next body part
      for (let i = this.body.length - 1; i > 0; i--) {
        this.body[i].x = this.body[i - 1].x;
        this.body[i].y = this.body[i - 1].y;
      }
    }
    // at last, head then takes the new position
    this.body[0].x += this.xdir;
    this.body[0].y += this.ydir;

    this.hitWall();
  }

  grow() {
    let tail = this.body[this.body.length - 1];
    let growthUnit = createVector(tail.x, tail.y);
    this.body.push(growthUnit);
  }

  eat(food) {
    let x = this.body[0].x;
    let y = this.body[0].y;
    if (x == food.x && y == food.y) {
      this.grow();
      return true;
    }
    return false;
  }

  hitWall() {
    let head = this.body[0];
    if (
      head.x < 0 ||
      head.y < 0 ||
      head.x >= gridColumns ||
      head.y >= gridRows
    ) {
      background(255, 0, 0); // red background
      // treba da se crveni ili okvir, ili glava
      this.setDir(0, 0);
    }
  }

  bitTail() {
    let head = this.body[0];
    for (let i = 1; i < this.body.length; i++) {
      if ( //head position equal to any body part
        this.body[i].x === head.x &&
        this.body[i].y === head.y
      ) {
        // stop snake
        this.setDir(0, 0);
        // head blinks 
        this.counter++;
        if (this.counter % 2 == 0) {
          fill(0);
        } else {
          fill(255, 0, 0);
        }
        rect(this.body[0].x, this.body[0].y, 1, 1);
        break;
      }
    }
  }

  show() {
    fill(0);
    noStroke();
    for (let i = 0; i < this.body.length; i++) {
      if (i > 0) {
        fill('green');
      }
      rect(this.body[i].x, this.body[i].y, 1, 1);
    }
    // game over check goes here in order to draw 
    // on top of the whole image
    this.bitTail();
  }
}

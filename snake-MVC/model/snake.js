class Snake {
  constructor() {
    this.body = [createVector(9, 9), createVector(8, 9), createVector(7, 9)];
    // direction
    this.dir = DIR.none;
  }

  setDir(dir) {
    this.dir = dir;
  }

  stop() {
    lockUp.pause();
    // this.pause = true;
    this.setDir(DIR.none);
  }

  update() {
    // if head isn't moving, don't update (move) the body
    if (this.dir !== DIR.none) {
      // each body part gets new position from the part in front of it
      // iterating from last to first so we don't overwrite positions before we forward them to the next body part
      for (let i = this.body.length - 1; i > 0; i--) {
        this.body[i].x = this.body[i - 1].x;
        this.body[i].y = this.body[i - 1].y;
      }
    }
    // at last, head then takes the new position
    this.body[0].x += this.dir.x;
    this.body[0].y += this.dir.y;

    this.hitWall();
    this.bitTail();
    this.eat();
  }

  eat() {
    let { x, y } = this.body[0]; // head
    if (x == food.location.x && y == food.location.y) {
      this.grow();
      food.eaten();
    }
  }

  grow() {
    let tail = this.body[this.body.length - 1];
    let growthUnit = createVector(tail.x, tail.y);
    this.body.push(growthUnit);
  }

  hitWall() {
    let { x, y } = this.body[0]; // head
    if (x < 0 || y < 0 || x >= gridColumns || y >= gridRows) {
      // background(255, 0, 0); // red background
      // treba da se crveni ili okvir, ili glava
      this.setDir(DIR.none);
      state.gameOver = true;
    }
  }

  bitTail() {
    let { x, y } = this.body[0]; // head
    for (let i = 1; i < this.body.length; i++) {
      if (
        // head position equal to any body part
        this.body[i].x === x &&
        this.body[i].y === y
      ) {
        // stop snake
        this.setDir(DIR.none);
        state.gameOver = true;
        break;
      }
    }
  }
}

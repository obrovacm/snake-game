class Snake {
  constructor() {
    this.body = [];
    this.body[0] = createVector(1, 0);
    this.body[1] = createVector(0, 0);
    this.xdir = 0;
    this.ydir = 0; //direction
  }

  setDir(x, y) {
    this.xdir = x;
    this.ydir = y;
  }

  update() {
    // each body part takes position of the part in front of it self
    for (let i = this.body.length - 1; i > 0; i--) {
      this.body[i].x = this.body[i - 1].x;
      this.body[i].y = this.body[i - 1].y;
    }
    // head then takes the new position
    this.body[0].x += this.xdir;
    this.body[0].y += this.ydir;
  }

  grow() {
    let tail = this.body[this.body.length - 1];
    let growthUnit = createVector(tail.x, tail.y);
    this.body.push(growthUnit);
  }

  eat(pos) {
    let x = this.body[0].x;
    let y = this.body[0].y;
    if (x == pos.x && y == pos.y) {
      print("food eaten", this.body[this.body.length - 1]);
      this.grow();
      return true;
    }
    return false;
  }

  show() {
    fill(0);
    noStroke();
    //head
    rect(this.body[0].x, this.body[0].y, 1, 1);
    //body
    for (let i = 0; i < this.body.length; i++) {
      rect(this.body[i].x, this.body[i].y, 1, 1);
    }
  }
}

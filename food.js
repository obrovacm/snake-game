class Food {
  constructor() {
    this.location = this.newLocation();
  }

  newLocation() {
    // avoid snake body!!!
    let x = floor(random(gridColumns));
    let y = floor(random(gridRows));
    return createVector(x, y);
  }

  eaten() {
    this.location = this.newLocation();
  }

  show() {
    noStroke();
    fill(255, 0, 0);
    rect(food.location.x, food.location.y, 1, 1);
  }
}

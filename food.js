class Food {
  constructor(snakeBody) {
    this.location = this.newLocation(snakeBody);
  }

  newLocation(snakeBody) {
    let x = floor(random(gridColumns));
    let y = floor(random(gridRows));
    // let snakeBodyX = snakeBody.map(bodyPart => bodyPart.x);
    // print("snakeBodyX", snakeBodyX);
    // let snakeBodyY = snakeBody.map(bodyPart => bodyPart.y);
    // print("snakeBodyY", snakeBodyY);
    // while (snakeBodyX.includes(x)) {
    //   x = floor(random(gridColumns));
    //   print("searching for food location X");
    // }
    // while (snakeBodyY.includes(y)) {
    //   y = floor(random(gridRows));
    //   print("searching for food location Y");
    // }
    return createVector(x, y);
  }

  eaten(snakeBody) {
    this.location = this.newLocation(snakeBody);
  }

  show() {
    noStroke();
    fill(255, 0, 0);
    rect(food.location.x, food.location.y, 1, 1);
  }
}

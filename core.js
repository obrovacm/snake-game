let snake, food, gridColumns, gridRows;
//canvas resolution (pixel size)
let dot = 20;

function setup() {
  noLoop();

  const canvas = createCanvas(400, 400);
  canvas.parent("canvas-container");

  frameRate(10);
  // if canvas is square, one value is enough (gridDot)
  gridColumns = floor(width / dot);
  gridRows = floor(height / dot);

  snake = new Snake();
  foodLocation();
}

function foodLocation() {
  let x = floor(random(gridColumns));
  let y = floor(random(gridRows));
  food = createVector(x, y);
  print("food", food);
}

function keyPressed() {
  loop();
  switch (keyCode) {
    case LEFT_ARROW:
      snake.setDir(-1, 0);
      break;
    case RIGHT_ARROW:
      snake.setDir(1, 0);
      break;
    case UP_ARROW:
      snake.setDir(0, -1);
      break;
    case DOWN_ARROW:
      snake.setDir(0, 1);
      break;
    case 32: // 'space' stops the snake
      snake.setDir(0, 0);
      noLoop();
      break;
    case 71: // 'g' grows the tail
      // snake.tailGrowth()
      console.log("zmija raste");
      break;
    default:
      console.log("switch neko dugme:", keyCode);
  }
}

function draw() {
  scale(dot);
  background(220);

  if (snake.eat(food)) {
    foodLocation();
  }
  snake.update();
  if (snake.gameOver()) {
    background(255, 0, 0);
    snake.setDir(0, 0);
  } else {
  }
  snake.show();

  //create food obj later
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
}

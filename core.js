let snake, food, gridColumn, gridRow;
//canvas resolution (pixel size)
let dot = 20;

function setup() {
  const canvas = createCanvas(400, 400);
  canvas.parent("canvas-container");

  frameRate(10);
  // if canvas is square, one value is enough (gridDot)
  gridColumn = floor(width / dot);
  gridRow = floor(height / dot);

  snake = new Snake();
  foodLocation();
}

function foodLocation() {
  let x = floor(random(gridColumn));
  let y = floor(random(gridRow));
  food = createVector(x, y);
  print("food", food);
}

function keyPressed() {
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
    case 83: // 's' stops the snake
      snake.setDir(0, 0);
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
  snake.show();

  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
}

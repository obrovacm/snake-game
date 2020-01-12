let snake, food, gridColumns, gridRows;
//canvas resolution (pixel/grid unit size)
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
  food = new Food();
}

// if game over => block keyPress
// block backwards
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
      snake.grow();
      snake.grow();
      snake.grow();
      console.log("zmija raste");
      break;
    default:
      console.log("switch neko dugme:", keyCode);
  }
}

function draw() {
  scale(dot);
  background(220);

  if (snake.eat(food.location)) {
    food.eaten();
  }
  snake.update();
  if (snake.gameOver()) {
    background(255, 0, 0);
    snake.setDir(0, 0);
  } else {
  }
  food.show();
  snake.show();
}
//show snake after food, so it's drawn on top when eating

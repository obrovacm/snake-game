let snake, food, gridColumns, gridRows;
//canvas resolution (pixel/grid unit size)
let dot = 20;

function setup() {
  const canvas = createCanvas(400, 400);
  canvas.parent("canvas-container");

  frameRate(10);
  // if canvas is square, one value is enough (gridDot)
  gridColumns = floor(width / dot);
  gridRows = floor(height / dot);

  snake = new Snake();
  food = new Food(snake.body);
}

// if game over => block keyPress
function keyPressed() {
  // block backward movement
  const { xdir, ydir } = snake;
  switch (keyCode) {
    case LEFT_ARROW:
      if (xdir === 0) snake.setDir(-1, 0);

      break;
    case RIGHT_ARROW:
      if (xdir === 0) snake.setDir(1, 0);
      break;
    case UP_ARROW:
      if (ydir === 0) snake.setDir(0, -1);
      break;
    case DOWN_ARROW:
      if (ydir === 0) snake.setDir(0, 1);
      break;
    // testing && development keys
    case 32: // 'space' stops the snake
      snake.setDir(0, 0);
      break;
    case 71: // 'g' grows the tail
      snake.grow();
      snake.grow();
      snake.grow();
      break;
    default:
      console.log("key pressed:", keyCode);
  }
}

function draw() {
  scale(dot);
  background(220);

  if (snake.eat(food.location)) {
    food.eaten(snake.body);
    snake.grow();
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

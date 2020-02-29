let snake, food, gridColumns, gridRows;
// blocks backward movement
let lockLeft = true,
  lockRight = false,
  lockUp = false,
  lockDown = false;
let dot = 20; //canvas resolution (pixel/grid unit size)

function setup() {
  const canvas = createCanvas(400, 400);
  canvas.parent('canvas-container');

  frameRate(10);
  // if canvas is square, one value is enough (gridDot)
  gridColumns = floor(width / dot);
  gridRows = floor(height / dot);

  snake = new Snake();
  food = new Food(snake.body);
}

// if game over => block keyPress
function keyPressed() {
  switch (keyCode) {
    case LEFT_ARROW:
      if (!lockLeft) {
        snake.setDir(-1, 0);
        snake.pause = false;
      }
      break;
    case RIGHT_ARROW:
      if (!lockRight) {
        snake.setDir(1, 0);
        snake.pause = false;
      }
      break;
    case UP_ARROW:
      if (!lockUp) {
        snake.setDir(0, -1);
        snake.pause = false;
      }
      break;
    case DOWN_ARROW:
      if (!lockDown) {
        snake.setDir(0, 1);
        snake.pause = false;
      }
      break;
    // testing && development keys
    case 32: // 'space' stops the snake
      if (snake.xdir !== 0 || snake.ydir !== 0) {
        snake.stop();
      }
      break;
    case 71: // 'g' grows the tail by 3 units
      snake.grow();
      snake.grow();
      snake.grow();
      break;
    default:
      console.log('key pressed:', keyCode);
  }
}

function draw() {
  scale(dot);
  background(220);

  if (snake.eat(food.location)) {
    food.eaten(snake.body);
  }

  snake.update();
  food.show();
  snake.show();

  // UPOTREBITI lock iz pauze za stalano
  // napravit lock objekat npr. lock.right
  // napraviti igru skalabilnijom, preorganizovati kod

  // odvojiti crtanje od logike

  // this applies only when the game is not paused
  // because lock works differently then
  if (!snake.pause) {
    // locks controls of axis direction if snake is already moving on it
    if (snake.xdir === 0 && snake.ydir !== 0) {
      lockLeft = false;
      lockRight = false;
      lockUp = true;
      lockDown = true;
    } else {
      lockLeft = true;
      lockRight = true;
      lockUp = false;
      lockDown = false;
    }
  }
}
//show snake after food, so it's drawn on top when eating

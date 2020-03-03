// const layout = {
//   // (pixel/dot/grid unit size)
//   pixel: 20, // canvas resolution
//   gridColumns: floor(width / this.dot),
//   gridRows: floor(height / this.dot)
// };
let dot = 20; //canvas resolution (pixel/grid unit size)
let snake, food, gridColumns, gridRows;

function setup() {
  const canvas = createCanvas(400, 400);
  canvas.parent('canvas-container');

  frameRate(10);
  // if canvas is square, one value is enough (gridDot)
  gridColumns = floor(width / dot);
  gridRows = floor(height / dot);

  snake = new Snake();
  food = new Food();
}

function draw() {
  scale(dot);
  background(220);

  snake.update();
  DRAW.food();
  DRAW.snake();
  if (state.gameOver) {
    DRAW.gameOver();
    lockUp.all();
  }
  lockUp.direction();
  // this applies only when the game is not paused
  // because lock works differently then
}
//show snake after food, so it's drawn on top when eating

const DRAW = {
  snake() {
    fill(0);
    noStroke();
    for (let i = 0; i < snake.body.length; i++) {
      if (i > 0) {
        fill('green');
      }
      rect(snake.body[i].x, snake.body[i].y, 1, 1);
    }
  },

  food() {
    fill('red');
    noStroke();
    rect(food.location.x, food.location.y, 1, 1);
  },

  gameOver() {
    if (this.counter) {
      this.counter = false;
    } else {
      this.counter = true;
    }

    if (this.counter % 2) {
      fill('red');
    } else {
      fill(0);
    }

    noStroke();
    rect(snake.body[0].x, snake.body[0].y, 1, 1); // head blinker

    console.log('game over');
  }
};

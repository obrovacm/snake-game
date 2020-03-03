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
  // food.show();
  // snake.show();

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

// export default draw;

console.log('radi?');

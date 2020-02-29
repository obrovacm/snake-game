// global object that's managing game's state
const state = {
  sessionStarted: false,
  gameOver: false,
  pause: false
}

// highscores
// buttons for touch control

const lock = {
  left: true,
  right: false,
  up: false,
  down: false
}

const layout = {
  // (pixel/dot/grid unit size)
  pixel: 20,  // canvas resolution 
  gridColumns: floor(width / this.dot),
  gridRows: floor(height / this.dot)

}
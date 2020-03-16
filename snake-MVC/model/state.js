// CONSTANTS
// direction setter
const DIR = {
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 },
  up: { x: 0, y: -1 },
  down: { x: 0, y: 1 },
  none: { x: 0, y: 0 }
};

/////////////////////////////////////////
// Game's STATE
////////////////////////////////////////
const state = {
  sessionStarted: false,
  gameOver: false,
  // snake's head blinks
  // background and frame blink?
  pause: false,
  reset() {
    for (key in state) {
      key = false;
    }
    lock.reset();
  }
};

////////////////////////////////////////
// LOCK / forbids next move
////////////////////////////////////////
const lock = {
  left: true,
  right: false,
  up: false,
  down: false,
  reset() {
    lock = {
      ...{
        left: true,
        right: false,
        up: false,
        down: false
      }
    };
  }
};

const lockUp = {
  direction() {
    if (snake.dir != DIR.none) {
      // locks controls of axis direction if snake is already moving on it
      if (snake.dir.x === 0 && snake.dir.y !== 0) {
        lock.left = false;
        lock.right = false;
        lock.up = true;
        lock.down = true;
      } else {
        lock.left = true;
        lock.right = true;
        lock.up = false;
        lock.down = false;
      }
    }
  },
  pause() {
    switch (snake.dir.x) {
      case -1:
        lock.left = false;
        lock.right = true;
        break;
      case 1:
        lock.left = true;
        lock.right = false;
        break;
      case 0:
        lock.left = false;
        lock.right = false;
    }
    switch (snake.dir.y) {
      case -1:
        lock.up = false;
        lock.down = true;
        break;
      case 1:
        lock.up = true;
        lock.down = false;
        break;
      case 0:
        lock.up = false;
        lock.down = false;
    }
  },
  all() {
    lock.left = true;
    lock.right = true;
    lock.up = true;
    lock.down = true;
  }
};

// NEW GAME RESET

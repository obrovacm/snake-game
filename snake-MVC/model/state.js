// global object that's managing game's state
const state = {
  sessionStarted: false,
  gameOver: false,
  // snake's head blinks
  // background and frame blink?
  pause: false
};

// locks / forbids next move
const lock = {
  left: true,
  right: false,
  up: false,
  down: false
};

// CONSTANT
const DIR = {
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 },
  up: { x: 0, y: -1 },
  down: { x: 0, y: 1 },
  none: { x: 0, y: 0 }
};

// NEW GAME RESET

// export default { state, lock, DIR };
console.log('radi?');

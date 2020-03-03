function keyPressed() {
  switch (keyCode) {
    case LEFT_ARROW:
      if (!lock.left) {
        snake.setDir(DIR.left);
        state.pause = false;
      }
      break;
    case RIGHT_ARROW:
      if (!lock.right) {
        snake.setDir(DIR.right);
        state.pause = false;
      }
      break;
    case UP_ARROW:
      if (!lock.up) {
        snake.setDir(DIR.up);
        state.pause = false;
      }
      break;
    case DOWN_ARROW:
      if (!lock.down) {
        snake.setDir(DIR.down);
        state.pause = false;
      }
      break;
    // testing && development keys
    case 32: // 'space' stops the snake
      if (snake.dir.x !== 0 || snake.dir.y !== 0) {
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

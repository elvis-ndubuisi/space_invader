import Input from "./Input.js";
import Player from "./Player.js";

class Game {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.isGameOver = false;
    this.isPaused = false;
    this.inputs = [];
    this.player = new Player(this);
    this.input = new Input(this);
  }

  updateFrame(deltaTime) {
    this.player.updateFrame(deltaTime);
  }

  drawFrame(context) {
    this.player.drawFrame(context);
  }
}

export default Game;

class Player {
  constructor(game) {
    this.game = game;
    this.width = 40;
    this.height = 60;
    this.posX = (this.game.width - this.width) * 0.5;
    this.posY = (this.game.height - this.height) * 0.98;
    this.velocity = 5;
  }

  updateFrame(deltaTime) {
    //#region Set movement boundaries
    if (this.posX > this.game.width - this.width)
      this.posX = this.game.width - this.width;
    else if (this.posX < this.game.width * 0) this.posX = 0;

    if (this.posY < this.game.height * 0 - this.height * 0.5)
      this.posY = this.game.height * 0 - this.height * 0.5;
    else if (this.posY > this.game.height - this.height)
      this.posY = this.game.height - this.height;
    //#endregion

    //#region Handle player input
    if (
      this.game.inputs.includes("a") ||
      this.game.inputs.includes("ArrowLeft")
    ) {
      this.posX -= this.velocity;
    } else if (
      this.game.inputs.includes("d") ||
      this.game.inputs.includes("ArrowRight")
    ) {
      this.posX += this.velocity;
    }
    if (
      this.game.inputs.includes("ArrowUp") ||
      this.game.inputs.includes("w")
    ) {
      this.posY -= this.velocity;
    } else if (
      this.game.inputs.includes("ArrowDown") ||
      this.game.inputs.includes("s")
    ) {
      this.posY += this.velocity;
    }
    //#endregion
  }

  drawFrame(context) {
    context.fillStyle = "yellow";
    context.fillRect(this.posX, this.posY, this.width, this.height);
  }

  #shootMissle() {}
}

export default Player;

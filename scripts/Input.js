class Input {
  constructor(game) {
    this.game = game;
    window.addEventListener("keydown", (e) => {
      if (!this.game.inputs.includes(e.key)) this.game.inputs.push(e.key);
    });
    window.addEventListener("keyup", (e) => {
      if (this.game.inputs.includes(e.key))
        this.game.inputs.splice(this.game.inputs.indexOf(e.key), 1);
    });
  }
}

export default Input;

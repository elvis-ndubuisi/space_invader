import Game from "./scripts/Game.js";

let lastTime = 0;
let gameCanvas;
let ctx;

function initGame() {
  gameCanvas = document.getElementById("gameCanvas");
  ctx = gameCanvas.getContext("2d");

  gameCanvas.width = window.innerWidth;
  gameCanvas.height = window.innerHeight;

  const game = new Game(gameCanvas.width, gameCanvas.height);
  const animate = (timeStamp) => {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    game.drawFrame(ctx);
    game.updateFrame(deltaTime);
    requestAnimationFrame(animate);
  };
  animate(0);
}

initGame();

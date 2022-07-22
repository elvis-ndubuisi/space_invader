class GameObject {
  constructor(game) {
    this.game = game;
  }

  update(deltaTime) {}

  draw(context) {
    context.fillStyle = "yellow";
    context.fillRect(this.x, this.y, this.objectWidth, this.objectHeight);
    if (this.sprite)
      context.drawImage(
        this.sprite,
        this.spriteFrameX,
        this.spriteFrameY,
        this.spriteSizeX,
        this.spriteSizeY,
        dx,
        dy,
        dw,
        dh
      );
  }
}

class Player extends GameObject {
  constructor(game) {
    super(game);
    this.objectWidth = 50;
    this.objectHeight = 80;
    this.x = 20;
    this.y = 20;
    // sprite
    this.spriteSizeX = 0;
    this.spriteSizeY = 0;
    this.spriteFrameX = 0;
    this.spriteFrameY = 0;
  }
}

class Enemy extends GameObject {
  constructor(game) {
    super(game);
    this.objectWidth = 90;
    this.objectHeight = 30;
    this.x = 10;
    this.y = 10;
  }
}

class Game {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.player = new Player(this);
    this.enemy = new Enemy(this);
  }

  update(deltaTime) {
    this.player.update();
    // this.enemy.update();
  }

  draw(context) {
    this.player.draw(context);
    this.enemy.draw(context);
  }
}

window.onload = initGame();

function initGame() {
  const canvas = document.getElementById("canvasOne");
  const ctx = canvas.getContext("2d");
  let lastTime = 0;

  canvas.width = 300;
  canvas.height = window.innerHeight;

  const game = new Game(canvas.width, canvas.height);
  // animation
  const animate = (timeStamp) => {
    const deltaTime = (timeStamp = lastTime);
    lastTime = timeStamp;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.update(deltaTime);
    game.draw(ctx);
    requestAnimationFrame(animate);
  };
  animate(0);
}

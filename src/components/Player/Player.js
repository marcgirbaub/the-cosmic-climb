import Component from "../Component/Component";

class Player extends Component {
  constructor(parentElement, gameWidth, gameHeight) {
    super(parentElement);

    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.width = 64;
    this.height = 64;
    this.x = this.gameWidth * 0.4 - this.width / 2;
    this.y = this.gameHeight - this.height * 2;
    this.image = document.querySelector(".alienidle");
    this.frameX = 0;
    this.frameY = 0;
    this.speed = 0;
    this.vy = 0;
    this.weight = 1;
  }

  render(context) {
    super.render();

    context.drawImage(
      this.image,
      this.frameX * this.width,
      this.frameY * this.height,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height,
    );
  }

  update(input) {
    if (
      this.isOnGround() &&
      input.key === "ArrowRight" &&
      !this.isOnRightBoundary()
    ) {
      this.speed = 4;
      this.vy -= 12;
    } else if (
      this.isOnGround() &&
      input.key === "ArrowLeft" &&
      !this.isOnLeftBoundary()
    ) {
      this.speed = -4;
      this.vy -= 12;
    } else if (this.isOnGround() && input.key === "ArrowUp") {
      this.vy -= 12;
    }

    this.x += this.speed;
    this.y += this.vy;

    if (!this.isOnGround()) {
      this.vy += this.weight;
    } else {
      this.vy = 0;
      this.speed = 0;
    }
  }

  isOnGround() {
    return this.y >= this.gameHeight - this.height * 2;
  }

  isOnLeftBoundary() {
    return this.x <= this.gameWidth * 0.4 - this.width / 2;
  }

  isOnRightBoundary() {
    return this.x > this.gameWidth * 0.4 - this.width / 2;
  }
}

export default Player;

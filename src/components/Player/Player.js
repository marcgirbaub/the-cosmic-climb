import Falling from "../../states/Falling";
import Jumping from "../../states/Jumping";
import Standing from "../../states/Standing";
import Component from "../Component/Component";

class Player extends Component {
  maxFrame;
  scaleX;

  constructor(parentElement, gameWidth, gameHeight, game, input) {
    super(parentElement);

    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.input = input;
    this.width = 64;
    this.height = 64;
    this.x = this.gameWidth * 0.4 - this.width;
    this.y = this.gameHeight - this.height * 2;
    this.image = document.querySelector(".idle-jump");
    this.frameX = 1;
    this.frameY = 0;
    this.speed = 0;
    this.vy = 0;
    this.weight = 1;
    this.states = [new Standing(this), new Jumping(this), new Falling(this)];
    this.currentState = this.states[0];
    this.currentState.enter();
    this.game = game;
    this.lastScaleX = 1;
  }

  render(context) {
    super.render();

    if (this.input.key === "ArrowLeft") {
      this.scaleX = -1;
      this.lastScaleX = -1;
    } else if (this.input.key === "ArrowRight") {
      this.scaleX = 1;
      this.lastScaleX = 1;
    } else if (!this.input.key) {
      this.scaleX = this.lastScaleX;
    }

    context.save();

    context.scale(this.scaleX, 1);

    context.drawImage(
      this.image,
      this.frameX * this.width,
      this.frameY * this.height,
      this.width,
      this.height,
      this.x * this.scaleX,
      this.y,
      this.width * this.scaleX,
      this.height,
    );

    context.restore();
  }

  update(input) {
    this.currentState.handleInput(input);

    this.x += this.speed;
    this.y += this.vy;

    if (!this.isOnGround()) {
      this.vy += this.weight;
    } else {
      this.vy = 0;
      this.speed = 0;
    }
  }

  setState(state) {
    this.currentState = this.states[state];
    this.currentState.enter(this.game.input);
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

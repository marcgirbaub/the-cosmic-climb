import isMobile from "../../lib/isMobile";
import Background from "../Background/Background";
import Component from "../Component/Component";
import InputHandler from "../InputHandler/InputHandler";
import Player from "../Player/Player";

class Game extends Component {
  input;
  player;

  constructor() {
    super(document.querySelector("#app"), "game", "canvas");

    this.ctx = this.element.getContext("2d");
    this.element.width = isMobile() ? window.innerWidth : 390;
    this.element.height = isMobile() ? window.innerHeight : 600;
    this.gameFrame = 0;
    this.staggerFrame = 8;
  }

  render() {
    super.render();

    this.input = new InputHandler();

    this.background = new Background(
      this.element,
      this.element.width,
      this.element.height,
    );
    this.background.render(this.ctx);

    this.player = new Player(
      this.element,
      this.element.width,
      this.element.height,
    );
    this.player.render(this.ctx);

    this.animate = this.animate.bind(this);
    this.animate();
  }

  animate() {
    this.ctx.clearRect(0, 0, this.element.width, this.element.height);
    this.background.render(this.ctx);

    if (!this.player.isOnGround()) {
      this.background.update();
    }

    this.player.render(this.ctx);

    if (this.background.y <= -1) this.player.update(this.input);

    if (this.player.isOnGround() && this.gameFrame % this.staggerFrame === 0) {
      if (this.player.frameX < 14) {
        this.player.frameX++;
      } else {
        this.player.frameX = 0;
      }
    }

    this.gameFrame++;

    requestAnimationFrame(this.animate);
  }
}

export default Game;

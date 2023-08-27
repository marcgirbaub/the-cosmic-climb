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
    this.element.width = 390;
    this.element.height = 600;
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
    this.player.render(this.ctx);
    this.player.update(this.input);
    requestAnimationFrame(this.animate);
  }
}

export default Game;

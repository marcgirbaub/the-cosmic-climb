import State from "./State";
import states from "./states";

class Jumping extends State {
  constructor(player) {
    super("jumping");

    this.player = player;
  }

  enter(input) {
    if (input.key === "ArrowRight") {
      this.player.vy -= 12;
      this.player.speed = 4;
    } else if (input.key === "ArrowLeft") {
      this.player.vy -= 12;
      this.player.speed = -4;
    } else if (input.key === "ArrowUp") {
      this.player.vy -= 12;
    }

    this.player.frameY = 1;
  }

  handleInput() {
    if (this.player.vy > this.player.weight) {
      this.player.setState(states.falling);
    }
  }
}

export default Jumping;

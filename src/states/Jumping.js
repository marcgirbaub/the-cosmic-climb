import State from "./State";
import states from "./states";

class Jumping extends State {
  constructor(player) {
    super("jumping");

    this.player = player;
  }

  enter(input) {
    this.player.frameX = 0;
    this.player.maxFrame = 7;

    if (input.type) {
      if (input.key === "ArrowRight" && this.player.isOnRightBoundary()) {
        this.player.vy -= 12;
        return;
      }

      if (input.key === "ArrowLeft" && this.player.isOnLeftBoundary()) {
        this.player.vy -= 12;
        return;
      }
    }

    if (input.key === "ArrowRight") {
      this.player.vy -= 12;
      this.player.speed = 6;
    }

    if (input.key === "ArrowLeft") {
      this.player.vy -= 12;
      this.player.speed = -6;
    }

    if (input.key === "ArrowUp") {
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

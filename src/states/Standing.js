import State from "./State";
import states from "./states";

class Standing extends State {
  constructor(player) {
    super("standing");

    this.player = player;
  }

  enter() {
    this.player.frameX = 0;
    this.player.maxFrame = 14;
    this.player.frameY = 0;
  }

  handleInput(input) {
    if (!this.player.isOnGround()) {
      return;
    }

    if (input.type) {
      this.player.setState(states.jumping);

      return;
    }

    if (input.key === "ArrowUp") {
      this.player.setState(states.jumping);
    } else if (input.key === "ArrowRight" && !this.player.isOnRightBoundary()) {
      this.player.setState(states.jumping);
    } else if (input.key === "ArrowLeft" && !this.player.isOnLeftBoundary()) {
      this.player.setState(states.jumping);
    }
  }
}

export default Standing;

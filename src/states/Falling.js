import State from "./State";
import states from "./states";

class Falling extends State {
  constructor(player) {
    super("falling");

    this.player = player;
  }

  enter() {
    this.player.frameX = 0;
    this.player.maxFrame = 7;
    this.player.frameY = 1;
  }

  handleInput() {
    if (this.player.isOnGround()) {
      this.player.setState(states.standing);
    }
  }
}

export default Falling;

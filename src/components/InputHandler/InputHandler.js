class InputHandler {
  key;
  jumpPressed = false;
  type;

  constructor(player) {
    this.player = player;

    window.addEventListener("keydown", (event) => {
      if (!this.jumpPressed) {
        this.key = event.key;
        if (
          this.key === "ArrowRight" ||
          this.key === "ArrowLeft" ||
          this.key === "ArrowUp" ||
          this.key === "ArrowDown"
        ) {
          this.jumpPressed = true;
        }
      }
    });

    window.addEventListener("keyup", (event) => {
      if (
        event.key === "ArrowRight" ||
        event.key === "ArrowLeft" ||
        event.key === "ArrowUp" ||
        event.key === "ArrowDown"
      ) {
        this.jumpPressed = false;
        this.key = "";
      }
    });

    window.addEventListener("touchstart", (event) => {
      this.type = event.type;
      const touchSide =
        window.innerWidth / 2 > event.changedTouches[0].pageX
          ? "ArrowLeft"
          : "ArrowRight";

      if (this.player.isOnLeftBoundary() && touchSide === "ArrowLeft") {
        this.key = "ArrowUp";
      } else if (
        this.player.isOnRightBoundary() &&
        touchSide === "ArrowRight"
      ) {
        this.key = "ArrowUp";
      } else {
        this.key = touchSide;
      }
    });

    window.addEventListener("touchend", () => {
      this.type = "";
      this.key = "";
    });
  }
}

export default InputHandler;

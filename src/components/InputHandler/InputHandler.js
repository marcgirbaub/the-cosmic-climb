class InputHandler {
  key = "";
  jumpPressed = false;
  type;

  constructor() {
    window.addEventListener("keydown", (event) => {
      if (!this.jumpPressed) {
        this.key = event.key;
        if (
          this.key === "ArrowRight" ||
          this.key === "ArrowLeft" ||
          this.key === "ArrowUp"
        ) {
          this.jumpPressed = true;
        }
      }
    });

    window.addEventListener("keyup", (event) => {
      if (
        event.key === "ArrowRight" ||
        event.key === "ArrowLeft" ||
        event.key === "ArrowUp"
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

      this.type = "touch";
      this.key = touchSide;
    });

    window.addEventListener("touchend", () => {
      this.type = "";
      this.key = "";
      this.touchSide = "";
    });
  }
}

export default InputHandler;

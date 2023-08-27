class InputHandler {
  key;
  jumpPressed = false;

  constructor() {
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
  }
}

export default InputHandler;

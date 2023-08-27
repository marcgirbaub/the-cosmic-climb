import Component from "../Component/Component";

class Background extends Component {
  constructor(parentElement, gameWidth, gameHeight) {
    super(parentElement);

    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.width = 390;
    this.height = 3000;
    this.x = 0;
    this.y = -this.height + this.gameHeight;
    this.image = document.querySelector(".background");
  }

  render(context) {
    super.render();

    context.drawImage(this.image, this.x, this.y);
  }
}

export default Background;

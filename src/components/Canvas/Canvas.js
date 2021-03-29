import React from "react";
import "./Canvas.css";

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidUpdate() {
    const { time } = this.props;
    const canvas = this.canvasRef.current;
    const context = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    for (let x = 0; x <= 30; x++) {
      for (let y = 0; y <= 30; y++) {
        // Tweak RGB values to get different color gradients (only need to modify 1st num for each var)
        const r = Math.floor(150 + 64 * Math.cos((x * x - y * y) / 300 + time));
        const g = Math.floor(
          150 +
            64 *
              Math.sin(
                (x * x * Math.cos(time / 4) + y * y * Math.sin(time / 3)) / 300
              )
        );
        const b = Math.floor(
          175 +
            64 *
              Math.sin(
                5 * Math.sin(time / 9) +
                  ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
              )
        );
        context.fillStyle = `rgba(${r}, ${g}, ${b}, 0.1)`;
        context.fillRect(x, y, width, height);
      }
    }
  }

  render() {
    return <canvas width="32" height="32" ref={this.canvasRef}></canvas>;
  }
}

export default Canvas;

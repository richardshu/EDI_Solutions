import React from "react";
import Canvas from "../Canvas/Canvas";
import "./Animation.css";

class Animation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0 };
    this.updateAnimationState = this.updateAnimationState.bind(this);
  }

  componentDidMount() {
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rAF);
  }

  updateAnimationState() {
    this.setState((prevState) => ({ time: prevState.time + 0.03 }));
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  render() {
    return (
      <div className="Animation">
        <Canvas time={this.state.time} />
      </div>
    );
  }
}

export default Animation;

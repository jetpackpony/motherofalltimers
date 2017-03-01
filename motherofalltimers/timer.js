import React, { Component } from 'react';
import Svg, { Path } from 'react-native-svg';

const startAngle = 90;
const radPerDegree = Math.PI / 180.0

let polarToCartesian = function(x, y, r, angle) {
  let rad = angle * radPerDegree;
  return {
    x: x + r * Math.cos(rad),
    y: y - r * Math.sin(rad)
  };
};

let calculateTimerRim = function(cx, cy, r, percent) {
  let endAngle = 360 * (1 - percent) + startAngle;

  let start = polarToCartesian(cx, cy, r, startAngle);
  let end = polarToCartesian(cx, cy, r, endAngle);

  let isLargeArc = (endAngle - startAngle <= 180) ? "1" : "0";

  return `M${start.x} ${start.y} A ${r} ${r} 0 ${isLargeArc} 1 ${end.x} ${end.y}`;
};

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { percent: 0.999 };

    this.start = null;
    requestAnimationFrame(this.step.bind(this));
  }

  step(timestamp) {
    if (!this.start) this.start = timestamp;
    let passed = timestamp - this.start;
    if (passed < this.props.time) {
      let percent = (this.props.time - passed) / this.props.time;
      percent = Math.round(percent * 1000) / 1000;
      if (percent < 0.999) {
        this.setState({ percent });
      }
      requestAnimationFrame(this.step.bind(this));
    }
  }

  render() {
    let center = this.props.size / 2;
    let radius = this.props.size * 0.45;
    let dots = calculateTimerRim(center, center, radius, this.state.percent);
    return (
      <Svg
        height={this.props.size}
        width={this.props.size}
      >
        <Path
          d={dots}
          stroke="red"
          strokeWidth="3"
          fill="transparent"
        />
      </Svg>
    );
  }
}

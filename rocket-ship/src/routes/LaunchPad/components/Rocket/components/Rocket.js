import React, { useState, Component } from "react";
import RocketCore from "./RocketCore";
import { MemoizedRocketCore } from "./RocketCore";

export function FunctionalRocket() {
  const [initialLaunchTime] = useState(Date.now());

  return <MemoizedRocketCore initialLaunchTime={initialLaunchTime} />;
}

export class ClassRocket extends Component {
  constructor() {
    super();

    this.state = {
      initialLaunchTime: Date.now(),
    };
  }

  render() {
    const { initialLaunchTime } = this.state;

    return <MemoizedRocketCore initialLaunchTime={initialLaunchTime} />;
  }
}

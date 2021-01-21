import React from "react";
import StateManagerContext from "./StateManagerContext";
import StateManagerType from "./types/state-manager";

interface Props {
  manager: StateManagerType;
  children: any; // Cheating; whatever
}

export default class StateManager extends React.Component {
  props: Props;

  render() {
    const hoc =
      this.props.manager.render ||
      ((children: React.Component): React.Component => children);
    return (
      <StateManagerContext.Provider value={this.props.manager}>
        {hoc(this.props.children)}
      </StateManagerContext.Provider>
    );
  }
}

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
    return (
      <StateManagerContext.Provider value={this.props.manager}>
        {this.props.children}
      </StateManagerContext.Provider>
    );
  }
}

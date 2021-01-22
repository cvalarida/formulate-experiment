import React from "react";

// interface SubscribeOnChangeFunc {
//   (oldState: any, newState: any): void;
// }

/**
 * The interface for what defines a state manager
 */
export default interface StateManager {
  // Not sure how to say that it should have an optional defaultState
  constructor?: Function;
  getState(path?: string): any;
  setState(path: string, value: any): void;
  render?(children: React.Component): React.Component;
  // This type is inaccurate
  connect(mapStateToProps: Function): Function;
}

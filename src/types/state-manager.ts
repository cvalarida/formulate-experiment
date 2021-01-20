/**
 * The interface for what passes as a state manager
 */

// interface SubscribeOnChangeFunc {
//   (oldState: any, newState: any): void;
// }

export default interface StateManager {
  // Not sure how to say that it should have an optional defaultState
  constructor: Function;
  getState(path?: string): any;
  setState(path: string, value: any): void;
  // Not sure if we'll actually want this yet
  // subscribe(path: string, onChange: SubscribeOnChangeFunc): void;
}

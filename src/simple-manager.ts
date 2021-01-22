import { set, get, cloneDeep } from "lodash";

/**
 * A simple state manger.
 *
 * Uses an object to store state.
 */
import StateManager from "./types/state-manager";

class SimpleManager implements StateManager {
  // This is the entire state
  private state: object;

  constructor(defaultState: object = {}) {
    this.state = defaultState;
  }

  getState(path?: string) {
    if (!path) return cloneDeep(this.state);
    return cloneDeep(get(this.state, path));
  }

  setState(path: string, value: any) {
    set(this.state, path, value);
    console.log("current state:", this.state);
  }
}

const simpleManager = new SimpleManager();

export default simpleManager;

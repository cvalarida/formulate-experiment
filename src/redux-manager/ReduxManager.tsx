import { createStore, combineReducers, Store } from "redux";
import { Provider, connect } from "react-redux";
import { get } from "lodash";

import StateManager from "../types/state-manager";
import formReducers from "./form-reducers";
import { SET_DATA } from "./form-actions";

class ReduxManager implements StateManager {
  static stateManagerName = "ReduxManager";

  store: Store;

  constructor() {
    this.store = createStore(combineReducers({ form: formReducers }));
  }

  // @ts-ignore
  render = children => {
    return <Provider store={this.store}>{children}</Provider>;
  };

  getState = (path?: string): any => {
    const currentState = this.store.getState();
    return get(currentState, path);
  };

  setState = (path: string, value: any): void => {
    this.store.dispatch({
      type: SET_DATA,
      path,
      data: value
    });
  };

  // @ts-ignore
  connect(mapStateToProps: Function) {
    // @ts-ignore
    return connect(mapStateToProps);
  }
}

export default new ReduxManager();
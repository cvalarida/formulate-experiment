import { cloneDeep, set } from "lodash";
import { SET_DATA } from "./form-actions";

const initialState = {};

export default function formReducers(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case SET_DATA: {
      const newState = cloneDeep(state);
      set(newState, action.path, action.data);
      console.log("  newState:", newState);
      return newState;
    }
    default:
      return state;
  }
}

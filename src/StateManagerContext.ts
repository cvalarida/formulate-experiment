import React from "react";
import StateManagerType from "./types/state-manager";
import reduxManager from "./redux-manager";

export default React.createContext<StateManagerType>(reduxManager);

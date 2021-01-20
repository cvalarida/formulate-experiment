import React from "react";
import StateManagerType from "./types/state-manager";
import SimpleManager from "./simple-state";

export default React.createContext<StateManagerType>(SimpleManager);

import React, { useContext } from "react";
import StateManager from "./StateManagerContext";

const StateViewer = () => {
  const sm = useContext(StateManager);
  const data = JSON.stringify(sm.getState(), null, 2);

  return <code>{data}</code>;
};

export default StateViewer;

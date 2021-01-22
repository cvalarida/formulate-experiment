import React, { useContext } from "react";
import StateManager from "./StateManagerContext";

const StateViewer = () => {
  const sm = useContext(StateManager);
  const mapStateToProps = state => ({ state });

  const ConnectedStateViewer = sm.connect(mapStateToProps)(({ state }) => (
    <code>{JSON.stringify(state, null, 2)}</code>
  ));

  return <ConnectedStateViewer />;
};

export default StateViewer;

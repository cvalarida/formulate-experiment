import React, { useContext } from "react";
import StateManager from "./StateManagerContext";

const mapStateToProps = state => ({ state });

const connectedComponent = ({ state }) => (
  <code>{JSON.stringify(state, null, 2)}</code>
);

const StateViewer = () => {
  const sm = useContext(StateManager);

  const ConnectedStateViewer = sm.connect(mapStateToProps)(connectedComponent);

  return <ConnectedStateViewer />;
};

export default StateViewer;

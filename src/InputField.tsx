import React, { useContext } from "react";
import StateManager from "./StateManagerContext";

const InputField = ({ name }: { name: string }) => {
  const sm = useContext(StateManager);
  const data = sm.getState(name);
  const setData = (newData: React.ChangeEvent<HTMLInputElement>) =>
    sm.setState(name, newData.target.value);

  return <input value={data} onChange={setData} />;
};

export default InputField;

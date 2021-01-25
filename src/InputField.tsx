import React, { useState, useContext } from "react";
import { get } from "lodash";

import StateManager from "./StateManagerContext";
import runValidations, { ValidationFunction, isRequired } from "./validations";

const mapStateToProps = (formData: object) => formData;

const connectedComponent = ({
  formData,
  dataPath,
  label,
  setData,
  validations
}: {
  formData: object;
  dataPath: string;
  label: string;
  setData(event: React.ChangeEvent<HTMLInputElement>): void;
  validations: Array<ValidationFunction>;
}) => {
  const fieldData = get(formData, dataPath);
  const [dirty, setDirty] = useState(false);
  let validationError = null;

  // This should run every time anything in formData changes because this
  // component is connected to the root formData in the redux store. Of course,
  // this _also_ means this is re-rendered a lot. Need to solve this in the
  // actual implementation.
  if (dirty) validationError = runValidations(validations, formData, dataPath);
  if (!validationError) console.log(`Field invalid: ${dataPath}`);

  return (
    <>
      <label htmlFor={dataPath}>{label}</label>
      {validationError && <span>{validationError}</span>}
      <input
        name={dataPath}
        value={fieldData}
        onChange={setData}
        onBlur={() => setDirty(true)}
      />
    </>
  );
};

const InputField = ({
  data: dataPath,
  label,
  validations = [],
  required
}: {
  data: string;
  label: string;
  validations?: Array<ValidationFunction>;
  required: boolean;
}) => {
  const sm = useContext(StateManager);
  const fieldData = sm.getState(dataPath);
  const setData = (newData: React.ChangeEvent<HTMLInputElement>) =>
    sm.setState(dataPath, newData.target.value);
  const allValidations = required ? [isRequired, ...validations] : validations;

  const ConnectedInputField = sm.connect(mapStateToProps)(connectedComponent);

  return (
    <ConnectedInputField
      fieldData={fieldData}
      dataPath={dataPath}
      label={label}
      setData={setData}
      validations={allValidations}
    />
  );
};

export default InputField;

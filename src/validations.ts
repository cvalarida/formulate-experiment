import { get } from "lodash";

export interface ValidationFunction {
  // Return the string of the validation error or null if the data is valid
  (formData: object, fieldPath: string): string | null;
}

// It should probably return the actual validation error message, but for now,
// let's use a boolean
const runValidations = (validationList, formData, fieldPath): string | null => {
  console.log(`running validations on ${fieldPath}`);
  const validationError = validationList.reduce(
    (error: string | null, vf: ValidationFunction) =>
      error || vf(formData, fieldPath),
    null
  );
  console.log(`  ${fieldPath} validation error:`, validationError);
  return validationError;
};

export default runValidations;

/***************\
 *             *
 * Validations *
 *             *
\***************/

export const isRequired: ValidationFunction = (formData, path) =>
  [undefined, ""].includes(get(formData, path)) ? "This is required" : null;

// Next validation experiment:
export const matches = (matchPath): ValidationFunction => (formData, path) =>
  get(formData, path) !== get(formData, matchPath)
    ? `Must match ${matchPath}`
    : null;

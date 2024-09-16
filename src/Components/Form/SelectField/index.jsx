import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "../../TextError";

const SelectField = (props) => {
  const { label, name, options, required = false, ...rest } = props;

  return (
    <div className="form-control">
      {required ? (
        <div className="label-flex">
          <label htmlFor={name}>{label}</label>
          <label data-required>*</label>
        </div>
      ) : (
        <label htmlFor={name}>{label}</label>
      )}

      <Field as="select" id={name} name={name} {...rest}>
        {options.map((option, index) => {
          return (
            <option key={option.value + index} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>

      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default SelectField;

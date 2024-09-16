import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../../TextError";

const InputField = (props) => {
  const { label, name, required, ...rest } = props;

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

      <Field id={name} name={name} {...rest} />

      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default InputField;

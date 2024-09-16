import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "../../TextError";

const TextareaField = (props) => {
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

      <Field as="textarea" id={name} name={name} {...rest} />

      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default TextareaField;

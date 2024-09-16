import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "../../TextError";

const RadioField = (props) => {
  const { label, name, options, required, ...rest } = props;

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

      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option, index) => {
            return (
              <React.Fragment key={option.key + index}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />

                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>

      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default RadioField;

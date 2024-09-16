import React from "react";
import { ErrorMessage, Field } from "formik";
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextError from "../../TextError";
import CalenderIcon from "../../../assets/calender.png";

const DatePickerField = (props) => {
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

      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;

          return (
            <DateView
              id={name}
              {...field}
              selected={value}
              onChange={(updatedValue) => {
                setFieldValue(name, updatedValue);
              }}
              closeOnScroll={true}
              showWeekNumbers
              showIcon
              icon={CalenderIcon}
            />
          );
        }}
      </Field>

      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default DatePickerField;

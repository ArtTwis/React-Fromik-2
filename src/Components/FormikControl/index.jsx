import React from "react";
import InputField from "../Form/InputField";
import TextareaField from "../Form/TextareaField";
import SelectField from "../Form/SelectField";
import RadioField from "../Form/RadioField";
import CheckboxField from "../Form/CheckboxField";
import DatePickerField from "../Form/DatePickerField";
import ChakraInputField from "../Form/ChakraInputField";

const FormikControl = (props) => {
  const { control, ...rest } = props;

  switch (control) {
    case "input":
      return <InputField {...rest} />;
    case "chakraInput":
      return <ChakraInputField {...rest} />;
    case "textarea":
      return <TextareaField {...rest} />;
    case "select":
      return <SelectField {...rest} />;
    case "radio":
      return <RadioField {...rest} />;
    case "checkbox":
      return <CheckboxField {...rest} />;
    case "date":
      return <DatePickerField {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;

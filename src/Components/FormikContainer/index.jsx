import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../FormikControl";

const FormikContainer = () => {
  const dropdownOptions = [
    {
      key: "Select an option",
      value: "",
    },
    {
      key: "Option 1",
      value: "option1",
    },
    {
      key: "Option 2",
      value: "option2",
    },
    {
      key: "Option 3",
      value: "option3",
    },
  ];

  const radioOptions = [
    {
      key: "Option 1",
      value: "rOption1",
    },
    {
      key: "Option 2",
      value: "rOption2",
    },
    {
      key: "Option 3",
      value: "rOption3",
    },
  ];

  const checkboxOptions = [
    {
      key: "Option 1",
      value: "cbOption1",
    },
    {
      key: "Option 2",
      value: "cbOption2",
    },
    {
      key: "Option 3",
      value: "cbOption3",
    },
  ];

  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
    checkboxOption: [],
    birthdate: Date.now(),
  };

  const validationYupSchema = Yup.object({
    email: Yup.string()
      .email("Enter valid email!")
      .required("Field must required!"),
    description: Yup.string().required("Field must required!"),
    selectOption: Yup.string().required("Field must required!"),
    radioOption: Yup.string().required("Field must required!"),
    checkboxOption: Yup.array().min(1, "Field must required!"),
    birthdate: Yup.date().required("Field must required!"),
  });

  const onSubmit = (values) => console.log("Form Values :>> ", values);

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationYupSchema}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={onSubmit}
      >
        {(formikProps) => (
          <Form>
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
              required={true}
            />

            <FormikControl
              control="textarea"
              label="Description"
              name="description"
              required={true}
            />

            <FormikControl
              control="select"
              label="Select a topic"
              name="selectOption"
              options={dropdownOptions}
              required={true}
            />

            <FormikControl
              control="radio"
              label="Radio topic"
              name="radioOption"
              options={radioOptions}
              required={true}
            />

            <FormikControl
              control="checkbox"
              label="Checkbox topic"
              name="checkboxOption"
              options={checkboxOptions}
              required={true}
            />

            <FormikControl
              control="date"
              label="Birth date"
              name="birthdate"
              required={true}
            />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikContainer;

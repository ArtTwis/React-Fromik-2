import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "../../Components/FormikControl";

const RegistrationForm = () => {
  const radioOptions = [
    {
      key: "Email",
      value: "emailmoc",
    },
    {
      key: "Telephone",
      value: "telephonemoc",
    },
  ];

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    modeOfContact: "",
    phone: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format!")
      .required("Field must required!"),
    password: Yup.string().required("Field must required!"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Password must match!")
      .required("Field must required!"),
    modeOfContact: Yup.string().required("Firld must required!"),
    phone: Yup.string().when("modeOfContact", {
      is: "telephonemoc",
      then: Yup.string().required("Field must required!"),
    }),
  });

  const onSubmit = (values) => console.log("FormData :>> ", values);

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
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
              required
            />

            <FormikControl
              control="input"
              type="password"
              label="Password"
              name="password"
              required
            />

            <FormikControl
              control="input"
              type="password"
              label="Confirm password"
              name="confirmPassword"
              required
            />

            <FormikControl
              control="radio"
              label="Mode of Contact"
              name="modeOfContact"
              options={radioOptions}
              required
            />

            <FormikControl
              control="input"
              type="text"
              label="Phone number"
              name="phone"
              required
            />

            <button type="submit" disabled={!formikProps.isValid}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;

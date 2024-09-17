import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "../../Components/FormikControl";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format!")
      .required("Field must required!"),
    password: Yup.string().required("Field must required!"),
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

            <button type="submit" disabled={!formikProps.isValid}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;

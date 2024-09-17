import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "../../Components/FormikControl";

const CourseEnrollmentForm = () => {
  const courseDropdownOptions = [
    {
      key: "Select course",
      value: "",
    },
    {
      key: "Angular",
      value: "angular",
    },
    {
      key: "React",
      value: "react",
    },
    {
      key: "Vue",
      value: "vue",
    },
  ];

  const skillsetCheckboxOptions = [
    {
      key: "HTML",
      value: "html",
    },
    {
      key: "CSS",
      value: "css",
    },
    {
      key: "Javascript",
      value: "javascript",
    },
  ];

  const initialValues = {
    email: "",
    bio: "",
    course: "",
    skillset: [],
    courseDate: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format!")
      .required("Field must required!"),
    bio: Yup.string().required("Field must required!"),
    course: Yup.string().required("Field must required!"),
    skillset: Yup.array().min(1, "Select atleast 1 option!"),
    courseDate: Yup.date().required("Field must required!").nullable(),
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
        {(formikProps) => {
          return (
            <Form>
              <FormikControl
                control="input"
                type="email"
                name="email"
                label="Email"
                required
              />

              <FormikControl
                control="input"
                type="text"
                name="bio"
                label="Bio"
                required
              />

              <FormikControl
                control="select"
                name="course"
                label="Course"
                options={courseDropdownOptions}
                required
              />

              <FormikControl
                control="checkbox"
                name="skillset"
                label="Skillset"
                options={skillsetCheckboxOptions}
                required
              />

              <FormikControl
                control="date"
                label="Course date"
                name="courseDate"
                required
              />

              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CourseEnrollmentForm;

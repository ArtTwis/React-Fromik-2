import React from "react";
import { ThemeProvider, theme as chakraTheme } from "@chakra-ui/react";
import "./App.css";
import FormikContainer from "./Components/FormikContainer";
import LoginForm from "./Views/LoginForm";
import RegistrationForm from "./Views/RegistrationForm";
import CourseEnrollmentForm from "./Views/CourseEnrollmentForm";

const App = () => {
  return (
    <ThemeProvider theme={chakraTheme}>
      <div className="App">
        {/* <FormikContainer /> */}
        {/* <LoginForm /> */}
        {/* <RegistrationForm /> */}
        <CourseEnrollmentForm />
      </div>
    </ThemeProvider>
  );
};

export default App;

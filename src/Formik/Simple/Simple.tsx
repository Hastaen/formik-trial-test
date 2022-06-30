import React from "react";
import { useFormik } from "formik";
import Button from "@mui/material/Button";

const SignupForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <Button type="submit">Submit</Button>
    </form>
  );
};

function FormikSimple() {
  return (
    <div className="App">
      <header className="App-header">Formik ADR: Simple</header>
      <SignupForm />
    </div>
  );
}

export default FormikSimple;

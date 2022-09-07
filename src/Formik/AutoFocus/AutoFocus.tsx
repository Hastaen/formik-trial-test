import React, { useEffect, useRef } from "react";
import { useFormik } from "formik";
import Button from "@mui/material/Button";

const AutoFocusForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
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
        ref={inputRef}
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

function AutoFocus() {
  return (
    <div className="App">
      <header className="App-header">Formik ADR: Simple</header>
      <AutoFocusForm />
    </div>
  );
}

export default AutoFocus;

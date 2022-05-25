import React from 'react';
import { useFormik } from 'formik';
import Button from '@mui/material/Button';
import './App.css';

const SignupForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: values => {
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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Formik ADR
      </header>
      <body>
        <SignupForm />
      </body>
    </div>
  );
}

export default App;

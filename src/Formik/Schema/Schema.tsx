import React from "react";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import "./Schema.css";
import { Box, Grid } from "@mui/material";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  surname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(10, "Too Short!")
    .max(30, "Too Long!")
    .matches(/\d+/, { message: "Password no number" })
    .matches(/[a-z]+/, { message: "Password no lowercase" })
    .matches(/[A-Z]+/, { message: "Password no uppercase" })
    .matches(/[!@#$%^&*()-+]+/, {
      message: "Password no special char",
    })
    .required("Required"),
  age: Yup.number()
    .positive()
    .integer()
    .min(10, "Too yound!")
    .max(100, "Too old!")
    .required("Required"),
});

const SignupForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      surname: "",
      password: "",
      age: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container alignItems="start" direction="column">
        <Grid item>
          <Box display="flex" alignItems="start" flexDirection="column" mb={2}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.errors.name && <span>{formik.errors.name}</span>}
          </Box>
        </Grid>
        <Grid item>
          <Box display="flex" alignItems="start" flexDirection="column" mb={2}>
            <label htmlFor="surname">Surname</label>
            <input
              id="surname"
              name="surname"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.surname}
            />
            {formik.errors.surname && <span>{formik.errors.surname}</span>}
          </Box>
        </Grid>
        <Grid item>
          <Box display="flex" alignItems="start" flexDirection="column" mb={2}>
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email && <span>{formik.errors.email}</span>}
          </Box>
        </Grid>
        <Grid item>
          <Box display="flex" alignItems="start" flexDirection="column" mb={2}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password && <span>{formik.errors.password}</span>}
          </Box>
        </Grid>
        <Grid item>
          <Box display="flex" alignItems="start" flexDirection="column" mb={2}>
            <label htmlFor="age">Age</label>
            <input
              id="age"
              name="age"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.age}
            />
            {formik.errors.age && (
              <span>{formik.errors.age}</span>
            )}
          </Box>
        </Grid>

        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Grid>
    </form>
  );
};

function Schema() {
  return (
    <div className="App">
      <header className="App-header">Formik ADR</header>
      <body>
        <SignupForm />
      </body>
    </div>
  );
}

export default Schema;

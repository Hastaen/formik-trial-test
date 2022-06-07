import React from "react";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import { Box, Grid, TextField } from "@mui/material";
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
      <Grid container alignItems="start" direction="row" spacing={2}>
        <Grid item xs={6} sm={4} md={3}>
          <Box display="flex" alignItems="start" flexDirection="column">
            <TextField
              id="name"
              name="name"
              label="Name"
              onChange={formik.handleChange}
              value={formik.values.name}
              {...(formik.errors.name && {
                error: true,
                helperText: formik.errors.name,
              })}
            />
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <Box display="flex" alignItems="start" flexDirection="column">
            <TextField
              id="surname"
              name="surname"
              label="Surname"
              onChange={formik.handleChange}
              value={formik.values.surname}
              {...(formik.errors.surname && {
                error: true,
                helperText: formik.errors.surname,
              })}
            />
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <Box display="flex" alignItems="start" flexDirection="column">
            <TextField
              id="email"
              name="email"
              label="Email Address"
              onChange={formik.handleChange}
              value={formik.values.email}
              {...(formik.errors.email && {
                error: true,
                helperText: formik.errors.email,
              })}
            />
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <Box display="flex" alignItems="start" flexDirection="column">
            <TextField
              type="password"
              id="password"
              name="password"
              label="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
              {...(formik.errors.password && {
                error: true,
                helperText: formik.errors.password,
              })}
            />
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <Box display="flex" alignItems="start" flexDirection="column">
            <TextField
              id="age"
              name="age"
              label="Age"
              onChange={formik.handleChange}
              value={formik.values.age}
              {...(formik.errors.age && {
                error: true,
                helperText: formik.errors.age,
              })}
            />
          </Box>
        </Grid>

        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Grid>
    </form>
  );
};

function Material() {
  return (
    <div className="App">
      <header className="App-header">Formik ADR: Material</header>
      <SignupForm />
    </div>
  );
}

export default Material;

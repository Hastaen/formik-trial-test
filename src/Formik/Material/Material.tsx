import React from "react";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import { Box, Grid, TextField } from "@mui/material";
import { SignupSchema } from "../../utils/schema";

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
              onBlur={formik.handleBlur}
              value={formik.values.name}
              {...(formik.errors.name && formik.touched.name && {
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
              onBlur={formik.handleBlur}
              value={formik.values.surname}
              {...(formik.errors.surname  && formik.touched.surname && {
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
              onBlur={formik.handleBlur}
              value={formik.values.email}
              {...(formik.errors.email && formik.touched.email && {
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
              onBlur={formik.handleBlur}
              value={formik.values.password}
              {...(formik.errors.password  && formik.touched.password && {
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
              onBlur={formik.handleBlur}
              value={formik.values.age}
              {...(formik.errors.age  && formik.touched.age && {
                error: true,
                helperText: formik.errors.age,
              })}
            />
          </Box>
        </Grid>
      </Grid>
      <Grid container alignItems="start" direction="row" spacing={2}  mt={2}>
        <Grid item>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

function FormikMaterial() {
  return (
    <div className="App">
      <header className="App-header">Formik ADR: Material</header>
      <SignupForm />
    </div>
  );
}

export default FormikMaterial;

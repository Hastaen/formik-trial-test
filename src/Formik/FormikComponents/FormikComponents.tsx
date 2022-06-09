import React from "react";
import { useFormik, Formik, Form, Field } from "formik";
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
  console.log('formik.touched.age', formik.touched.age)

  return (
    <>
      < Formik
        initialValues={{
          email: "",
          name: "",
          surname: "",
          password: "",
          age: ""
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Grid container alignItems="start" direction="row" spacing={2}>
              <Grid item xs={6} sm={4} md={3}>
                <Box display="flex" alignItems="start" flexDirection="column">
                  <Field name="name">
                    {({
                      //@ts-ignore
                      field, // { name, value, onChange, onBlur }
                      //@ts-ignore
                      form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                      //@ts-ignore
                      meta,
                    }) => (
                      <>
                        <TextField
                          label="Name"
                          {...(field)}
                          {...(errors.name && touched.name && {
                            // {...(meta.touched && meta.error && {
                            error: true,
                            helperText: errors.name,
                          })}
                        />
                      </>
                    )}
                  </Field>
                </Box>
              </Grid>
              <Grid item xs={6} sm={4} md={3}>
                <Box display="flex" alignItems="start" flexDirection="column">
                  <Field name="surname">
                    {({
                      //@ts-ignore
                      field, // { name, value, onChange, onBlur }
                      //@ts-ignore
                      form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                      //@ts-ignore
                      meta,
                    }) => (
                      <>
                        <TextField
                          label="Surname"
                          {...(field)}
                          {...(errors.surname && touched.surname && {
                            // {...(meta.touched && meta.error && {
                            error: true,
                            helperText: errors.surname,
                          })}
                        />
                      </>
                    )}
                  </Field>
                </Box>
              </Grid>
              <Grid item xs={6} sm={4} md={3}>
                <Box display="flex" alignItems="start" flexDirection="column">
                  <Field name="email">
                    {({
                      //@ts-ignore
                      field, // { name, value, onChange, onBlur }
                      //@ts-ignore
                      form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                      //@ts-ignore
                      meta,
                    }) => (
                      <>
                        <TextField
                          label="Email"
                          {...(field)}
                          {...(errors.email && touched.email && {
                            // {...(meta.touched && meta.error && {
                            error: true,
                            helperText: errors.email,
                          })}
                        />
                      </>
                    )}
                  </Field>
                </Box>
              </Grid>
              <Grid item xs={6} sm={4} md={3}>
                <Box display="flex" alignItems="start" flexDirection="column">
                  <Field name="password">
                    {({
                      //@ts-ignore
                      field, // { name, value, onChange, onBlur }
                      //@ts-ignore
                      form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                      //@ts-ignore
                      meta,
                    }) => (
                      <>
                        <TextField
                          label="Password"
                          {...(field)}
                          {...(errors.password && touched.password && {
                            // {...(meta.touched && meta.error && {
                            error: true,
                            helperText: errors.password,
                          })}
                        />
                      </>
                    )}
                  </Field>
                </Box>
              </Grid>
              <Grid item xs={6} sm={4} md={3}>
                <Box display="flex" alignItems="start" flexDirection="column">
                  <Field name="age">
                    {({
                      //@ts-ignore
                      field, // { name, value, onChange, onBlur }
                      //@ts-ignore
                      form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                      //@ts-ignore
                      meta,
                    }) => (
                      <>
                        <TextField
                          label="Age"
                          {...(field)}
                          {...(errors.age && touched.age && {
                            // {...(meta.touched && meta.error && {
                            error: true,
                            helperText: errors.age,
                          })}
                        />
                      </>
                    )}
                  </Field>
                </Box>
              </Grid>
            </Grid>
            <Grid container alignItems="start" direction="row" spacing={2} mt={2}>
              <Grid item>
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik >
    </>
  );
};

function FormikComponents() {
  return (
    <div className="App">
      <header className="App-header">Formik ADR: FormikComponents</header>
      <SignupForm />
    </div>
  );
}

export default FormikComponents;

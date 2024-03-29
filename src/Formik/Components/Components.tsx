import React from "react";
import { Formik, Form, Field, FormikProps, FieldProps } from "formik";
import Button from "@mui/material/Button";
import { Box, Grid, TextField } from "@mui/material";
import { SignupSchema } from "../../utils/schema";

interface FormValues {
  name: string;
  surname: string;
  email: string;
  password: string;
  age: string;
}

const SignupForm = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        name: "",
        surname: "",
        password: "",
        age: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ errors, touched }: FormikProps<FormValues>) => (
        <Form>
          <Grid container alignItems="start" direction="row" spacing={2}>
            <Grid item xs={6} sm={4} md={3}>
              <Box display="flex" alignItems="start" flexDirection="column">
                <Field name="name">
                  {({
                    field, // { name, value, onChange, onBlur }
                    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                    meta,
                  }: FieldProps<string, FormValues>) => (
                    <>
                      <TextField
                        label="Name"
                        variant="outlined"
                        {...field}
                        {...(errors.name &&
                          touched.name && {
                            // {...(meta.touched && meta.error && {
                            error: true,
                            helperText: errors.name.toString(),
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
                    field,
                    form: { touched, errors },
                    meta,
                  }: FieldProps<string, FormValues>) => (
                    <>
                      <TextField
                        label="Surname"
                        {...field}
                        {...(errors.surname &&
                          touched.surname && {
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
                    field,
                    form: { touched, errors },
                    meta,
                  }: FieldProps<string, FormValues>) => (
                    <>
                      <TextField
                        label="Email"
                        {...field}
                        {...(errors.email &&
                          touched.email && {
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
                    field,
                    form: { touched, errors },
                    meta,
                  }: FieldProps<string, FormValues>) => (
                    <>
                      <TextField
                        label="Password"
                        {...field}
                        {...(errors.password &&
                          touched.password && {
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
                    field,
                    form: { touched, errors },
                    meta,
                  }: FieldProps<string, FormValues>) => (
                    <>
                      <TextField
                        label="Age"
                        {...field}
                        {...(errors.age &&
                          touched.age && {
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
    </Formik>
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

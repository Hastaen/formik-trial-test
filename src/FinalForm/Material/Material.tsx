import React from "react";
import Button from "@mui/material/Button";
import { Box, Grid, TextField } from "@mui/material";
import { Field, Form } from "react-final-form";
import { setIn } from "final-form";
import { SignupSchema } from "../../utils/schema";
import { FormValues } from "../../types/types";

export const validate = async (values: FormValues) => {
  try {
    await SignupSchema.validate(values, { abortEarly: false });
  } catch (err: any) {
    const errors = err.inner.reduce((formError: any, innerError: any) => {
      return setIn(formError, innerError.path, innerError.message);
    }, {});

    return errors;
  }
};


const SignupForm = () => {
  const initialValues: FormValues = {
    email: "",
    name: "",
    surname: "",
    password: "",
    age: "",
  };
  const onSubmit = (values: FormValues) => {
    alert(JSON.stringify(values, null, 2));
  };
  return (
    <Form
      validate={validate}
      onSubmit={onSubmit}
      initialValues={initialValues}
      render={({ handleSubmit, form, submitting, pristine, values }) => {
        const { errors, touched } = form.getState();
        return (
          <form onSubmit={handleSubmit}>
            <Grid container alignItems="start" direction="row" spacing={2}>
              <Grid item xs={6} sm={4} md={3}>
                <Box display="flex" alignItems="start" flexDirection="column">
                  <Field id="name" name="name">
                    {({ input }) => {
                      const { name, placeholder } = input;
                      const error = errors?.[name];
                      const touch = touched?.[name];
                      return (
                        <TextField
                          variant="outlined"
                          {...input}
                          name={name}
                          label="Name"
                          {...(error &&
                            touch && {
                              error: true,
                              helperText: error,
                            })}
                        />
                      );
                    }}
                  </Field>
                </Box>
              </Grid>
              <Grid item xs={6} sm={4} md={3}>
                <Box display="flex" alignItems="start" flexDirection="column">
                  <Field id="surname" name="surname">
                    {({ input }) => {
                      const { name } = input;
                      const error = errors?.[name];
                      const touch = touched?.[name];
                      return (
                        <TextField
                          variant="outlined"
                          {...input}
                          name={name}
                          label="Surname"
                          {...(error &&
                            touch && {
                              error: true,
                              helperText: error,
                            })}
                        />
                      );
                    }}
                  </Field>
                </Box>
              </Grid>
              <Grid item xs={6} sm={4} md={3}>
                <Box display="flex" alignItems="start" flexDirection="column">
                  <Field id="email" name="email">
                    {({ input }) => {
                      const { name } = input;
                      const error = errors?.[name];
                      const touch = touched?.[name];
                      return (
                        <TextField
                          variant="outlined"
                          {...input}
                          type="email"
                          name={name}
                          label="Email"
                          {...(error &&
                            touch && {
                              error: true,
                              helperText: error,
                            })}
                        />
                      );
                    }}
                  </Field>
                </Box>
              </Grid>
              <Grid item xs={6} sm={4} md={3}>
                <Box display="flex" alignItems="start" flexDirection="column">
                  <Field id="password" name="password">
                    {({ input }) => {
                      const { name } = input;
                      const error = errors?.[name];
                      const touch = touched?.[name];
                      return (
                        <TextField
                          variant="outlined"
                          {...input}
                          type="password"
                          name={name}
                          label="Password"
                          {...(error &&
                            touch && {
                              error: true,
                              helperText: error,
                            })}
                        />
                      );
                    }}
                  </Field>
                </Box>
              </Grid>
              <Grid item xs={6} sm={4} md={3}>
                <Box display="flex" alignItems="start" flexDirection="column">
                  <Field id="age" name="age">
                    {({ input }) => {
                      const { name } = input;
                      const error = errors?.[name];
                      const touch = touched?.[name];
                      return (
                        <TextField
                          variant="outlined"
                          {...input}
                          name={name}
                          label="Age"
                          {...(error &&
                            touch && {
                              error: true,
                              helperText: error,
                            })}
                        />
                      );
                    }}
                  </Field>
                </Box>
              </Grid>
            </Grid>
            <Grid
              container
              alignItems="start"
              direction="row"
              spacing={2}
              mt={2}
            >
              <Grid item>
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        );
      }}
    />
  );
};

function FinalFormMaterial() {
  return (
    <div className="App">
      <header className="App-header">FinalForm ADR: Material</header>
      <SignupForm />
    </div>
  );
}

export default FinalFormMaterial;

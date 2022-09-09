import React from "react";
import Button from "@mui/material/Button";
import { Box, Grid, TextField } from "@mui/material";
import * as Yup from "yup";
import { Field, Form } from "react-final-form";
import { setIn } from "final-form";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required")
    .min(2, "Too Short!")
    .max(50, "Too Long!"),
  surname: Yup.string()
    .required("Required")
    .min(2, "Too Short!")
    .max(50, "Too Long!"),
  email: Yup.string().required("Required").email("Invalid email"),
  password: Yup.string()
    .required("Required")
    .min(10, "Too Short!")
    .max(30, "Too Long!")
    .matches(/\d+/, { message: "Password no number" })
    .matches(/[a-z]+/, { message: "Password no lowercase" })
    .matches(/[A-Z]+/, { message: "Password no uppercase" })
    .matches(/[!@#$%^&*()-+]+/, {
      message: "Password no special char",
    }),
  age: Yup.number()
    .required("Required")
    .positive()
    .integer()
    .min(10, "Too yound!")
    .max(100, "Too old!"),
});

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

type FormValues = {
  email: string;
  name: string;
  surname: string;
  password: string;
  age?: string;
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

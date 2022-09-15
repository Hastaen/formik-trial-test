import React from "react";
import Button from "@mui/material/Button";
import { Box, Grid } from "@mui/material";
import * as Yup from "yup";
import { Form, Field } from "react-final-form";
import { TextInput } from "../Simple/Simple";
import { setIn } from "final-form";

interface FormValues {
  name: string;
  surname: string;
  email: string;
  password: string;
  age: string;
}

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

const SignupForm: React.FC = () => {
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
          <form onSubmit={handleSubmit} noValidate>
            <Grid container alignItems="start" direction="column">
              <Grid item>
                <Box
                  display="flex"
                  alignItems="start"
                  flexDirection="column"
                  mb={2}
                >
                  <label htmlFor="name">Name</label>
                  <Field<string>
                    id="name"
                    name="name"
                    component={TextInput}
                    placeholder="First Name"
                    autoFocus
                  />
                  {errors?.name && touched?.name && <span>{errors?.name}</span>}
                </Box>
              </Grid>
              <Grid item>
                <Box
                  display="flex"
                  alignItems="start"
                  flexDirection="column"
                  mb={2}
                >
                  <label htmlFor="surname">Surname</label>
                  <Field<string>
                    id="surname"
                    name="surname"
                    component={TextInput}
                    placeholder="First Name"
                    autoFocus
                  />
                  {errors?.surname && touched?.surname && (
                    <span>{errors?.surname}</span>
                  )}
                </Box>
              </Grid>
              <Grid item>
                <Box
                  display="flex"
                  alignItems="start"
                  flexDirection="column"
                  mb={2}
                >
                  <label htmlFor="email">Email Address</label>
                  <Field<string>
                    id="email"
                    name="email"
                    type="email"
                    component={TextInput}
                    placeholder="First Name"
                    autoFocus
                  />
                  {errors?.email && touched?.email && (
                    <span>{errors?.email}</span>
                  )}
                </Box>
              </Grid>
              <Grid item>
                <Box
                  display="flex"
                  alignItems="start"
                  flexDirection="column"
                  mb={2}
                >
                  <label htmlFor="password">Password</label>
                  <Field<string>
                    id="password"
                    name="password"
                    type="password"
                    component={TextInput}
                    placeholder="First Name"
                    autoFocus
                  />
                  {errors?.password && touched?.password && (
                    <span>{errors?.password}</span>
                  )}
                </Box>
              </Grid>
              <Grid item>
                <Box
                  display="flex"
                  alignItems="start"
                  flexDirection="column"
                  mb={2}
                >
                  <label htmlFor="age">Age</label>
                  <Field<string>
                    id="age"
                    name="age"
                    component={TextInput}
                    placeholder="First Name"
                    autoFocus
                  />
                  {errors?.age && touched?.age && <span>{errors?.age}</span>}
                </Box>
              </Grid>

              <Button variant="contained" type="submit">
                Submit
              </Button>
            </Grid>
          </form>
        );
      }}
    />
  );
};

function FinalFormSchema() {
  return (
    <div className="App">
      <header className="App-header">Final Form ADR: Schema</header>
      <SignupForm />
    </div>
  );
}

export default FinalFormSchema;

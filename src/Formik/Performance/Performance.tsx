import React from "react";
import { FastField, Formik, useFormik } from "formik";
import Button from "@mui/material/Button";
import { Box, Grid, TextField } from "@mui/material";
import * as Yup from "yup";

interface FormValues {
  name: string;
  surname: string;
  email: string;
  password: string;
  age: string;
}

interface FieldsValues {
  id: string,
  name: keyof FormValues,
  label: string,
  initialValue: string,
}

const shapes: Record<keyof FormValues, any> = {
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
};

const defaultFields: FieldsValues[] = [
  {
    id: "name",
    name: "name",
    label: "Name",
    initialValue: "",
  },
  {
    id: "surname",
    name: "surname",
    label: "Surname",
    initialValue: "",
  },
  {
    id: "email",
    name: "email",
    label: "Email Address",
    initialValue: "",
  },
  {
    id: "password",
    name: "password",
    label: "Password",
    initialValue: "",
  },
  {
    id: "age",
    name: "age",
    label: "Age",
    initialValue: "",
  },
];

const fields = [
  ...defaultFields,
  ...defaultFields,
  ...defaultFields,
  ...defaultFields,
  ...defaultFields,
  ...defaultFields,
  ...defaultFields,
  ...defaultFields,
  ...defaultFields,
  ...defaultFields,
  ...defaultFields,
  ...defaultFields,
];

const tenFields = [
  ...defaultFields,
  ...defaultFields,
];

const twentyFields = [
  ...defaultFields,
  ...defaultFields,
  ...defaultFields,
  ...defaultFields,
];

const thirtyFields = [
  ...defaultFields,
  ...defaultFields,
  ...defaultFields,
  ...defaultFields,
  ...defaultFields,
  ...defaultFields,
];


 export const getInitialValues = (fields: FieldsValues[]) => {
  return fields.reduce(
    (prev, { initialValue, name }, index) => ({
      ...prev,
      [`${name}-${index}`]: initialValue,
    }),
    {}
  );
};

export const getSchema = (fields: FieldsValues[]) => {
  const schemaFields = fields.reduce(
    (prev, { name }, index) => ({
      ...prev,
      [`${name}-${index}`]: shapes[name],
    }),
    {}
  );
  return Yup.object().shape(schemaFields);
};

const FormBuilder = ( props: { propFields: FieldsValues[]}) => {
  const { propFields } = props;
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: getInitialValues(propFields),
    validationSchema: getSchema(propFields),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container alignItems="start" direction="row" spacing={2}>
        {propFields.map(({ name, id, label }, index) => {
          return (
            <Grid key={`field-${index}`} item xs={6} sm={4} md={3}>
              <Box display="flex" alignItems="start" flexDirection="column">
                <TextField
                  id={`${id}-${index}`}
                  name={`${name}-${index}`}
                  label={`${label}-${index}`}
                  onChange={formik.handleChange}
                  variant="outlined"
                  // @ts-ignore
                  value={formik.values[`${name}-${index}`]}
                  // @ts-ignore
                  {...(formik.errors[`${name}-${index}`] && formik.touched[`${name}-${index}`] && {
                    error: true,
                    // @ts-ignore
                    helperText: formik.errors[`${name}-${index}`]?.toString(),
                  })}
                />
              </Box>
            </Grid>
          );
        })}
      </Grid>

      <Grid container alignItems="start" direction="row" spacing={2}>
        <Grid item mt={2}>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

const FastFieldFormBuilder = (props: { propFields: FieldsValues[] }) => {
  const { propFields } = props;
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: getInitialValues(propFields),
    validationSchema: getSchema(propFields),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Formik
      initialValues={getInitialValues(propFields)}
      validationSchema={getSchema(propFields)}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }} 
      render={formikProps => (
        <form onSubmit={formikProps.handleSubmit}>
          <Grid container alignItems="start" direction="row" spacing={2}>
            {propFields.map(({ name, id, label }, index) => {
              return (
                <Grid key={`field-${index}`} item xs={6} sm={4} md={3}>
                  <Box display="flex" alignItems="start" flexDirection="column">
                    <FastField name={`${name}-${index}`} placeholder="">
                      {() => (
                        <TextField
                          id={`${id}-${index}`}
                          name={`${name}-${index}`}
                          label={`${label}-${index}`}
                          onChange={formikProps.handleChange}
                          variant="outlined"
                          // @ts-ignore
                          value={formikProps.values[`${name}-${index}`]}
                          // @ts-ignore
                          {...(formikProps.errors[`${name}-${index}`] && formikProps.touched[`${name}-${index}`] && {
                            error: true,
                            // @ts-ignore
                            helperText: formikProps.errors[`${name}-${index}`]?.toString(),
                          })}
                        />
                      )}
                      
                    </FastField>
                  </Box>
                </Grid>
              );
            })}
          </Grid>

          <Grid container alignItems="start" direction="row" spacing={2}>
            <Grid item mt={2}>
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>)}
      />
  );
};


const SignupForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: getInitialValues(fields),
    validationSchema: getSchema(fields),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container alignItems="start" direction="row" spacing={2}>
        {fields.map(({ name, id, label }, index) => {
          return (
            <Grid key={`field-${index}`} item xs={6} sm={4} md={3}>
              <Box display="flex" alignItems="start" flexDirection="column">
                <TextField
                  id={`${id}-${index}`}
                  name={`${name}-${index}`}
                  label={`${label}-${index}`}
                  onChange={formik.handleChange}
                  variant="outlined"
                  // @ts-ignore
                  value={formik.values[`${name}-${index}`]}
                  // @ts-ignore
                  {...(formik.errors[`${name}-${index}`] &&  formik.touched[`${name}-${index}`] &&{
                    error: true,
                    // @ts-ignore
                    helperText: formik.errors[`${name}-${index}`]?.toString(),
                  })}
                />
              </Box>
            </Grid>
          );
        })}
      </Grid>

      <Grid container alignItems="start" direction="row" spacing={2}>
        <Grid item mt={2}>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export const TenFieldsPerformance = () => {
  return (
    <div className="App">
      <header className="App-header">Formik ADR: TenFieldsPerformance</header>
      <FormBuilder propFields={tenFields} />
    </div>
  );
}

export const TwentyFieldsPerformance = () => {
  return (
    <div className="App">
      <header className="App-header">Formik ADR: TwentyFieldsPerformance</header>
      <FormBuilder propFields={twentyFields} />
    </div>
  );
}

export const ThirtyFieldsPerformance = () => {
  return (
    <div className="App">
      <header className="App-header">Formik ADR: ThirtyFieldsPerformance</header>
      <FormBuilder propFields={thirtyFields} />
    </div>
  );
}

export const ThirtyFastFieldsPerformance = () => {
  return (
    <div className="App">
      <header className="App-header">Formik ADR: ThirtyFastFieldsPerformance</header>
      <FastFieldFormBuilder propFields={thirtyFields} />
    </div>
  );
}

export const Performance = () => {
  return (
    <div className="App">
      <header className="App-header">Formik ADR: Performance</header>
      <SignupForm />
    </div>
  );
}
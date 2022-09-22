import React from "react";
import { FastField, Formik, useFormik } from "formik";
import Button from "@mui/material/Button";
import { Box, Grid, TextField } from "@mui/material";
import { DynamicFormValues, FieldsValues } from "../../types/types";
import { fields, getInitialValues } from '../../utils/fields';
import { getSchema } from "../../utils/schema";


export const FormBuilder = ( props: { propFields: FieldsValues[]}) => {
  const { propFields } = props;
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik<DynamicFormValues>({
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
                  value={formik.values[`${name}-${index}`]}
                  {...(formik.errors[`${name}-${index}`] && formik.touched[`${name}-${index}`] && {
                    error: true,
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

export const FastFieldFormBuilder = (props: { propFields: FieldsValues[] }) => {
  const { propFields } = props;
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
  const formik = useFormik<DynamicFormValues>({
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
                  value={formik.values[`${name}-${index}`]}
                  {...(formik.errors[`${name}-${index}`] &&
                    formik.touched[`${name}-${index}`] && {
                      error: true,
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

export const FormikPerformance = () => {
  return (
    <div className="App">
      <header className="App-header">Formik ADR: Performance</header>
      <SignupForm />
    </div>
  );
};

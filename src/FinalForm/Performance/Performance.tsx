import Button from "@mui/material/Button";
import { Box, Grid, TextField } from "@mui/material";
import { Field, Form } from "react-final-form";
import { setIn } from "final-form";
import { DynamicFormValues, FieldsValues } from "../../types/types";
import { fields, getInitialValues} from "../../utils/fields";
import { getSchema } from "../../utils/schema";

export const validate =
  (fields: FieldsValues[]) => async (values: DynamicFormValues) => {
    const SignupSchema = getSchema(fields);
    try {
      await SignupSchema.validate(values, { abortEarly: false });
    } catch (err: any) {
      const errors = err.inner.reduce((formError: any, innerError: any) => {
        return setIn(formError, innerError.path, innerError.message);
      }, {});

      return errors;
    }
  };

export const FormBuilder = (props: { propFields: FieldsValues[] }) => {
  const { propFields } = props;
  const initialValues: DynamicFormValues = getInitialValues(propFields);
  const onSubmit = (values: DynamicFormValues) => {
    alert(JSON.stringify(values, null, 2));
  };
  return (
    <Form
      validate={validate(propFields)}
      onSubmit={onSubmit}
      initialValues={initialValues}
      render={({ handleSubmit, form, submitting, pristine, values }) => {
        const { errors, touched } = form.getState();
        return (
          <form onSubmit={handleSubmit}>
            <Grid container alignItems="start" direction="row" spacing={2}>
              {propFields.map(({ name, id, label }, index) => {
                return (
                  <Grid key={`field-${index}`} item xs={6} sm={4} md={3}>
                    <Box
                      display="flex"
                      alignItems="start"
                      flexDirection="column"
                    >
                      <Field
                        id={`${id}-${index}`}
                        name={`${name}-${index}`}
                      >
                        {({ input: { name, value, onChange } }) => {
                          const error = errors?.[name];
                          const touch = touched?.[name];
                          return (
                            <TextField
                              id={`${id}-${index}`}
                              name={name}
                              label={`${label}-${index}`}
                              onChange={onChange}
                              variant="outlined"
                              value={value}
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
      }}
    />
  );
};

const SignupForm = () => {
  const initialValues: DynamicFormValues = getInitialValues(fields);
  const onSubmit = (values: DynamicFormValues) => {
    alert(JSON.stringify(values, null, 2));
  };
  return (
    <Form
      validate={validate(fields)}
      onSubmit={onSubmit}
      initialValues={initialValues}
      render={({ handleSubmit, form, submitting, pristine, values }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Grid container alignItems="start" direction="row" spacing={2}>
              {fields.map(({ name, id, label }, index) => {
                return (
                  <Grid key={`field-${index}`} item xs={6} sm={4} md={3}>
                    <Box
                      display="flex"
                      alignItems="start"
                      flexDirection="column"
                    >
                      <Field
                        id={`${id}-${index}`}
                        name={`${name}-${index}`}
                        placeholder={`${label}-${index}`}
                      >
                        {({ input: { name, value, onChange, meta } }) => (
                          <TextField
                            id={`${id}-${index}`}
                            name={`${name}-${index}`}
                            label={`${label}-${index}`}
                            onChange={onChange}
                            variant="outlined"
                            value={value}
                            {...(meta?.error &&
                              meta?.touched && {
                                error: true,
                                helperText: meta?.error,
                              })}
                          />
                        )}
                      </Field>
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
      }}
    />
  );
};

export const FinalFormPerformance = () => {
  return (
    <div className="App">
      <header className="App-header">Final Form ADR: Performance</header>
      <SignupForm />
    </div>
  );
};

export default FinalFormPerformance;
import Button from "@mui/material/Button";
import { Box, Grid, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DynamicFormValues, FieldsValues } from "../../types/types";
import { fields, getInitialValues } from "../../utils/fields";
import { getSchema } from "../../utils/schema";


export const FormBuilder = (props: { propFields: FieldsValues[] }) => {
  const { propFields } = props;

  const { control, handleSubmit } = useForm<DynamicFormValues>({
    defaultValues: getInitialValues(propFields),
    resolver: yupResolver(getSchema(propFields)),
  });

  const onSubmit = (values: DynamicFormValues) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container alignItems="start" direction="row" spacing={2}>
        {propFields.map(({ name, label, type }, index) => {
          return (
            <Grid key={`field-${index}`} item xs={6} sm={4} md={3}>
              <Box display="flex" alignItems="start" flexDirection="column">
                <Controller
                  name={`${name}-${index}`}
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      {...field}
                      variant="outlined"
                      label={`${label}-${index}`}
                      {...(type && { type })}
                      {...(error && {
                        error: true,
                        helperText: error.message,
                      })}
                    />
                  )}
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

const SignupForm = () => {
  const { control, handleSubmit } = useForm<DynamicFormValues>({
    defaultValues: getInitialValues(fields),
    resolver: yupResolver(getSchema(fields)),
  });

  const onSubmit = (values: DynamicFormValues) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container alignItems="start" direction="row" spacing={2}>
        {fields.map(({ name, id, label }, index) => {
          return (
            <Grid key={`field-${index}`} item xs={6} sm={4} md={3}>
              <Box display="flex" alignItems="start" flexDirection="column">
                <Controller
                  name={`${name}-${index}`}
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      variant="outlined"
                      label={`${label}-${index}`}
                      {...field}
                      {...(error && {
                        error: true,
                        helperText: error.message,
                      })}
                    />
                  )}
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

export const RHFPerformance = () => {
  return (
    <div className="App">
      <header className="App-header">RHF ADR: Performance</header>
      <SignupForm />
    </div>
  );
};

export default RHFPerformance;
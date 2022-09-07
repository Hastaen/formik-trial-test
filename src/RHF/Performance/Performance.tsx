import Button from "@mui/material/Button";
import { Box, Grid, TextField } from "@mui/material";
import * as Yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormValues {
  name: string;
  surname: string;
  email: string;
  password: string;
  age: string;
}

interface FieldsValues {
  id: string;
  name: keyof FormValues;
  type?: "text" | "password";
  label: string;
  initialValue?: string;
}

const shapes: Record<keyof FormValues, any> = {
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
    type: "password",
  },
  {
    id: "age",
    name: "age",
    label: "Age",
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

const tenFields = [...defaultFields, ...defaultFields];

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

type DynamicFormValues = {
  [key: string]: string;
};

const FormBuilder = (props: { propFields: FieldsValues[] }) => {
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

export const RHFTenFieldsPerformance = () => {
  return (
    <div className="App">
      <header className="App-header">RHF ADR: TenFieldsPerformance</header>
      <FormBuilder propFields={tenFields} />
    </div>
  );
};

export const RHFTwentyFieldsPerformance = () => {
  return (
    <div className="App">
      <header className="App-header">RHF ADR: TwentyFieldsPerformance</header>
      <FormBuilder propFields={twentyFields} />
    </div>
  );
};

export const RHFThirtyFieldsPerformance = () => {
  return (
    <div className="App">
      <header className="App-header">RHF ADR: ThirtyFieldsPerformance</header>
      <FormBuilder propFields={thirtyFields} />
    </div>
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

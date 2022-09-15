import Button from "@mui/material/Button";
import { Box, Grid, TextField } from "@mui/material";
import * as Yup from "yup";
import { Field, Form } from "react-final-form";
import { setIn } from "final-form";

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
  label: string;
  initialValue: string;
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

const FormBuilder = (props: { propFields: FieldsValues[] }) => {
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

export const FinalFormTenFieldsPerformance = () => {
  return (
    <div className="App">
      <header className="App-header">
        Final Form ADR: TenFieldsPerformance
      </header>
      <FormBuilder propFields={tenFields} />
    </div>
  );
};

export const FinalFormTwentyFieldsPerformance = () => {
  return (
    <div className="App">
      <header className="App-header">
        Final Form ADR: TwentyFieldsPerformance
      </header>
      <FormBuilder propFields={twentyFields} />
    </div>
  );
};

export const FinalFormThirtyFieldsPerformance = () => {
  return (
    <div className="App">
      <header className="App-header">
        Final Form ADR: ThirtyFieldsPerformance
      </header>
      <FormBuilder propFields={thirtyFields} />
    </div>
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

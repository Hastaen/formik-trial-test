import Button from '@mui/material/Button';
import { Box, Grid, TextField } from '@mui/material';
import {
  Controller,
  FormProvider,
  get,
  useForm,
  useFormContext,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { DynamicFormValues } from '../../types/types';
import * as Yup from 'yup';

type NestedSchema = {
  type: 'object' | 'string' | 'custom';
  properties?: {
    [label: string]: NestedSchema;
  };
};

const schema: NestedSchema = {
  type: 'object',
  properties: {
    place: {
      type: 'string'
    },
    user: {
      type: 'object',
      properties: {
        name: {
          type: 'custom',
        },
        email: {
          type: 'string',
        },
      },
    },
  },
};

const validationSchema = Yup.object().shape({
  place: Yup.string().required('Required'),
  user: Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().required('Required').email('Invalid email'),
  }),
});

const getInitialValues = (schema: NestedSchema, parent?: string): any => {
  const { properties } = schema;

  if (properties) {
    const labels = Object.keys(properties);

    return labels
      .map((label) => {
        const { type } = properties[label];
        if (type === 'object') {
          return { [label]: getInitialValues(properties[label], label) };
        }
        return { [`${label}`]: 'test' };
      })
      .reduce(
        (prev, curr) => ({
          ...prev,
          ...curr,
        }),
        {}
      );
  }
  return null;
};

const CustomInput = ({ name }: { name: string }) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          variant='outlined'
          label={name}
          {...field}
          {...(error && {
            error: true,
            helperText: error.message,
          })}
        />
      )}
    />
  );
};

const StandardInput = ({ name }: { name: string }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = get(errors, name);

  return (
    <>
      <input id={name} {...register(name)} />
      {error && <span>{error.message}</span>}
    </>
  );
};

const generateForm = (schema: NestedSchema, parent?: string) => {
  const { properties } = schema;

  if (properties) {
    const labels = Object.keys(properties);

    return labels.flatMap((label, index): any => {
      const { type } = properties[label];
      if (type === 'object') {
        return (
          <Grid container alignItems='start' direction='column'>
            {generateForm(properties[label], label)}
          </Grid>
        );
      }
      if (type === 'custom') {
        return (
          <Grid item>
            <Box
              display='flex'
              alignItems='start'
              flexDirection='column'
              mb={2}
            >
              <CustomInput name={`${parent ? `${parent}.${label}` : label}`} />
            </Box>
          </Grid>
        );
      }

      return (
        <Grid item>
          <Box display='flex' alignItems='start' flexDirection='column' mb={2}>
            <StandardInput name={`${parent ? `${parent}.${label}` : label}`} />
          </Box>
        </Grid>
      );
    });
  }
  return null;
};

const SignupForm = () => {
  const methods = useForm<DynamicFormValues>({
    defaultValues: getInitialValues(schema),
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
  });
  const { handleSubmit } = methods;

  const onSubmit = (values: DynamicFormValues) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {generateForm(schema)}

        <Grid container alignItems='start' direction='row' spacing={2}>
          <Grid item mt={2}>
            <Button variant='contained' type='submit'>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  );
};

export const RHFNestedSchema = () => {
  return (
    <div className='App'>
      <header className='App-header'>RHF ADR: Nested Schema</header>
      <SignupForm />
    </div>
  );
};

export default RHFNestedSchema;

import React from "react";
import Button from "@mui/material/Button";
import { Box, Grid } from "@mui/material";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

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

type FormValues = {
  email: string;
  name: string;
  surname: string;
  password: string;
  age?: string;
};

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
      name: "",
      surname: "",
      password: "",
      age: undefined,
    },
    resolver: yupResolver(SignupSchema),
  });

  const onSubmit = (values: FormValues) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container alignItems="start" direction="column">
        <Grid item>
          <Box display="flex" alignItems="start" flexDirection="column" mb={2}>
            <label htmlFor="name">Name</label>
            <input id="name" {...register("name")} />
            {errors.name?.message && touchedFields.name && (
              <span>{errors.name?.message}</span>
            )}
          </Box>
        </Grid>
        <Grid item>
          <Box display="flex" alignItems="start" flexDirection="column" mb={2}>
            <label htmlFor="surname">Surname</label>
            <input id="surname" {...register("surname")} />
            {errors.surname?.message && touchedFields.surname && (
              <span>{errors.surname?.message}</span>
            )}
          </Box>
        </Grid>
        <Grid item>
          <Box display="flex" alignItems="start" flexDirection="column" mb={2}>
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" {...register("email")} />
            {errors.email?.message && touchedFields.email && (
              <span>{errors.email?.message}</span>
            )}
          </Box>
        </Grid>
        <Grid item>
          <Box display="flex" alignItems="start" flexDirection="column" mb={2}>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" {...register("password")} />
            {errors.password?.message && touchedFields.password && (
              <span>{errors.password?.message}</span>
            )}
          </Box>
        </Grid>
        <Grid item>
          <Box display="flex" alignItems="start" flexDirection="column" mb={2}>
            <label htmlFor="age">Age</label>
            <input id="age" {...register("age")} />
            {errors.age?.message && touchedFields.age && (
              <span>{errors.age?.message}</span>
            )}
          </Box>
        </Grid>

        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Grid>
    </form>
  );
};

function RHFSchema() {
  return (
    <div className="App">
      <header className="App-header">RHF ADR: Schema</header>
      <SignupForm />
    </div>
  );
}

export default RHFSchema;

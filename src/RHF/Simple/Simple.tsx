import React from "react";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";

type FormValues = {
  email: string;
};

const SignupForm = () => {
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" {...register("email")} />

      <Button type="submit">Submit</Button>
    </form>
  );
};

function RHFSimple() {
  return (
    <div className="App">
      <header className="App-header">RHF ADR: Simple</header>
      <SignupForm />
    </div>
  );
}

export default RHFSimple;

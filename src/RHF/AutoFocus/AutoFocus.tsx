import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import { SimpleFormValues } from "../../types/types";


const SignupForm = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const { register, handleSubmit } = useForm<SimpleFormValues>({
    defaultValues: {
      email: "",
    },
    mode: 'onBlur',
  });

  const { ref, ...rest } = register('email');

  const onSubmit = (values: SimpleFormValues) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email Address</label>
      <input  id="email" type="email" {...rest} ref={(e) => {
        ref(e)
        inputRef.current = e
      }}/>

      <Button type="submit">Submit</Button>
    </form>
  );
};

function RHFAutoFocus() {
  return (
    <div className="App">
      <header className="App-header">RHF ADR: AutoFocus</header>
      <SignupForm />
    </div>
  );
}

export default RHFAutoFocus;

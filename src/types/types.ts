export type FormValues = {
  email: string;
  name: string;
  surname: string;
  password: string;
  age?: string;
};

export type SimpleFormValues = {
  email: string;
};


export type FieldsValues = {
  id: string;
  name: keyof FormValues;
  type?: "text" | "password";
  label: string;
  initialValue?: string;
}

export type DynamicFormValues = {
  [key: string]: string;
};
import * as Yup from 'yup';
import { FieldsValues, FormValues } from '../types/types';

export const SignupSchema = Yup.object().shape({
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
});


export const shapes: Record<keyof FormValues, any> = {
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
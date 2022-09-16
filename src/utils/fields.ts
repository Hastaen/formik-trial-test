import { FieldsValues } from "../types/types";

export const defaultFields: FieldsValues[] = [
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

export const fields = [
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

export const tenFields = [...defaultFields, ...defaultFields];

export const twentyFields = [
  ...defaultFields,
  ...defaultFields,
  ...defaultFields,
  ...defaultFields,
];

export const thirtyFields = [
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
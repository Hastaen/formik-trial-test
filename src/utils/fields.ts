import { FieldsValues } from "../types/types";

export type NestedSchema = {
  type: 'object' | 'string' | 'custom';
  properties?: {
    [label: string]: NestedSchema;
  };
};

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

export const getNestedInitialValues = (schema: NestedSchema, parent?: string): any => {
  const { properties } = schema;

  if (properties) {
    const labels = Object.keys(properties);

    return labels
      .map((label) => {
        const { type } = properties[label];
        if (type === 'object') {
          return { [label]: getNestedInitialValues(properties[label], label) };
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

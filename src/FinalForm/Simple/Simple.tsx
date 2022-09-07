import React from "react";
import { Form, Field } from "react-final-form";
import { FieldRenderProps } from "react-final-form";

type Props = FieldRenderProps<string, any>;

const TextInput: React.FC<Props> = ({ input, meta, ...rest }: Props) => (
  <input type="text" {...input} {...rest} />
);

interface Values {
  firstName: string;
  lastName: string;
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values: Values) => {
  await sleep(300);
  window.alert(JSON.stringify(values, undefined, 2));
};

const SimpleFinalForm: React.FC = () => (
  <Form
    onSubmit={onSubmit}
    initialValues={{ firstName: "", lastName: "" }}
    render={({ handleSubmit, form, submitting, pristine, values }) => (
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <Field<string>
            name="firstName"
            component={TextInput}
            placeholder="First Name"
          />
        </div>
        <div>
          <label>Last Name</label>
          <Field<string>
            name="lastName"
            component={TextInput}
            placeholder="Last Name"
          />
        </div>

        <div className="buttons">
          <button type="submit" disabled={submitting || pristine}>
            Submit
          </button>
        </div>
        <pre>{JSON.stringify(values, undefined, 2)}</pre>
      </form>
    )}
  />
);

export default SimpleFinalForm;

import { thirtyFields } from "../../utils/fields";
import { FormBuilder } from "./Performance";

const FormikThirtyFieldsPerformance = () => {
  return (
    <div className="App">
      <header className="App-header">
        Formik ADR: ThirtyFieldsPerformance
      </header>
      <FormBuilder propFields={thirtyFields} />
    </div>
  );
}

export default FormikThirtyFieldsPerformance;
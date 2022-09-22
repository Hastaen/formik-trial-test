import { tenFields } from "../../utils/fields";
import { FormBuilder } from "./Performance";

const FormikTenFieldsPerformance = () => {
  return (
    <div className="App">
      <header className="App-header">Formik ADR: TenFieldsPerformance</header>
      <FormBuilder propFields={tenFields} />
    </div>
  );
};

export default FormikTenFieldsPerformance;

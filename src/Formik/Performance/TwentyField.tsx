import { twentyFields } from "../../utils/fields";
import { FormBuilder } from "./Performance";

const FormikTwentyFieldsPerformance = () => {
  return (
    <div className="App">
      <header className="App-header">
        Formik ADR: TwentyFieldsPerformance
      </header>
      <FormBuilder propFields={twentyFields} />
    </div>
  );
};

export default FormikTwentyFieldsPerformance;
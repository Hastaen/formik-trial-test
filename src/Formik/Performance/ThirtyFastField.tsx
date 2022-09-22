import { thirtyFields } from "../../utils/fields";
import { FastFieldFormBuilder } from "./Performance";

const FormikThirtyFastFieldsPerformance = () => {
  return (
    <div className="App">
      <header className="App-header">Formik ADR: ThirtyFastFieldsPerformance</header>
      <FastFieldFormBuilder propFields={thirtyFields} />
    </div>
  );
}

export default FormikThirtyFastFieldsPerformance;
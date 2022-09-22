import { tenFields } from "../../utils/fields";
import { FormBuilder } from "./Performance";

const FinalFormTenFieldsPerformance = () => {
  return (
    <div className="App">
      <header className="App-header">
        Final Form ADR: TenFieldsPerformance
      </header>
      <FormBuilder propFields={tenFields} />
    </div>
  );
};

export default FinalFormTenFieldsPerformance;
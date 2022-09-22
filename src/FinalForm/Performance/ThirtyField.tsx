import { thirtyFields } from "../../utils/fields";
import { FormBuilder } from "./Performance";

const FinalFormThirtyFieldsPerformance = () => {
  return (
    <div className="App">
      <header className="App-header">
        Final Form ADR: ThirtyFieldsPerformance
      </header>
      <FormBuilder propFields={thirtyFields} />
    </div>
  );
};

export default FinalFormThirtyFieldsPerformance;
import { thirtyFields } from "../../utils/fields";
import { FormBuilder } from "./Performance";

const RHFThirtyFieldsPerformance = () => {
  return (
    <div className="App">
      <header className="App-header">RHF ADR: ThirtyFieldsPerformance</header>
      <FormBuilder propFields={thirtyFields} />
    </div>
  );
};

export default RHFThirtyFieldsPerformance
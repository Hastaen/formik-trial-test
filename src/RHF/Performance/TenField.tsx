import { tenFields } from "../../utils/fields";
import { FormBuilder } from "./Performance";

const RHFTenFieldsPerformance = () => {
  return (
    <div className="App">
      <header className="App-header">RHF ADR: TenFieldsPerformance</header>
      <FormBuilder propFields={tenFields} />
    </div>
  );
};

export default RHFTenFieldsPerformance
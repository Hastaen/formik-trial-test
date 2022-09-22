import { twentyFields } from "../../utils/fields";
import { FormBuilder } from "./Performance";

const RHFTwentyFieldsPerformance = () => {
  return (
    <div className="App">
      <header className="App-header">RHF ADR: TwentyFieldsPerformance</header>
      <FormBuilder propFields={twentyFields} />
    </div>
  );
};

export default RHFTwentyFieldsPerformance;
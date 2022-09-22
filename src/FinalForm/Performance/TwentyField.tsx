import { twentyFields } from "../../utils/fields";
import { FormBuilder } from './Performance';

const FinalFormTwentyFieldsPerformance = () => {
  return (
    <div className="App">
      <header className="App-header">
        Final Form ADR: TwentyFieldsPerformance
      </header>
      <FormBuilder propFields={twentyFields} />
    </div>
  );
};

export default FinalFormTwentyFieldsPerformance;
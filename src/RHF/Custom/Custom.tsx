import { Slider, Button, InputLabel, Select, MenuItem } from "@mui/material";
import { Select as TinkSelect } from "../../Components/Select";
import { useRef, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";

type Option = { value: string; label: string };

type CustomFormValues = {
  slider: number[];
  tinkselect: Option[];
  multiselect: (string | number)[];
};

const options: Option[] = [{ value: '1', label: "one" },
{ value: '2', label: "two" },{ value: '3', label: "three" },
{ value: '4', label: "four" },{ value: '5', label: "five" },
{ value: '6', label: "six" }]

const CustomForm = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const { handleSubmit, control } = useForm<CustomFormValues>({
    defaultValues: {
      slider: [1, 2],
      tinkselect: [
        { value: '1', label: "one" },
        { value: '2', label: "two" },
      ],
      multiselect: [1, "test", 3],
    },
    mode: "onBlur",
  });

  const onSubmit = (values: CustomFormValues) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="slider"
        control={control}
        render={({ field }) => (
          <Slider
            {...field}
            onChange={(_, value) => {
              field.onChange(value);
            }}
            valueLabelDisplay="auto"
            min={1}
            max={10}
            step={1}
          />
        )}
      />

      <Controller
        name="tinkselect"
        control={control}
        render={({ field: { name, value, onChange, onBlur } }) => (
          <TinkSelect
            isMulti={true}
            controlShouldRenderValue
            disableCounter
            isSearchable={false}
            options={options}
            id={name}
            value={value}
            onChange={onChange}
            name={name}
          />
        )}
      />

      <Controller
        name="multiselect"
        control={control}
        render={({ field }) => (
          <>
            <InputLabel htmlFor="grouped-native-select">Grouping</InputLabel>
            <Select multiple {...field}>
              <MenuItem aria-label="None" value="" />
              <MenuItem value={1}>Option 1</MenuItem>
              <MenuItem value={2}>Option 2</MenuItem>
              <MenuItem value={3}>Option 3</MenuItem>
              <MenuItem value={4}>Option 4</MenuItem>
              <MenuItem value={"test"}>Option test</MenuItem>
              <MenuItem value={5}>Option 2</MenuItem>
              <MenuItem value={6}>Option 3</MenuItem>
              <MenuItem value={4}>Option 4</MenuItem>
            </Select>
          </>
        )}
      />

      <Button type="submit">Submit</Button>
    </form>
  );
};

function RHFCustom() {
  return (
    <div className="App">
      <header className="App-header">RHF ADR: Custom form elements</header>
      <CustomForm />
    </div>
  );
}

export default RHFCustom;

import { useCallback } from "react";
import ReactSelect, {
  ActionMeta,
  SelectComponentsConfig,
  StylesConfig,
  OptionProps,
  MenuListComponentProps,
  IndicatorProps,
} from "react-select";
import { components as ReactSelectComponents } from "react-select";
import { CheckboxProps, default as MUICheckbox } from "@mui/material/Checkbox";

export type OptionType<T = string> = {
  value: T;
  label: string;
  isDisabled?: boolean;
};

export type GroupedOptions<T> = T & { label: string; options: T[] };

type SelectBaseProps<T> = {
  menuIsOpen?: boolean;
  label?: React.ReactNode;
  disableCounter?: boolean;
  searchLabel?: string;
  isSearchable?: boolean;
  isDisabled?: boolean;
  components?: SelectComponentsConfig<OptionType<T>>;
  name?: string;
  id?: string;
  controlShouldRenderValue?: boolean;
  closeMenuOnSelect?: boolean;
  isLoading?: boolean;
  styles?: StylesConfig;
  blurInputOnSelect?: boolean;
  isClearable?: boolean;
  placeholder?: React.ReactNode;
  getOptionValue?: (option: OptionType<T>) => string;
};

type SelectSingleProps<T> = {
  isMulti: false;
  // Passing in `null` will clear the current selection.
  value?: OptionType<T> | null;
  defaultValue?: OptionType<T>;
  onChange?: (value: OptionType<T>, action: ActionMeta<OptionType<T>>) => void;
};

type SelectMultiProps<T> = {
  isMulti: true;
  enableSelectAll?: boolean;
  selectAllLabel?: string;
  // Passing in `null` will clear the current selection.
  value?: OptionType<T>[] | null;
  defaultValue?: OptionType<T>[];
  onChange?: (
    value: OptionType<T>[],
    action: ActionMeta<OptionType<T>>
  ) => void;
};

export const Checkbox: React.FC<CheckboxProps> = (
  props
) => <MUICheckbox {...props} />;

/**
 * This type discriminates on `isMulti` to narrow down the types of `value`, `defaultValue` and
 * `onChange` so they accept the correct types.
 */
export type SelectProps<T> = SelectBaseProps<T> & {
  options: (OptionType<T> | GroupedOptions<OptionType<T>>)[];
} & (SelectSingleProps<T> | SelectMultiProps<T>);

export interface OptionTypeBase {
  [key: string]: any;
}

export const MultiOption: React.FC<OptionProps<OptionType<any>>> = (props) => {
  return (
    <ReactSelectComponents.Option {...props}>
      <Checkbox checked={props.isSelected} />
      <span>{props.label}</span>
    </ReactSelectComponents.Option>
  );
};

export const MenuList: React.FC<MenuListComponentProps<any>> = ({
  children,
  ...props
}) => {
  const selectedValues = props.getValue();
  const isAllSelected =
    props.options.length ===
    (selectedValues && Array.isArray(selectedValues) && selectedValues.length);

  const hasSelection =
    !!selectedValues &&
    Array.isArray(selectedValues) &&
    selectedValues.length > 0;

  const onSelectAllClick = useCallback(
    (e: React.MouseEvent<unknown>) => {
      e.preventDefault();
      const isGroupedOptions =
        Array.isArray(props.options) &&
        props.options.length > 0 &&
        props.options[0].options &&
        Array.isArray(props.options[0].options);

      const toSelect = () => {
        if (hasSelection || isAllSelected) {
          return [];
        }

        if (isGroupedOptions) {
          return props.options.reduce((acc, curr) => {
            const options = Array.isArray(curr.options) ? curr.options : [];

            return [...acc, ...options];
          }, []);
        }

        return props.options;
      };

      props.setValue(toSelect(), "set-value");
    },
    [hasSelection, isAllSelected, props]
  );

  const isSearchActive = !!props.selectProps.inputValue;

  return (
    <ReactSelectComponents.MenuList {...props}>
      {props.isMulti &&
        props.selectProps.enableSelectAll &&
        !isSearchActive && (
          <label
            aria-hidden="true" // todo make all list items accessible, now there is no way to navigate with keyboard
            onClick={onSelectAllClick}
            style={props.getStyles("option", props)}
            htmlFor={props.selectProps.id}
          >
            <Checkbox
              role="menuitem"
              id={props.selectProps.id}
              checked={isAllSelected}
              indeterminate={hasSelection}
            />
            <span>{props.selectProps.selectAllLabel}</span>
          </label>
        )}
      {children}
    </ReactSelectComponents.MenuList>
  );
};

export const IndicatorsCounter: React.FC<IndicatorProps<OptionType<any>>> = (props) => {
    const selectedValues = props.getValue();
  
    return (
      <ReactSelectComponents.IndicatorsContainer {...props}>
        {props.hasValue && props.isMulti && Array.isArray(selectedValues) && (
          <div>({selectedValues.length})</div>
        )}
        {props.children}
      </ReactSelectComponents.IndicatorsContainer>
    );
  };

function getCommonProps<T>({
  components,
  label,
  isMulti,
  closeMenuOnSelect = false,
  controlShouldRenderValue,
  disableCounter = false,
  getOptionValue,
}: SelectBaseProps<T> & { isMulti: boolean }) {
  return {
    placeholder: label,
    components: {
      MenuList,
      IndicatorsContainer: disableCounter
        ? ReactSelectComponents.IndicatorsContainer
        : IndicatorsCounter,
      Option: isMulti ? MultiOption : Option,
      ...components,
    },
    closeMenuOnSelect,
    getOptionValue,
    blurInputOnSelect: false,
    hideSelectedOptions: false,
    controlShouldRenderValue: isMulti ? false : controlShouldRenderValue,
  };
}

export const Select = function Select<T>({ styles, ...props }: SelectProps<T>) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore because the react-select types are not very safe and we're trying to pass it
  // more strict types.
  return <ReactSelect {...getCommonProps(props)} {...props} />;
};

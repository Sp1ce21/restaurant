import { ChangeEvent, useCallback } from "react";
import "./style.scss";

type OptionType = {
  label: string;
  value: string;
};

interface ICustomSelect {
  name: string;
  options: OptionType[];
  onChange: (value: string) => void;
}

const CustomSelect = ({ name, options, onChange }: ICustomSelect) => {
  const onSelectChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      onChange(e.target.value);
    },
    [onChange]
  );
  return (
    <select name={name} className="select" onChange={onSelectChange}>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>{label}</option>
      ))}
    </select>
  );
};

export default CustomSelect;

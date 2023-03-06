import { useState, useEffect } from 'react';
import { Props } from './Input.props';

const Input = ({
  value: initialValue,
  onChange,
  debounce = 300,
  ...props
}: Props): JSX.Element => {
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);
    return () => clearTimeout(timeout);
  }, [value, onChange, debounce]);

  return (
    <input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default Input;

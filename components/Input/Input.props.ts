import { InputHTMLAttributes } from 'react';

export interface Props
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value: string | number;
  onChange: (val: string | number) => void;
  debounce?: number;
}

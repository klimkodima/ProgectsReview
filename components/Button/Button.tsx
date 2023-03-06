import { ButtonProps } from './Button.props';

const Button = ({ children, ...props }: ButtonProps): JSX.Element => {
  return (
    <button type='button' {...props}>
      {children}
    </button>
  );
};

export default Button;

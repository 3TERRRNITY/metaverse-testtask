import { ButtonContainer } from "./ButtonStyles";

interface IButtonProps {
  title: string;
  disabled: boolean;
}

const Button = ({ title, disabled }: IButtonProps) => {
  return <ButtonContainer disabled={disabled}>{title}</ButtonContainer>;
};

export default Button;

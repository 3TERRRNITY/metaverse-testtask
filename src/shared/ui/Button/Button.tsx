import { ButtonContainer } from "./ButtonStyles";

interface IButtonProps {
  title: string;
  disabled: boolean;
}

const Button = ({ title, disabled }: IButtonProps) => {
  return (
    <ButtonContainer className="title" disabled={disabled} type="submit">
      {title}
    </ButtonContainer>
  );
};

export default Button;

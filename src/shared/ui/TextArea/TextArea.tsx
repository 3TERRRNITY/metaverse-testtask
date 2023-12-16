import { TextAreaContainer } from "./TextAreaStyle";

interface ITextareaProps {
  text: string;
  placeholder: string;
  disabled: boolean;
}

const TextArea = ({ text, disabled, placeholder }: ITextareaProps) => {
  return (
    <TextAreaContainer
      className="paragraph"
      disabled={disabled}
      placeholder={placeholder}
    >
      {text}
    </TextAreaContainer>
  );
};

export default TextArea;

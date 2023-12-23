import { ITextareaProps } from "../../api/types";
import { Label, TextAreaContainer } from "./TextAreaStyle";

const TextArea = ({
  disabled,
  placeholder,
  label,
  type,
  value,
  onChange,
}: ITextareaProps) => {
  return (
    <Label className="title">
      {label}
      <TextAreaContainer
        className="paragraph"
        required
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Label>
  );
};

export default TextArea;

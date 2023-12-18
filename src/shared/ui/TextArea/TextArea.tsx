import { Label, TextAreaContainer } from "./TextAreaStyle";
import React from "react";

interface ITextareaProps {
  placeholder: string;
  disabled?: boolean;
  label: string;
  type: string;
  name: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

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

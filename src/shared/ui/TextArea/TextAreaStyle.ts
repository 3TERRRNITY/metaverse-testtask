import styled from "@emotion/styled";

export const TextAreaContainer = styled.input`
  width: 100%;
  height: 42px;
  resize: none;

  border: 1px solid #ffffff;
  border-radius: 30px;
  margin-top: 8px;
  padding: 12px 18px;
  overflow-y: hidden;

  background-color: transparent;
  color: #ffffff;

  font-size: 14px;
  line-height: 18px;

  ::placeholder {
    opacity: 0.5;
  }
  &:active {
    border: 1px solid #e75626;
  }

  &:disabled {
    opacity: 0.5;
  }
`;

export const Label = styled.label`
  font-size: 24px;
  line-height: 28.8px;
  font-weight: 700;
  text-transform: uppercase;
`;

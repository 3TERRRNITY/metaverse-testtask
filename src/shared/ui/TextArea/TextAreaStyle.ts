import styled from "@emotion/styled";

export const TextAreaContainer = styled.textarea`
  resize: none;

  width: 421px;
  height: 42px;

  border: 1px solid #ffffff;
  border-radius: 30px;

  padding: 12px 18px;
  overflow-y: hidden;

  background-color: transparent;
  color: #ffffff;
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

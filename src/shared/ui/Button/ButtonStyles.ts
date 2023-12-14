import styled from "@emotion/styled";

export const ButtonContainer = styled.button`
  width: 149px;
  height: 38px;

  border-radius: 30px;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  text-transform: capitalize;

  background-color: #e75626;
  color: #ffffff;

  cursor: pointer;
  transition: background-color 300ms ease-in;
  &:active,
  &:hover {
    background-color: #be3b10;
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

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

  font-weight: 700;
  font-size: 18px;
  line-height: 21.6px;

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

export const WalletAddress = styled(ButtonContainer)`
  color: #e75626;
  background-color: transparent;
  width: max-content;
  height: auto;
  border-radius: none;

  &:hover {
    background-color: transparent;
  }
`;

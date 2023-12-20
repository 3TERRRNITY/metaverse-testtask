import { useEthers } from "@usedapp/core";
import { ButtonContainer, WalletAddress } from "./ButtonStyles";
import React from "react";

interface IButtonProps {
  title: string;
  disabled: boolean;
  wallet?: boolean;
}

const Button = ({ title, disabled, wallet = false }: IButtonProps) => {
  const { activateBrowserWallet, account } = useEthers();
  if (wallet) {
    return (
      <React.Fragment>
        {!account && (
          <ButtonContainer
            onClick={() => activateBrowserWallet()}
            className="title"
            disabled={disabled}
          >
            {title}
          </ButtonContainer>
        )}
        {account && <WalletAddress className="title">{account}</WalletAddress>}
      </React.Fragment>
    );
  } else {
    return (
      <ButtonContainer className="title" disabled={disabled} type="submit">
        {title}
      </ButtonContainer>
    );
  }
};

export default Button;

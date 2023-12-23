import { useEthers } from "@usedapp/core";
import { ButtonContainer, WalletAddress } from "./ButtonStyles";
import React from "react";
import { IButtonProps } from "../../api/types";

const Button = ({ title, disabled, wallet = false }: IButtonProps) => {
  const { activateBrowserWallet, account } = useEthers();
  if (wallet) {
    return (
      // Подключение крипто-кошелька
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
        {account && (
          <WalletAddress className="title">
            {account.substring(0, 18) + "..."}
          </WalletAddress>
        )}
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

import { useEthers } from "@usedapp/core";
import { ButtonContainer, WalletAddress } from "./ButtonStyles";
import React from "react";
import { IButtonProps } from "../../api/types";

const Button = ({ title, disabled, wallet = false, onClick }: IButtonProps) => {
  const { activateBrowserWallet, deactivate, account } = useEthers();
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
          // Возможность отключить кошелек по клику на адрес
          <WalletAddress className="title" onClick={deactivate}>
            {account.substring(0, 18) + "..."}
          </WalletAddress>
        )}
      </React.Fragment>
    );
  } else {
    return (
      <ButtonContainer
        className="title"
        disabled={disabled}
        type="submit"
        onClick={onClick}
      >
        {title}
      </ButtonContainer>
    );
  }
};

export default Button;

import { useEthers } from "@usedapp/core";
import React from "react";

type Props = {};

const WalletConnect = (props: Props) => {
  const { activateBrowserWallet, account } = useEthers();
  return (
    <ButtonContainer>
      <ConnectButton className="title" onClick={() => activateBrowserWallet()}>
        Connect
      </ConnectButton>
      {account && <WalletAddress>{account}</WalletAddress>}
    </ButtonContainer>
  );
};

export default WalletConnect;

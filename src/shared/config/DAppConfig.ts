import { Config, Goerli, Mainnet } from "@usedapp/core";
import { getDefaultProvider } from "ethers";

export const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: getDefaultProvider("goerli"),
  },
};

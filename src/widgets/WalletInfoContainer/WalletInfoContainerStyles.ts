import styled from "@emotion/styled";
import { Label } from "../../shared/ui/TextArea/TextAreaStyle";

export const WalletPage = styled.div`
  margin: 96px 0 169px 0;
  grid-column: 1/13;
`;

export const WalletInfoTitle = styled.div`
  font-weight: 700;
  font-size: 48px;
  line-height: 57.6px;
`;

export const WalletInfo = styled.div`
  margin-top: 48px;
`;

export const WalletInfoLabel = styled(Label)``;

export const WalletInfoText = styled.div`
  font-weight: 700;
  font-size: 32px;
  line-height: 38.4px;

  padding: 8px 0 22px 0;
  color: #e75626;
`;

export const WalletPlanet = styled.div`
  position: absolute;
  right: -200px;
  top: 35px;
`;

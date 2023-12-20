import styled from "@emotion/styled";
import {
  WalletInfoLabel,
  WalletInfoText,
} from "../WalletInfoContainer/WalletInfoContainerStyles";

export const RegistrationPage = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: 48px 0 333px 0;
`;

export const RegistrationInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const RegistrationFormContainer = styled.div`
  grid-column: 1/5;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;
export const RegistrationTitle = styled.div`
  font-weight: 700;
  font-size: 36px;
  line-height: 43.2px;
`;

export const RegistrationDescription = styled.div`
  font-size: 16px;
  line-height: 19.2px;
`;

export const RegistrationForm = styled.form`
  display: flex;
  flex-direction: column;

  gap: 18px;
`;

export const ParticipantsTableContainer = styled.div`
  grid-column: 6/13;
`;

export const InformationLabel = styled(WalletInfoLabel)``;

export const InformationText = styled(WalletInfoText)``;

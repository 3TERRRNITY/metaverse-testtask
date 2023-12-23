import styled from "@emotion/styled";

export const ModalStyles = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 422px;
  height: 295px;
  background-color: #262628;

  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9998;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalTitle = styled.div`
  font-size: 36px;
  line-height: 43.2px;

  text-transform: uppercase;

  padding-bottom: 29px;
`;

export const ModalDescription = styled.div`
  font-size: 16px;
  line-height: 19.2px;
  text-align: center;

  padding-bottom: 94px;
`;

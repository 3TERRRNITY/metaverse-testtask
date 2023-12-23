import { useState } from "react";

import { Button } from "../../shared";

import {
  ModalDescription,
  ModalOverlay,
  ModalStyles,
  ModalTitle,
} from "./ModalStyles";

export const Modal = () => {
  const [showModal, setShowModal] = useState(true);

  // Обработчик закрытия модального окна при клике на кнопку
  const handleCloseModal = () => {
    setShowModal(false);
  };

  if (!showModal) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalStyles>
        <ModalTitle className="title orange">metamask extention</ModalTitle>
        <ModalDescription className="paragraph">
          To work with our application, you have to install the{" "}
          <a
            href="https://metamask.io/download/"
            target="_blank"
            className="orange"
          >
            Metamask browser extension
          </a>
        </ModalDescription>
        <Button
          disabled={false}
          title="Skip this step"
          onClick={handleCloseModal}
        />
      </ModalStyles>
    </ModalOverlay>
  );
};

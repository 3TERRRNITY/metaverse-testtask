import React, { useEffect, useState } from "react";
import { Button, ParticipantsTable, TextArea } from "../../shared";
import {
  InformationLabel,
  InformationText,
  ParticipantsTableContainer,
  RegistrationDescription,
  RegistrationForm,
  RegistrationFormContainer,
  RegistrationInfoContainer,
  RegistrationPage,
  RegistrationTitle,
} from "./RegistrationStyles";
import { useEthers } from "@usedapp/core";

type Participant = {
  id: number;
  username: string;
  email: string;
  address?: string;
};

const Registration = () => {
  const { account } = useEthers();
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const response = await fetch(
          "https://new-backend.unistory.app/api/data?page=0&perPage=20"
        );

        if (response.ok) {
          const data = await response.json();

          setParticipants(data.items);
        } else {
          console.error("Failed to fetch participants");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchParticipants();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newParticipant: Participant = {
      id: participants.length + 1,
      username: formData.username,
      email: formData.email,
      address: account,
    };

    setParticipants([newParticipant, ...participants]);

    setFormSubmitted(true);
  };
  const handleUpdateParticipants = (newParticipants: Participant[]) => {
    setParticipants(newParticipants);
  };

  return (
    <RegistrationPage>
      <RegistrationFormContainer>
        <RegistrationInfoContainer>
          <RegistrationTitle className="title orange">
            Beta test registration
          </RegistrationTitle>
          <RegistrationDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </RegistrationDescription>
        </RegistrationInfoContainer>
        <RegistrationForm onSubmit={handleSubmit}>
          {!formSubmitted ? (
            <React.Fragment>
              <TextArea
                disabled={account ? false : true}
                type="text"
                name="username"
                label="name"
                placeholder="We will display your name in participation list"
                value={formData.username}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    username: e.target.value,
                  })
                }
              />
              <TextArea
                disabled={account ? false : true}
                type="email"
                label="email"
                name="email"
                placeholder="We will display your email in participation list"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <Button
                disabled={account ? false : true}
                title="Get early access"
              />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <InformationLabel className="title">name</InformationLabel>
              <InformationText className="title">
                {formData.username}
              </InformationText>

              <InformationLabel className="title">email</InformationLabel>
              <InformationText className="title">
                {formData.email}
              </InformationText>
              <Button disabled title="List me to the table" />
            </React.Fragment>
          )}
        </RegistrationForm>
      </RegistrationFormContainer>

      <ParticipantsTableContainer>
        {formSubmitted && (
          <ParticipantsTable
            onUpdateFormSubmitted={setFormSubmitted}
            onUpdateParticipants={handleUpdateParticipants}
            participants={participants}
          />
        )}
      </ParticipantsTableContainer>
    </RegistrationPage>
  );
};

export default Registration;

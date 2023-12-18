import { useEffect, useState } from "react";
import { Button, ParticipantsTable, TextArea } from "../../shared";
import {
  ParticipantsTableContainer,
  RegistrationDescription,
  RegistrationForm,
  RegistrationFormContainer,
  RegistrationInfoContainer,
  RegistrationPage,
  RegistrationTitle,
} from "./RegistrationStyles";

type Participant = {
  id: number;
  username: string;
  email: string;
  address?: string;
};

const Registration = () => {
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

  console.log(participants);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newParticipant: Participant = {
      id: participants.length + 1,
      username: formData.username,
      email: formData.email,
    };

    setParticipants([newParticipant, ...participants]);

    setFormData({ username: "", email: "" });

    setFormSubmitted(true);
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
          <TextArea
            type="text"
            name="username"
            label="name"
            placeholder="We will display your name in participation list"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
          <TextArea
            type="email"
            label="email"
            name="email"
            placeholder="We will display your name in participation list"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <Button title="Get early access" disabled={false} />
        </RegistrationForm>
      </RegistrationFormContainer>

      <ParticipantsTableContainer>
        {formSubmitted && <ParticipantsTable participants={participants} />}
      </ParticipantsTableContainer>
    </RegistrationPage>
  );
};

export default Registration;

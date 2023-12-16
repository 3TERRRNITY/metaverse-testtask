import { Button, ParticipantsTable, TextArea } from "../../shared";

const Home = () => {
  return (
    <div>
      SALAM <Button disabled title="Get early access" />{" "}
      <TextArea
        placeholder="We will display your email in participation list "
        disabled
        text=""
      />
      <ParticipantsTable />
    </div>
  );
};

export default Home;

import { Button, TextArea } from "../../shared";

const Home = () => {
  return (
    <div>
      SALAM <Button disabled title="Get early access" />{" "}
      <TextArea
        placeholder="We will display your email in participation list "
        disabled
        text=""
      />
    </div>
  );
};

export default Home;

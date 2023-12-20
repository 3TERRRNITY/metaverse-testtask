import { useParams } from "react-router-dom";

const WalletInfo = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h2>User Info</h2>
      <p>User ID: {id}</p>
    </div>
  );
};

export default WalletInfo;

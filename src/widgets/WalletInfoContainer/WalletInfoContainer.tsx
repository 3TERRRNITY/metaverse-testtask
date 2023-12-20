import { useParams } from "react-router-dom";
import { Planet } from "../../entities";
import {
  WalletInfo,
  WalletInfoLabel,
  WalletInfoText,
  WalletInfoTitle,
  WalletPage,
  WalletPlanet,
} from "./WalletInfoContainerStyles";
import { useEffect, useState } from "react";

interface UserData {
  id: number;
  username: string;
  email: string;
  address: string;
}

const WalletInfoContainer = () => {
  const { id } = useParams<{ id: string }>();
  const [userData, setUserData] = useState<UserData | null>(null);
  console.log(id.substring(1));
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://new-backend.unistory.app/api/data/id/${id.substring(1)}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);
  return (
    <WalletPage>
      <WalletInfoTitle className="title">personal data</WalletInfoTitle>
      <WalletInfo>
        <WalletInfoLabel className="title">name</WalletInfoLabel>
        <WalletInfoText className="title">
          {userData?.username || "Loading.."}
        </WalletInfoText>

        <WalletInfoLabel className="title">email</WalletInfoLabel>
        <WalletInfoText className="title">
          {userData?.email || "Loading.."}
        </WalletInfoText>

        <WalletInfoLabel className="title">wallet</WalletInfoLabel>
        <WalletInfoText className="title">
          {userData?.address || "Loading.."}
        </WalletInfoText>
      </WalletInfo>
      <WalletPlanet>
        <Planet />
      </WalletPlanet>
    </WalletPage>
  );
};

export default WalletInfoContainer;

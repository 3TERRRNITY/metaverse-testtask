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
import { UserData } from "../api/types";

const fetchDataById = async (id: string) => {
  try {
    const response = await fetch(
      `https://new-backend.unistory.app/api/data/id/${id.substring(1)}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

const WalletInfoContainer = () => {
  const { id } = useParams<{ id: string }>();
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDataById(id);
      setUserData(data);
    };

    fetchData();
  }, [id]);

  const renderUserInfo = (label: string, value: string | undefined) => (
    <>
      <WalletInfoLabel className="title">{label}</WalletInfoLabel>
      <WalletInfoText className="title">{value || "Loading.."}</WalletInfoText>
    </>
  );

  return (
    <WalletPage>
      <WalletInfoTitle className="title">personal data</WalletInfoTitle>
      <WalletInfo>
        {renderUserInfo("name", userData?.username)}
        {renderUserInfo("email", userData?.email)}
        {renderUserInfo("wallet", userData?.address)}
      </WalletInfo>
      <WalletPlanet>
        <Planet walletInfo />
      </WalletPlanet>
    </WalletPage>
  );
};

export default WalletInfoContainer;

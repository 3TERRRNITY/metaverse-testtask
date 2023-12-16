import { Button } from "../../shared";
import { LogoContainer, NavbarContainer } from "./NavbarStyles";

interface INavbarProps {}

const Navbar = (props: INavbarProps) => {
  return (
    <NavbarContainer>
      <LogoContainer className="title">Logo</LogoContainer>
      <Button title="Connect Metamask" disabled={false} />
    </NavbarContainer>
  );
};

export default Navbar;

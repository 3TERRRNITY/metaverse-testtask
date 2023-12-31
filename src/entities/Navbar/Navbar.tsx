import { Button } from "../../shared";
import { LogoContainer, NavbarContainer } from "./NavbarStyles";

const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoContainer to={"/"} className="title">
        Logo
      </LogoContainer>
      <Button title="Connect Metamask" disabled={false} wallet />
    </NavbarContainer>
  );
};

export default Navbar;

import styled from "@emotion/styled";
import { Link } from "react-router-dom";
export const NavbarContainer = styled.div`
  display: flex;
  height: 72px;
  padding: 0 64px;
  justify-content: space-between;
  align-items: center;
`;
export const LogoContainer = styled(Link)`
  width: 199px;
  height: 44px;

  font-size: 18px;
  line-height: 21.6px;
  cursor: pointer;
  text-transform: uppercase;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #5a5a5a;
  color: #ffffff;

  border: 1px dashed #c7c7c7;
`;

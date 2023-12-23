import { LayoutContainer } from "./LayoutStyles";
import { ILayoutContainer } from "../../api/types";

const Layout = ({ children }: ILayoutContainer) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default Layout;

import React from "react";
import { LayoutContainer } from "./LayoutStyles";

interface ILayoutContainer {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutContainer) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default Layout;

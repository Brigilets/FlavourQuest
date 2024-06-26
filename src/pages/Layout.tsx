import React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

type Props = {
  children?: React.ReactNode;
};

const Layout: React.FC<React.PropsWithChildren<Props>> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Outlet />
      <Footer />
    </>
  );
};
export default Layout;

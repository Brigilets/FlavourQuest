import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
// const Header = lazy(() => import("../components/Header"));
// const Footer = lazy(() => import("../components/Footer"));

type Props = {
  children?: React.ReactNode;
};

const Layout: React.FC<React.PropsWithChildren<Props>> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;

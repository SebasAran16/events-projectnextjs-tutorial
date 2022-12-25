//rafce Shortcut for layout

import React from "react";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;

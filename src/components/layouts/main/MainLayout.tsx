import React, { FC } from "react";
import Header from "../../header/Header";
import Modal from "../../modal/Modal";

const MainLayout: FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <main className="main">{children}</main>
        {/* <Footer /> */}
      </div>
      <Modal />
    </>
  );
};

export default MainLayout;

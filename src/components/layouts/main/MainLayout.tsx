import React, { FC } from "react";
import Header from "../../header/Header";

const MainLayout: FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;

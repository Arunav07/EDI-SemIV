import React from "react";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      <div className="" style={{ width: "-webkit-fill-available" }}>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const Layout = ({ children }) => {
  return (
    <div className="">
      <Navbar />
        {children}
      <Footer />
    </div>
  );
};

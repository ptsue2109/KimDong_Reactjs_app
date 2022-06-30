import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Top_nav from "./components/Top_nav";

const Customer_layout = () => {
  return (
    <div>
      <Top_nav />
      <Header />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Customer_layout;

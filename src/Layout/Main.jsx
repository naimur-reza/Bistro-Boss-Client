import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Shared/Header";
import Footer from "../Components/Shared/Footer";

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;

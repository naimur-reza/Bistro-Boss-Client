import React from "react";
import Hero from "../Components/Shared/Hero";
import SmallSlider from "../Components/SmallSlider";
import Services from "../Components/Services";
import PopularMenu from "../Components/PopularMenu";

const Home = () => {
  return (
    <>
      <Hero />
      <SmallSlider />
      <Services />
      <PopularMenu />
    </>
  );
};

export default Home;

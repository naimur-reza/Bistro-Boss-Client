import React from "react";
import Hero from "../Components/Shared/Hero";
import SmallSlider from "../Components/SmallSlider";
import Services from "../Components/Services";
import PopularMenu from "../Components/PopularMenu";
import CallUs from "../Components/CallUs";
import Recommends from "../Components/Recommends";

const Home = () => {
  return (
    <>
      <Hero />
      <SmallSlider />
      <Services />
      <PopularMenu />
      <CallUs />
      <Recommends />
    </>
  );
};

export default Home;

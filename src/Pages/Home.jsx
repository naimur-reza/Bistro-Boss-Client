import React from "react";
import Hero from "../Components/Shared/Hero";
import SmallSlider from "../Components/SmallSlider";
import Services from "../Components/Services";
import PopularMenu from "../Components/PopularMenu";
import CallUs from "../Components/CallUs";
import Recommends from "../Components/Recommends";
import Featured from "../Components/Featured";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="max-w-6xl mx-auto">
        <SmallSlider />
        <Services />
        <PopularMenu />
        <CallUs />
        <Recommends />
      </div>
      <Featured />
    </>
  );
};

export default Home;

import React from "react";
import Hero from "../Components/Shared/Hero";
import SmallSlider from "../Components/SmallSlider";
import Services from "../Components/Services";
import PopularMenu from "../Components/PopularMenu";
import CallUs from "../Components/CallUs";
import Recommends from "../Components/Recommends";
import Featured from "../Components/Featured";
import Review from "../Components/Review";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Bistro Boss Restaurant | Home</title>
        <meta name="description" content="Nested component" />
      </Helmet>
      <Hero />
      <div className="max-w-6xl mx-auto">
        <SmallSlider />
        <Services />
        <PopularMenu />
        <CallUs />
        <Recommends />
      </div>
      <Featured />
      <div className="max-w-6xl mx-auto">
        <Review />
      </div>
    </>
  );
};

export default Home;

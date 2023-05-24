import React from "react";
import { Helmet } from "react-helmet";
import img from "../assets/menu/banner3.jpg";
import Cover from "../Components/Shared/Cover";
import PopularMenu from "../Components/PopularMenu";
const Menu = () => {
  return (
    <>
      <Helmet>
        <title>Bistro Boss Restaurant | Menu</title>
        <meta name="description" content="Nested component" />
      </Helmet>
      <Cover img={img} title="Menu" />
      <PopularMenu />
      <Cover img={img} title="Menu" />
      <PopularMenu />
      <Cover img={img} title="Menu" />
      <PopularMenu />
    </>
  );
};

export default Menu;

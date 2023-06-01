import React from "react";
import { Helmet } from "react-helmet";
import img from "../assets/menu/banner3.jpg";
import dessertImg from "../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../assets/menu/pizza-bg.jpg";
import soupImg from "../assets/menu/soup-bg.jpg";
import saladImg from "../assets/menu/salad-bg.jpg";
import Cover from "../Components/Shared/Cover";
import PopularMenu from "../Components/PopularMenu";
import SectionTitle from "../Components/Shared/SectionTitle";
import useMenu from "../hooks/useMenu";
import MenuItems from "../Components/Shared/MenuItems";
import Spinner from "../Components/Shared/Spinner";
const Menu = () => {
  const [menu, loading] = useMenu();
  if (loading) {
    return <Spinner />;
  }
  const popular = menu.filter((m) => m.category === "popular");
  const offered = menu.filter((m) => m.category === "offered");
  const dessert = menu.filter((m) => m.category === "dessert");
  const pizza = menu.filter((m) => m.category === "pizza");
  const soup = menu.filter((m) => m.category === "soup");
  const salad = menu.filter((m) => m.category === "salad");
  return (
    <>
      <Helmet>
        <title>Bistro Boss Restaurant | Menu</title>
        <meta name="description" content="Nested component" />
      </Helmet>
      <Cover img={img} title="Menu" />
      <SectionTitle heading={"Today's Offer"} subHeading={"Don't miss"} />
      <MenuItems items={offered} />

      <MenuItems items={dessert} imageBg={dessertImg} title={"Dessert"} />
      <MenuItems items={pizza} imageBg={pizzaImg} title={"Pizza"} />
      <MenuItems items={salad} imageBg={saladImg} title={"Salad"} />
      <MenuItems items={soup} imageBg={soupImg} title={"Soup"} />
    </>
  );
};

export default Menu;

import React, { useState } from "react";
import Cover from "../Components/Shared/Cover";
import img from "../assets/shop/banner2.jpg";
import "react-tabs/style/react-tabs.css";
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";
import useMenu from "../hooks/useMenu";
import FoodCard from "../Components/FoodCard";
const Shop = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  const offered = menu.filter((m) => m.category === "offered");
  const dessert = menu.filter((m) => m.category === "dessert");
  const pizza = menu.filter((m) => m.category === "pizza");
  const soup = menu.filter((m) => m.category === "soup");
  const salad = menu.filter((m) => m.category === "salad");
  const drinks = menu.filter((m) => m.category === "salad");
  return (
    <div className="max-w-6xl mx-auto">
      <Cover img={img} title="Shop" />
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {salad.map((i) => (
              <FoodCard key={i._id} item={i} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          {" "}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {pizza.map((i) => (
              <FoodCard key={i._id} item={i} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          {" "}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {soup.map((i) => (
              <FoodCard key={i._id} item={i} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          {" "}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {drinks.map((i) => (
              <FoodCard key={i._id} item={i} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Shop;
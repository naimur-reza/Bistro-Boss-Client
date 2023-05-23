import React, { useEffect, useState } from "react";
import SectionTitle from "./Shared/SectionTitle";
import MenuItem from "./Shared/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popular = data.filter((i) => i.category === "popular");
        setMenu(popular);
      });
  }, []);
  return (
    <>
      <SectionTitle subHeading={"Check It Out"} heading={"from our menu"} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
        {menu.map((i) => (
          <MenuItem id={i._id} item={i} />
        ))}
      </div>
    </>
  );
};

export default PopularMenu;

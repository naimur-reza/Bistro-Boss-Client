import React, { useEffect, useState } from "react";
import SectionTitle from "./Shared/SectionTitle";
import MenuItem from "./Shared/MenuItem";
import useMenu from "../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((m) => m.category === "popular");
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <SectionTitle subHeading={"Check It Out"} heading={"from our menu"} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
          {popular.map((i) => (
            <MenuItem id={i._id} item={i} />
          ))}
        </div>
        <div className="text-center py-5">
          <button className="btn btn-ghost border-b-orange-600 border-2 text-gray-700">
            VIEW FULL MENU
          </button>
        </div>
      </div>
    </>
  );
};

export default PopularMenu;

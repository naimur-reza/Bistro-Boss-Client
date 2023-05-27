import React from "react";
import MenuItem from "./MenuItem";
import SectionTitle from "./SectionTitle";
import Cover from "./Cover";
import { Link } from "react-router-dom";
import { useState } from "react";

const MenuItems = ({ items, imageBg, title }) => {
  const [showAll, setShowAll] = useState(false);
  return (
    <div className="max-w-6xl mx-auto">
      {imageBg && <Cover img={imageBg} title={title} />}
      <div className="grid grid-cols-1 py-16 lg:grid-cols-2 gap-5 ">
        {items.slice(0, showAll ? items.length : 4).map((i) => (
          <MenuItem id={i._id} item={i} />
        ))}
      </div>
      <div className="text-center pb-5">
        {" "}
        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="btn btn-secondary btn-outline ">
            Show All
          </button>
        )}
        <Link className="btn btn-warning ms-3" to={`/shop/${title}`}>
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export default MenuItems;

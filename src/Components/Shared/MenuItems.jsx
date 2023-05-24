import React from "react";
import MenuItem from "./MenuItem";
import SectionTitle from "./SectionTitle";
import Cover from "./Cover";
import { Link } from "react-router-dom";

const MenuItems = ({ items, imageBg, title }) => {
  return (
    <div className="max-w-6xl mx-auto">
      {imageBg && <Cover img={imageBg} title={title} />}
      <div className="grid grid-cols-1 py-16 lg:grid-cols-2 gap-5 ">
        {items.map((i) => (
          <MenuItem id={i._id} item={i} />
        ))}
      </div>
      <Link className="btn btn-success" to={`/shop/${title}`}>
        Buy Now
      </Link>
    </div>
  );
};

export default MenuItems;

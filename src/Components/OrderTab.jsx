import React from "react";
import FoodCard from "./FoodCard";

const OrderTab = ({ items }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      {items.map((i) => (
        <FoodCard key={i._id} item={i} />
      ))}
    </div>
  );
};

export default OrderTab;

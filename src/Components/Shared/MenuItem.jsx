import React from "react";

const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item || {};
  return (
    <div className="flex  p-5 gap-3">
      <img
        className="w-28 rounded-r-full rounded-bl-full "
        src={image}
        alt="recipeImage"
      />
      <div className="space-y-2">
        <h1 className="text-2xl text-gray-800">{name} -------------</h1>
        <p className="text-gray-500">{recipe}</p>
      </div>
      <p className="text-yellow-600">${price}</p>
    </div>
  );
};

export default MenuItem;

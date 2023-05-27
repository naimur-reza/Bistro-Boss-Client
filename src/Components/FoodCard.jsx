import React from "react";

const FoodCard = ({ item }) => {
  const handleAddToCart = (item) => {
    console.log(item);
  };
  const { name, image, price, recipe } = item || {};
  return (
    <div className="card card-compact w-96  my-5 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <p className="text-gray-600 bg-black/80 absolute top-0 right-0 mr-5 mt-5 px-4 py-2 rounded">
          <span className="text-white font-semibold ">${price}</span>
        </p>
        <h2 className="card-title text-gray-700">{name}</h2>
        <p className="text-gray-600">{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-primary btn-sm btn-outline">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

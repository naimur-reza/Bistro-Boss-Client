import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";
import { toast } from "react-hot-toast";

const FoodCard = ({ item }) => {
  const [loading, setLoading] = useState(false);
  const [, reFetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const handleAddToCart = (item) => {
    const { name, _id, price, recipe, image } = item || {};
    const foodCart = {
      menuItemId: _id,
      name,
      price,
      recipe,
      image,
      email: user?.email,
    };
    if (!user) {
      Swal.fire({
        title: "You need to login first!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location.pathname } });
        }
      });
    }
    setLoading(true);
    fetch(`http://localhost:3000/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(foodCart),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          reFetch();
          toast.success("Item added to cart");
          setLoading(false);
        }
      });
    console.log("hitting");
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

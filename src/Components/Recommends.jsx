import React from "react";
import SectionTitle from "./Shared/SectionTitle";
import salad from "../assets/menu/salad-bg.jpg";
import pizza from "../assets/menu/pizza-bg.jpg";
import soup from "../assets/menu/soup-bg.jpg";
const Recommends = () => {
  const info = [
    {
      img: salad,
      title: "Salad",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, blanditiis!",
    },
    {
      img: pizza,
      title: "Pizza",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, blanditiis!",
    },
    {
      img: soup,
      title: "Soup",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, blanditiis!",
    },
  ];
  return (
    <>
      <SectionTitle subHeading={"Should Try"} heading={"chef recommends"} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {info.map((i, n) => {
          return (
            <div
              key={n}
              className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={i.img} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-gray-700">{i.title}</h2>
                <p className="text-gray-600">
                  If a dog chews shoes whose shoes does he choose?
                </p>
                <div className="card-actions justify-end">
                  <button className="btn  btn-outline  border-b-4 border">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Recommends;

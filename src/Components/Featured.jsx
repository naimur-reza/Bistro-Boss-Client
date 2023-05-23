import React from "react";
import SectionTitle from "./Shared/SectionTitle";
import "../../src/App.css";
import img from "../assets/home/featured.jpg";
const Featured = () => {
  return (
    <>
      <div className="my-10 pt-10 pb-20  featured">
        <SectionTitle
          color={"text-gray-200"}
          subHeading={"Check It Out"}
          heading={"featured item"}
        />
        <div className="lg:flex gap-5  max-w-6xl mx-auto">
          <img className="w-[500px]" src={img} alt="" />
          <div>
            <h1 className="text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eos
              culpa, reprehenderit ut quod quasi inventore nihil corporis nemo,
              facere molestias itaque quisquam impedit, at deserunt quos dolor.
              Repudiandae, fuga. Rerum quo dolores magnam possimus delectus
              consequatur optio deleniti aliquam sequi dolor doloremque, fuga
              dignissimos deserunt voluptatum veniam laboriosam alias.
            </h1>
            <button className="btn btn-outline">Order Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;

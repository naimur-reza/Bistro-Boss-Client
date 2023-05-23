import React from "react";
import img from "../assets/home/chef-service.jpg";
const Services = () => {
  return (
    <>
      <div className="relative flex items-center justify-center py-20">
        <div className="w-2/3 absolute text-center px-10 py-14 space-y-2  bg-white  z-10">
          <h1 className="text-3xl  text-gray-700">Bistro Boss</h1>
          <p className="tracking-wide text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            delectus! Reiciendis laboriosam, molestias quasi expedita assumenda
            voluptates, possimus adipisci eveniet quam, repellendus non.
            Voluptates dolorum iure unde quis repellat dicta, non mollitia illum
            eligendi natus fugit ex cumque, aliquid error est voluptas nihil
            blanditiis, ea reprehenderit quidem obcaecati necessitatibus quo!
          </p>
        </div>
        <img src={img} alt="" />
      </div>
    </>
  );
};

export default Services;

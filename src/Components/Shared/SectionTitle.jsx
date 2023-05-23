import React from "react";

const SectionTitle = ({ subHeading, heading, color }) => {
  return (
    <div className="text-center pt-5 pb-10 w-4/12 mx-auto">
      <h1 className="text-yellow-600 pb-2  italic tracking-wide">
        ---{subHeading}---
      </h1>
      <h1
        className={`text-3xl ${
          color || "text-gray-700"
        } font-semibold uppercase border-y-4 pb-4 py-3 border-[#E8E8E8]`}>
        {heading}
      </h1>
    </div>
  );
};

export default SectionTitle;

import React from "react";
import { ImSpinner9 } from "react-icons/im";
import { ScrollRestoration } from "react-router-dom";
const Spinner = () => {
  return (
    <>
      <ScrollRestoration />
      <div className="min-h-[calc(100vh-58px)]  flex items-center justify-center">
        <ImSpinner9 size={47} className="animate-spin text-red-500  " />
      </div>
    </>
  );
};

export default Spinner;

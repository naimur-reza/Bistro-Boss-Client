import React from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import SectionTitle from "../../Components/Shared/SectionTitle";

const MyCart = () => {
  const [cart] = useCart();
  const total = cart.reduce((acc, curr) => acc + curr.price, 0); // 0 is initial value

  return (
    <div className="overflow-x-auto w-full px-5">
      <SectionTitle heading={"Wanna Add More?"} subHeading={"My Cart"} />
      <div className="bg-gray-100 p-10">
        {" "}
        <div className="pb-5 flex justify-between">
          <h1 className="text-2xl  text-black">Total Orders: {cart.length}</h1>
          <h1 className="text-2xl  text-black">
            Total Price: ${total.toFixed(2)}
          </h1>
          <button className="btn-sm btn btn-warning">Pay Now</button>
        </div>
        <table className="table w-full ">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Item Name</th>
              <th>Price</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart.map((item, index) => {
              return (
                <tr>
                  <th>
                    <label className="text-black">{index + 1}</label>
                  </th>
                  <td>
                    <div>
                      <div className="avatar">
                        <div className="mask w-16 h-16">
                          <img src={item.image} alt="image" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-gray-500">{item.name}</td>
                  <td className="text-gray-500">${item.price}</td>

                  <th>
                    <button className="btn btn-ghost btn-sm">
                      <FaTrash />
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;

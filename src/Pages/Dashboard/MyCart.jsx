import React, { useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import SectionTitle from "../../Components/Shared/SectionTitle";
import Spinner from "../../Components/Shared/Spinner";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";

const MyCart = () => {
  const [loading, setLoading] = useState(false);
  const [cart, refetch] = useCart();
  const total = cart.reduce((acc, curr) => acc + curr.price, 0); // 0 is initial value
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true);
        fetch(`http://localhost:3000/cart/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              setLoading(false);
              console.log(data);
              toast.success("Item deleted from cart");
            }
          });
      }
    });
  };
  if (loading) {
    return <Spinner />;
  }
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
                <tr key={index}>
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
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-error bg-red-500 text-white btn-sm">
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

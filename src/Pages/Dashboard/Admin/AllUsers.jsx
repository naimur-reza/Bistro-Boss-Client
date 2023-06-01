import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { FaTrash, FaUser, FaUserShield } from "react-icons/fa";
import Spinner from "../../../Components/Shared/Spinner";
import Swal from "sweetalert2";

const AllUsers = () => {
  const [loading, setLoading] = useState(false);
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:3000/users");
    return res.json();
  });

  const handleDelete = (id) => {
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
        fetch(`http://localhost:3000/users/admin/${id}`, {
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

  // make admin
  const handleMakeAdmin = (id) => {
    setLoading(true);
    fetch(`http://localhost:3000/users/admin/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success("User is admin now!");
          setLoading(false);
        }
      });
  };
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="overflow-x-auto w-full px-10">
      <h1 className="text-3xl py-5 text-gray-700">
        Total Users: {users.length}
      </h1>
      <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => {
            return (
              <tr className="text-gray-700" key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user?.role === "admin" ? (
                    <>Admin</>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="btn btn-warning bg-orange-600 text-white btn-sm">
                      <FaUserShield />
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-error bg-red-500 text-white btn-sm">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;

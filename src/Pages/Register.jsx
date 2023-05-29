import React, { useRef, useSate } from "react";

import img from "../assets/others/authentication1.png";
import { toast } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
const Register = () => {
  const { user, loading, createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;

    createUser(email, password)
      .then((res) => {
        updateUser(name, photoUrl);
        const saveUser = { name, email };

        fetch(`http://localhost:3000/users`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              console.log(res.user);
              toast.success("Sign up successfully");
              navigate("/");
            }
          });
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <>
      <div className="loginBg">
        <div className="hero max-w-6xl mx-auto max-h-screen ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <img src={img} alt="login" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm  ">
              <form onSubmit={handleRegister} className="card-body">
                <h1 className="text-center text-xl font-semibold text-gray-800">
                  Create Your Account
                </h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-700">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-700">Photo Url</span>
                  </label>
                  <input
                    type="url"
                    placeholder="Photo Url"
                    required
                    name="photoUrl"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-700">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    required
                    name="email"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-700">Password</span>
                  </label>
                  <input
                    type="password"
                    required
                    name="password"
                    placeholder="********"
                    className="input input-bordered"
                  />
                </div>

                <span className="text-gray-600 font-medium">
                  Already have an account?{" "}
                  <Link className="underline text-yellow-600" to={"/login"}>
                    Login now
                  </Link>
                </span>
                {/* To:Do => Disable this login button */}
                <div className="form-control mt-6">
                  <button
                    type="submit"
                    disabled={false}
                    className={`btn btn-warning `}>
                    Sign Up
                  </button>
                </div>

                <div className="input cursor-pointer bg-gradient-to-r from-red-400 via-yellow-400 to-red-400 flex items-center justify-center">
                  <FcGoogle size={35} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

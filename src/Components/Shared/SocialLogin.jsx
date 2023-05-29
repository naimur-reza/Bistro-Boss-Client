import React from "react";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../providers/AuthProviders";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const location = useLocation();
  const from = location.pathname.from || "/";
  const navigate = useNavigate();
  const { loginWithGoogle } = useContext(AuthContext);
  const handleLogin = () => {
    loginWithGoogle()
      .then((res) => {
        toast.success("Login Successful");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div
      onClick={handleLogin}
      className="input cursor-pointer bg-gradient-to-r from-red-400 via-yellow-400 to-red-400 flex items-center justify-center">
      <FcGoogle size={35} />
    </div>
  );
};

export default SocialLogin;

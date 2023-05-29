import React, { useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import img from "../assets/others/authentication1.png";
import { toast } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Login = () => {
  const { user, loading, signIn } = useContext(AuthContext);
  const captchaRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";
  console.log(from);
  const [disable, setDisable] = useState(true);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((res) => {
        navigate(from, { replace: true });
        toast.success("Login Success");
      })
      .catch((err) => {
        toast.error(err.message);
      });
    toast.success("clicked");
  };
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleValidate = () => {
    const value = captchaRef.current.value;
    if (validateCaptcha(value) === true) {
      setDisable(false);
    } else {
      toast.error("Invalid Captcha. try again");
    }
  };
  return (
    <>
      <div className="loginBg">
        <div className="hero max-w-6xl mx-auto max-h-screen ">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left">
              <img src={img} alt="login" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm  ">
              <form onSubmit={handleLogin} className="card-body">
                <h1 className="text-center text-xl font-semibold text-gray-800">
                  Login
                </h1>
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
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-700">Captcha</span>
                  </label>
                  <LoadCanvasTemplate />
                  <input
                    type="text"
                    ref={captchaRef}
                    placeholder="Type Captcha"
                    className="input input-bordered"
                  />
                </div>
                <button
                  onClick={handleValidate}
                  className="btn-block btn-outline btn-error btn-sm btn">
                  Validate
                </button>
                <span className="text-gray-600 font-medium">
                  New to here?{" "}
                  <Link className="underline text-yellow-600" to={"/signUp"}>
                    Sign Up
                  </Link>
                </span>
                {/* To:Do => Disable this login button */}
                <div className="form-control mt-6">
                  <button
                    type="submit"
                    disabled={false}
                    className={`btn btn-warning `}>
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

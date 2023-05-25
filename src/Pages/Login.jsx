import React, { useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
  const captchaRef = useRef(null);
  const [disable, setDisable] = useState(true);
  const handleLogin = () => {};
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleValidate = () => {
    const value = captchaRef.current.value;
    if (validateCaptcha(value) === true) {
      setDisable(false);
    } else {
      alert("Invalid Captcha. try again");
    }
  };
  return (
    <div className="hero max-w-6xl mx-auto max-h-screen ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">img</div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-center text-xl font-semibold">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Captcha</span>
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
              className="btn-block btn-outline btn-sm btn">
              Validate
            </button>
            <div className="form-control mt-6">
              <button disabled={disable} className={`btn btn-primary `}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Spinner from "../Components/Shared/Spinner";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Spinner />;
  }
  if (user) {
    return children;
  }

  return <Navigate to={"/login"} state={location} replace />;
};

export default PrivateRoute;

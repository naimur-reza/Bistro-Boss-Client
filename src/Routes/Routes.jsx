import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import Shop from "../Pages/Shop";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Spinner from "../Components/Shared/Spinner";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart";
import PrivateRoute from "./PrivateRoute";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome";
import AddItem from "../Pages/Dashboard/Admin/AddItem";
import ManageItems from "../Pages/Dashboard/Admin/ManageItems";
import ManageBookings from "../Pages/Dashboard/Admin/ManageBookings";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "shop/:category",
        element: <Shop />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signUp",
        element: <Register />,
      },
      {
        path: "spinner",
        element: <Spinner />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "myCart",
        element: <MyCart />,
      },
      {
        path: "adminHome",
        element: <AdminHome />,
      },
      {
        path: "addItem",
        element: <AddItem />,
      },
      {
        path: "manageItems",
        element: <ManageItems />,
      },
      {
        path: "manageBookings",
        element: <ManageBookings />,
      },
      {
        path: "allUsers",
        element: <AllUsers />,
      },
    ],
  },
]);
export default router;

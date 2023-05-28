import React from "react";
import {
  FaBars,
  FaCalendarAlt,
  FaCalendarCheck,
  FaComment,
  FaEnvelope,
  FaHome,
  FaMailBulk,
  FaMoneyBill,
  FaMoneyCheck,
  FaMoneyCheckAlt,
  FaShopify,
  FaShoppingCart,
} from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* <!-- Page content here --> */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden">
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <ul className="menu p-4 w-80 bg-[#D1A054] text-gray-800   ">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-white" : "")}
              to={"userHome"}>
              <FaHome /> USER HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"reservation"}
              className={({ isActive }) => (isActive ? "text-white" : "")}>
              <FaCalendarAlt /> RESERVATION
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-white" : "")}
              to={"paymentHistory"}>
              <FaMoneyCheck /> PAYMENT HISTORY
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"myCart"}
              className={({ isActive }) => (isActive ? "text-white" : "")}>
              <FaShoppingCart /> MY CART
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-white" : "")}
              to={"addReview"}>
              <FaComment /> ADD REVIEW
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"myBookings"}
              className={({ isActive }) => (isActive ? "text-white" : "")}>
              <FaCalendarCheck />
              MY BOOKINGS
            </NavLink>
          </li>

          <hr />
          <li>
            <Link to={"/"}>
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link>
              <FaBars /> Menu
            </Link>
          </li>
          <li>
            <Link>
              <FaShopify /> Shop
            </Link>
          </li>
          <li>
            <Link>
              <FaEnvelope /> Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

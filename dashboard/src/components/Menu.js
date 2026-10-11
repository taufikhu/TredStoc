import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <div className="menu-container">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active-menu" : "")}
        end
      >
        Dashboard
      </NavLink>

      <NavLink
        to="/orders"
        className={({ isActive }) => (isActive ? "active-menu" : "")}
      >
        Orders
      </NavLink>

      <NavLink
        to="/holding"
        className={({ isActive }) => (isActive ? "active-menu" : "")}
      >
        Holdings
      </NavLink>

      <NavLink
        to="/position"
        className={({ isActive }) => (isActive ? "active-menu" : "")}
      >
        Positions
      </NavLink>

      <NavLink
        to="/fund"
        className={({ isActive }) => (isActive ? "active-menu" : "")}
      >
        Funds
      </NavLink>

      <NavLink
        to="/app"
        className={({ isActive }) => (isActive ? "active-menu" : "")}
      >
        Apps
      </NavLink>

      <div className="profile">
        <span>ZU</span>
        <p>USERID</p>
      </div>
    </div>
  );
}

export default Menu;
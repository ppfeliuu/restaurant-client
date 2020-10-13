import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="md:w-2/5 xl:w-1/5 bg-gray-800">
      <div className="p-6">
        <p className="uppercase text-white text-2xl tracking-wide text-center font-bold">
          RestaurantApp
        </p>
        <p className="mt-3 text-gray-600 text-center">Manage your restaurant</p>

        <nav className="mt-10">
          <NavLink
            className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900"
            exact="true"
            to="/"
            activeClassName="text-yellow-500"
          >
            Orders
          </NavLink>
          <NavLink
            className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900"
            exact="true"
            to="/menu"
            activeClassName="text-yellow-500"
          >
            Menu
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;

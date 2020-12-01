import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <NavLink activeClassName="active_class" to="/">
        Home
      </NavLink>
      <NavLink activeClassName="active_class" to="/object">
        Object Detection
      </NavLink>
      <NavLink activeClassName="active_class" to="/security">
        Survillance Camera
      </NavLink>
    </>
  );
};

export default Navigation;

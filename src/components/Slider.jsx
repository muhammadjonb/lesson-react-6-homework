import React from "react";
import { useAuth } from "./Auth";
import { NavLink } from "react-router-dom";

const Slider = () => {
  const { user } = useAuth();
  if (user) {
    return (
      <div className="slider">
        <div className="slider_link">
          <NavLink to="/profile">{user.username}</NavLink>
        </div>
        <div className="slider_link">
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="slider_link">
          <NavLink to="/students">Students</NavLink>
        </div>
        <div className="slider_link">
          <NavLink to="/teachers">Teachers</NavLink>
        </div>
      </div>
    );
  }
};

export default Slider;

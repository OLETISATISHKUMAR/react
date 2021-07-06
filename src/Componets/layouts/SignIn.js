import React from "react";
import { NavLink } from "react-router-dom";

const SignIn = () => {
  return (
    <span>
     <ul className="links">
        <li>
          <span>
            <NavLink to="/creat" className="Navlink">
              NewProject
            </NavLink>
          </span>
        </li>
        <li>
          <span>
            <NavLink to="/" className="Navlink">
              LogOut
            </NavLink>
          </span>
        </li>
        <li>
          <span>
            <NavLink to="/" className="Navlink-logo">
              SK
            </NavLink>
          </span>
        </li>
      </ul> 
    </span>
  );
};
export default SignIn;

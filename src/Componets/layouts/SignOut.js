import React from "react";
import { NavLink } from "react-router-dom";

const SignOut = () => {
  return (
    <ul className="links">
      <li>
        <NavLink to="/signin" className="Navlink">
          LogIn
        </NavLink>
      </li>
      <li>
        <NavLink to="/signup" className="Navlink">
          SignUp
        </NavLink>
      </li>
    </ul>
  );
};
export default SignOut;

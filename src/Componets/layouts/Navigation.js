import React from "react";
import { Link } from "react-router-dom";
import SignIn from "./SignIn";
import SignOut from "./SignOut";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <span>
          <Link to="/" className="link">
            PRAKRUTHI SRI
          </Link>
        </span>
        <SignIn />
        <SignOut />
      </nav>
    </div>
  );
};
export default Navbar;

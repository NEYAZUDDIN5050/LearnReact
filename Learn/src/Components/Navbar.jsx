import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full h-[100px] bg-black">
      <div>Logo</div>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/picture">Picture</Link>
        <Link to="/slide">Slide</Link>
        <Link to="/welcome">Welcome</Link>
      </div>
      <div>Profile</div>
    </div>
  );
}

export default Navbar;

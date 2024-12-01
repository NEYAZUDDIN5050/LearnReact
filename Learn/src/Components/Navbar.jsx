import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full h-[100px] justify-between bg-white flex">
      <div className="flex flex-row gap-20 p-5">
        <Link className="text-blue-900 text-xl" to="/home">Car for Sale</Link>
        <Link className="text-blue-900 text-xl" to="/picture">Sell your Car</Link>
        <Link className="text-blue-900 text-xl" to="/slide">Sesrvice & Repair</Link>
        <Link className="text-blue-900 text-xl" to="/welcome">Videos and Review</Link>
      </div>
      <span className="text-blue-900 p-5">Sign Up</span>
    </div>
  );
}

export default Navbar;

import React from "react";

function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-blue-500 text-white ">
      <h1 className="text-xl font-bold">MyWebsite</h1>
      <nav>
        <a href="#hero" className="px-4 hover-underline">
          Home
        </a>
        <a href="#features" className="px-4 hover:underline">
          Features
        </a>
        <a href="contact" className="px-4 hover-underline">
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;

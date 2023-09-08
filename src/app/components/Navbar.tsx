"use client";

import React from "react";

const Navbar = () => {
  return (
    <div className="w-96 border-2 border-purple-400">
      <nav className="border-2 border-red-400 flex justify-between">
        <div>
          <span>devfinder</span>
        </div>
        <div className="flex gap-2">
          <button>Light</button>
          <img src="/assets/icon-sun.svg" alt="light mode" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

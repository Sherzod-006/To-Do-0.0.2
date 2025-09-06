import React from "react";

const HamburgerMenu = ({ isOpen }) => {
  return (
    <div
      className={`row-span-8 z-50 bg-gray-900 text-white p-4 overflow-x-hidden ${
        isOpen ? "col-span-3" : "col-span-1"
      }`}
    >
      <h1>Menu</h1>
    </div>
  );
};

export default HamburgerMenu;

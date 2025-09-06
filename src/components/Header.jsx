//IMPORTING ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMoon,
  faSun,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
//IMPORTING RRD
import { Link } from "react-router-dom";

//IMPORTING HOOKS
import { useState } from "react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center bg-gray-800 text-white md:px-10 px-4 py-2">
      <div className="flex items-center gap-4">
        <button className="hover:bg-gray-700 active:bg-gray-600 p-2 rounded-full text-2xl">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <Link to="/" className="text-2xl font-bold">
          ToDo's
        </Link>
      </div>
      <form className="flex items-center bg-gray-900 rounded-full px-4 py-1 gap-2">
        <input
          type="text"
          placeholder="Search..."
          className="outline-none bg-transparent text-white"
        />
        <button className="text-white cursor-pointer">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
      <div>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="bg-gray-700 active:bg-gray-600 p-0.5 rounded-full flex gap-1 items-center"
        >
          <FontAwesomeIcon
            icon={faMoon}
            className={`${
              isDarkMode ? "bg-gray-800" : "bg-transparent"
            } text-white md:p-1.5 p-1 rounded-full`}
          />
          <FontAwesomeIcon
            icon={faSun}
            className={`${
              !isDarkMode ? "bg-gray-800" : "bg-transparent"
            } text-white md:p-1.5 p-1 rounded-full`}
          />
        </button>
      </div>
    </header>
  );
};

export default Header;

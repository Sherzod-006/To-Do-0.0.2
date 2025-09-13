//IMPORTING ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCheckDouble,
  faPlus,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
//IMPORTING RRD
import { Link } from "react-router-dom";

const HamburgerMenu = ({ isOpen }) => {
  const NavLinks = [
    { to: "/", icon: faHouse, label: "Dashboard" },
    { to: "/all", icon: faCheckDouble, label: "All" },
    { to: "/add-task", icon: faPlus, label: "Add Task" },
    { to: "/settings", icon: faGear, label: "Settings" },
  ];
  return (
    <div
      className={`row-span-8 z-50 bg-gray-800 text-white p-4 overflow-x-hidden ${
        isOpen ? "col-span-3" : "col-span-1"
      }`}
    >
      {NavLinks.map((link) => (
        <ul className="mb-1">
          <li key={link.to}>
            <Link
              to={link.to}
              className="text-xl font-semibold gap-3 flex hover:bg-gray-500 p-2 rounded-xl transition-all duration-100"
            >
              <FontAwesomeIcon className="text-3xl" icon={link.icon} />
              {isOpen && link.label}
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default HamburgerMenu;

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/Logo.png";
import menuBar from '../../images/burger-icon.svg'

const Navbar = () => {
  const [showNav, setShowNav] = useState(false)

  const showAllNavLinks = () => setShowNav(!showNav)

  return (
    <>
      <header className="w-full h-28 fixed top-0 z-[150] left-0 backdrop-blur-sm">
        <div className="max-w-[1440px] mx-auto lg:px-[5%] px-8 h-full flex items-center justify-between">
          {/* logo */}
          <div>
            <Link to="/">
              <img src={logo} alt="website logo" />
            </Link>
          </div>
          {/* nav links to display on desktop */}
          <ul className="lg:flex lg:items-center lg:gap-6 hidden">
            <li className="mr-3">
              <NavLink
                to="/"
                className="text-color-black-100 font-medium"
                style={({ isActive }) => ({ color: isActive ? "#04b90b" : "" })}
              >
                Home
              </NavLink>
            </li>
            <li className="mr-3">
              <NavLink
                to="/menu"
                className="text-color-black-100 font-medium"
                style={({ isActive }) => ({ color: isActive ? "#04b90b" : "" })}
              >
                Menu
              </NavLink>
            </li>
            <li className="mr-3 text-color-black-100 font-medium cursor-pointer">
              Blog
            </li>
            <li className="mr-3">
              <NavLink
                to="/contact"
                className="text-color-black-100 font-medium"
                style={({ isActive }) => ({ color: isActive ? "#04b90b" : "" })}
              >
                Contact
              </NavLink>
            </li>
            <li className="text-color-body font-medium cursor-pointer py-[0.625rem] px-[1.25rem] bg-color-green-200 rounded">
              ORDER NOW
            </li>
          </ul>
          {/* hamburger menu */}
          <div className="cursor-pointer lg:hidden" onClick={showAllNavLinks}>
            <img src={menuBar} alt="" />
          </div>
        </div>
      </header>

      {/* nav links for mobile */}
      <div
        className={`fixed top-0 right-0 left-0 bottom-0 h-screen w-full z-[200] opacity-100 duration-300 ease-in bg-[rgba(0,0,0,0.3)] lg:hidden ${
          showNav
            ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible translate-x-8"
        }`}
      >
        <div className="w-full h-screen bg-[#fcfcfd] max-w-xs absolute top-0 right-0 lg:hidden">
          <ul className=" w-full h-full flex items-center justify-center gap-6 flex-col">
            <li>
              <NavLink
                to="/"
                className="text-color-black-100 font-medium"
                style={({ isActive }) => ({ color: isActive ? "#04b90b" : "" })}
                onClick={showAllNavLinks}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                className="text-color-black-100 font-medium"
                style={({ isActive }) => ({ color: isActive ? "#04b90b" : "" })}
                onClick={showAllNavLinks}
              >
                Menu
              </NavLink>
            </li>
            <li
              className="text-color-black-100 font-medium cursor-pointer"
              onClick={showAllNavLinks}
            >
              Blog
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-color-black-100 font-medium"
                style={({ isActive }) => ({ color: isActive ? "#04b90b" : "" })}
                onClick={showAllNavLinks}
              >
                Contact
              </NavLink>
            </li>
            <li className="text-color-body font-medium cursor-pointer py-[0.625rem] px-[1.25rem] bg-color-green-200 rounded">
              ORDER NOW
            </li>
          </ul>
          <div
            className="absolute top-6 right-6 cursor-pointer text-3xl"
            onClick={showAllNavLinks}
          >
            <i className="ri-close-fill"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

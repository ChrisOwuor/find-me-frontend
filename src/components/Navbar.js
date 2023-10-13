import React, { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SearchIcon from "@mui/icons-material/Search";
import ReportIcon from "@mui/icons-material/Report";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setopen] = useState(false);
  const openMenu = () => {
    setopen(true);
  };
  const closeMenu = () => {
    setopen(!open);
  };
  return (
    <div className=" bg-gray-800">
      <div className="cont relative ">
        <div className="nav flex justify-between p-2 ">
          <div className="logo">
            <Link to="/">
              {" "}
              <div>
                <p className="ml-20 text-white font-bold text-3xl underline max-[1200px]:text-x max-[1200px]:ml-0">
                  Find <span className=" text-indigo-700 ">Me</span>{" "}
                </p>
              </div>
            </Link>
          </div>

          <div className="links lg:flex justify-around  w-max gap-2 hidden ">
             <Link to={"/dashboard"}>
              {" "}
              <div className="dashboard">
                <p
                  className="text-gray-300 hover:bg-gray-700 hover:text-white
                              rounded-md px-3 py-2 text-sm font-medium"
                >
                  Dashboard
                </p>
              </div>
            </Link>
            <Link to={"/services"}>
              {" "}
              <div className="services">
                <p
                  className="text-gray-300 hover:bg-gray-700 hover:text-white
                              rounded-md px-3 py-2 text-sm font-medium"
                >
                  Services
                </p>
              </div>
            </Link>
            <Link>
              {" "}
              <div className="about">
                <p
                  className="text-gray-300 hover:bg-gray-700 hover:text-white
                              rounded-md px-3 py-2 text-sm font-medium"
                >
                  About
                </p>
              </div>
            </Link>
            <Link>
              <div className="account">
                <p
                  className="text-gray-300 hover:bg-gray-700 hover:text-white
                              rounded-md px-3 py-2 text-sm font-medium"
                >
                  Account
                </p>
              </div>
            </Link>
            <Link to="/login">
              {" "}
              <div className="report_person  cursor-pointer  ">
                <p
                  className="text-gray-300 hover:bg-gray-700 hover:text-white
                              rounded-md px-3 py-2 text-sm font-medium"
                >
                  Login{" "}
                </p>{" "}
              </div>
            </Link>
            <Link to="/login">
              {" "}
              <div className="report_person  cursor-pointer  ">
                <p
                  className="text-gray-300 hover:bg-gray-700 hover:text-white
                              rounded-md px-3 py-2 text-sm font-medium"
                >
                  Logout{" "}
                </p>{" "}
              </div>
            </Link>
            <Link to="Signup">
              {" "}
              <div className="report_person  cursor-pointer ">
                <p
                  className="text-gray-300 hover:bg-gray-700 hover:text-white
                              rounded-md px-3 py-2 text-sm font-medium"
                >
                  Sign Up{" "}
                </p>{" "}
              </div>
            </Link>
          </div>
          <div className="menu_icon hidden max-[1200px]:block">
            <p className="outline outline-1 p-1 rounded-sm" onClick={openMenu}>
              Menu{" "}
            </p>
          </div>
        </div>

        <div
          className={`phone_nav lg:hidden ${
            open ? "block" : "hidden"
          } absolute right-0 top-0 bg-green-100 h-screen px-4 pt-4 w-max`}
        >
          <p
            className="outline outline-1 p-1 mb-2 w-max rounded-sm mr-0"
            onClick={closeMenu}
          >
            Close
          </p>

          <div className="links inline-block  w-max ">
            <Link to="add_person " onClick={closeMenu}>
              {" "}
              <div className="add_person mb-4 mt-2 border-b-2    text-black p-1  flex align-middle gap-1  border-black  font-medium hover:bg-indigo-500 cursor-pointer ">
                <div>
                  <AddCircleOutlineIcon />
                </div>
                <p className=" ">Add missing Person</p>
              </div>
            </Link>

            <Link to="find_person" onClick={closeMenu}>
              <div className="add_person mb-4 mt-2 border-b-2   text-black p-1  flex align-middle gap-1  border-black  font-medium hover:bg-indigo-500 cursor-pointer ">
                <div>
                  <SearchIcon />
                </div>
                <p className="">Find Missing Person</p>
              </div>
            </Link>

            <Link to="report_person" onClick={closeMenu}>
              {" "}
              <div className="add_person mb-4 mt-2 border-b-2   text-black p-1  flex align-middle gap-1  border-black  font-medium hover:bg-indigo-500 cursor-pointer ">
                <div>
                  <ReportIcon />
                </div>
                <p className="">Report a seen person</p>
              </div>
            </Link>
          </div>
          <Link to="/login" onClick={closeMenu}>
            {" "}
            <div className="report_person  cursor-pointer mb-4 mt-2 ">
              <p className="inline-block rounded-md border border-transparent  px-2 py-1  text-center font-medium text-black hover:bg-indigo-700 ">
                Login{" "}
              </p>{" "}
            </div>
          </Link>
          <Link to="Signup" onClick={closeMenu}>
            {" "}
            <div className="report_person  cursor-pointer mb-2 ">
              <p className="inline-block rounded-md border border-transparent  px-2 py-1  text-center font-medium text-black hover:bg-indigo-700 ">
                Sign Up{" "}
              </p>{" "}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

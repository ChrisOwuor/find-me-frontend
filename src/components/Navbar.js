import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SearchIcon from "@mui/icons-material/Search";
import ReportIcon from "@mui/icons-material/Report";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="sticky top-0 bg-white">
      <div className="nav flex justify-between p-2 ">
        <div className="logo">
          <Link to="/">
            {" "}
            <div>
              <p className="ml-20 font-bold text-3xl underline max-[1200px]:text-xl max-[1200px]:w-full max-[1200px]:ml-0">
                Find <span className=" text-indigo-700 ">Me</span>{" "}
              </p>
            </div>
          </Link>
        </div>
        <div className="links flex justify-around  w-max gap-2">
          <Link to="add_person">
            {" "}
            <div className="add_person  p-1 bg-white flex align-middle gap-1 border-b-2 border-black hover:border-indigo-700 cursor-pointer ">
              <div>
                <AddCircleOutlineIcon />
              </div>
              <p className="max-[1200px]:hidden">Add missing Person</p>
            </div>
          </Link>

          <Link to="find_person">
            <div className="find_person  p-1 bg-white flex align-middle gap-1 border-b-2 border-black hover:border-indigo-700 cursor-pointer ">
              <div>
                <SearchIcon />
              </div>
              <p className="max-[1200px]:hidden">Find Missing Person</p>
            </div>
          </Link>

          <Link to="report_person">
            {" "}
            <div className="report_person  p-1 bg-white flex align-middle gap-1 border-b-2 border-black hover:border-indigo-700 cursor-pointer  ">
              <div>
                <ReportIcon />
              </div>
              <p className="max-[1200px]:hidden">Report a seen person</p>
            </div>
          </Link>
          <Link to="Login">
            {" "}
            <div className="report_person  cursor-pointer max-[1200px]:hidden ">
              <p className="inline-block rounded-md border border-transparent bg-indigo-600 px-2 py-1  text-center font-medium text-white hover:bg-indigo-700 ">
                Login{" "}
              </p>{" "}
            </div>
          </Link>
          <Link to="Signup">
            {" "}
            <div className="report_person  cursor-pointer max-[1200px]:hidden ">
              <p className="inline-block rounded-md border border-transparent bg-indigo-600 px-2 py-1  text-center font-medium text-white hover:bg-indigo-700 ">
                Sign Up{" "}
              </p>{" "}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

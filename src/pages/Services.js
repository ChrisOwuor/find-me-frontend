import React from "react";
import { Outlet } from "react-router-dom";
import NavService from "../components/NavService";
import find from "../assets/find.png";
import add from "../assets/missing2.png";
import report from "../assets/report.png"

export default function Services() {
  return (
    <>
      <div className="w-full flex justify-center mt-6">
        <div className="services w-4/5  grid grid-cols-1 lg:grid-cols-3 gap-x-3">
          <div className="find text-center p-4">
            <div className="image flex justify-center">
              <img src={add} alt="add" className="w-24 lg:w-48" />
            </div>
            <div className="info">
              <p>
                FindUs provides us with an easier way to add a missing person so
                they are visible to anone
              </p>
            </div>
          </div>
          <div className="add text-center p-4">
            <div className="image flex justify-center">
              <img src={find} alt="add" className="w-24 lg:w-48" />
            </div>
            <div className="info">
              <p>
                FindUs provides an easy and more convinient way to add a miisng
                person{" "}
              </p>
            </div>
          </div>

          <div className="report">
            <div className="image">
              <div className="image flex justify-center">
                <img src={report} alt="add" className="w-24 lg:w-48" />
              </div>
            </div>
            <div className="info">
              <p>You can easily freport a lost person without logging in</p>
            </div>
          </div>
        </div>
      </div>
      <NavService />
     
        <Outlet />
    </>
  );
}

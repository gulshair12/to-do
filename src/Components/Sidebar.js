import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Svg from "./Svg";

export default function Sidebar() {
  return (
    <>
      <nav className="flex bg-white w-60 h-full fixed left-0 top-0 flex flex-col justify-between">
        <div className="mt-12 space-x-0.3">
          <Link to="/task">
            <Button 
            style="sidebar_button"
            >
           <Svg svgVariant="task_icon" />
              Task
            </Button>
          </Link>
          <Link to="/location">
            <Button
            style = "sidebar_button"
            >
                <Svg svgVariant="location_icon" />
              Location
            </Button>
          </Link>
        </div>

        <div className="p-4">
          <Link to="/">
            <Button
             style = "logout_button"
            >
              <Svg svgVariant="logout_icon" />
              Logout
            </Button>
          </Link>
        </div>
      </nav>
    </>
  );
}

import React from "react";
import Sidebar from "../Components/Sidebar";

export default function Location() {
  return (
    <>
      <div>
        <Sidebar />
      </div>
      <div className="absolute top-[3rem] left-[19.06rem]  ">
        <button className="font-bold">+ Check In</button>
        <p className="mt-8 font-bold ">Current Location</p>
        <div className="relative pt-4 font-medium inline-block ">
          📍 Pustegränd, Stockholm, SE
        </div>
        <p className="ml-4 text-gray-500">59.3293° N, 18.0686° E</p>
      </div>
      <div className="absolute top-[12rem] left-[19.06rem]">
        <p className="mt-8 font-bold ">Previous Locations</p>
        <div className="relative pt-4 font-medium inline-block ">
          📍 Halsingegätan, Stockholm, SE
        </div>
        <p className="ml-4 text-gray-500">59.3293° N, 18.0686° E</p>
        <div className="relative pt-4 font-medium inline-block ">
          📍 Pustegränd, Stockholm, SE
        </div>
        <p className="ml-4 text-gray-500">59.3293° N, 18.0686° E</p>
        <div className="relative pt-4 font-medium inline-block ">
          📍 Långa Gatan, Stockholm, SE
        </div>
        <p className="ml-4 text-gray-500">59.3293° N, 18.0686° E</p>
        <div className="relative pt-4 font-medium inline-block ">
          📍 Djurgården, Stockholm, SE
        </div>
        <p className="ml-4 text-gray-500">59.3293° N, 18.0686° E</p>
        <div className="relative pt-4 font-medium inline-block ">
          📍 Svartensgatan, Stockholm, SE
        </div>
        <p className="ml-4 text-gray-500">59.3293° N, 18.0686° E</p>
      </div>
    </>
  );
}

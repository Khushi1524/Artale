import React from "react";
import { Sidebar, Header } from "../templates";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <div className="flex">
        <Sidebar/>
        <div className="w-full">
          <Header />
          <div className="flex flex-col flex-1 px-18 py-10 gap-5 ">
           <Outlet/>
          </div>
        </div>
      </div>
    </>
  );
};

 
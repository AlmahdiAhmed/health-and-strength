"use client";
import Link from "next/link";
import Categories from "./Categories";
// import { useContext, useState } from "react";
// import { AppContext } from "./AppProvider";
// import { AppContext } from "@/components/AppProvider";
const Navbar = () => {
  // const { category, setCategory } = useContext(AppContext);

  return (
    <nav className="w-full h-[50px] flex justify-between items-center bg-[#E7ECEF] px-1 sm:px-4 mt-2 border-l-2 border-r-2 border-[#f05f5e] z-10">
      <div className="h-full flex items-center">
        <Link href={"/"} className="flex-1">
          <h2 className="text-[#0f7173] text-lg font-extrabold">
            Health <span className="text-[#f05f5e]">&</span> Strength
          </h2>
        </Link>
      </div>
      <div className="flex justify-between h-full items-center gap-1 text-lg text-[#0f7173]">
        <div className="relative h-full flex items-center cursor-pointer">
          {/* <Categories category={category} setCategory={setCategory} /> */}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

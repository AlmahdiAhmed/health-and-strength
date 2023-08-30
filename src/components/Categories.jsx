"use client";
import Link from "next/link";
import { useState } from "react";
const Categories = ({ category, setCategory }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="px-1 sm:px-2 z-20">
      <div>
        <h3
          className="hover:text-[#f05f5e] transition-all w-full"
          onClick={() => setToggle(!toggle)}
        >
          Categories
        </h3>
        {toggle && (
          <div
            className={`shadow-gray-900 buttons p-2 w-full top-[50px] left-0 absolute flex flex-col justify-center bg-[#E7ECEF] z-20`}
          >
            <button
              onClick={() => {
                setCategory("all");
                setToggle(false);
              }}
              className="hover:text-[#f05f5e] transition-all"
            >
              <Link href="/">All</Link>
            </button>
            <button
              onClick={() => {
                setCategory("chest");
                setToggle(false);
              }}
              className="hover:text-[#f05f5e] transition-all border-t border-b border-[#f05f5e]"
            >
              <Link href="/">Chest</Link>
            </button>
            <button
              onClick={() => {
                setCategory("back");
                setToggle(false);
              }}
              className="hover:text-[#f05f5e] transition-all"
            >
              <Link href="/">Back</Link>
            </button>
            <button
              onClick={() => {
                setCategory("legs");
                setToggle(false);
              }}
              className="hover:text-[#f05f5e] transition-all border-t border-b border-[#f05f5e]"
            >
              <Link href="/">Legs</Link>
            </button>
            <button
              onClick={() => {
                setCategory("arms");
                setToggle(false);
              }}
              className="hover:text-[#f05f5e] transition-all"
            >
              <Link href="/">Arms</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Categories;

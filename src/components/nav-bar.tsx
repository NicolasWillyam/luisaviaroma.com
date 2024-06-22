"use client";
import React, { useRef, useState, useEffect } from "react";
import { IoEarthOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { PiHandbagLight } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { NavBarMenu } from "./nav-bar-menu";

const NavBar = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [navbarWidth, setNavbarWidth] = useState<number | null>(null);

  useEffect(() => {
    if (divRef.current) {
      const width = divRef.current.getBoundingClientRect().width;
      console.log(width);
      setNavbarWidth(width);
    }
  }, []);

  return (
    <div className="fixed top-0 w-full bg-white border-b-[1px] shadow-sm border-[#F4F4F4]">
      <div className="w-full h-10 bg-black flex items-center justify-center">
        <p className="text-white text-sm">The Seasonal Sale Up to 80% OFF</p>
      </div>
      <div
        ref={divRef}
        className="max-w-[1440px] px-8 pt-1 mx-auto h-[54px] flex items-center justify-between"
      >
        <div className="w-2/5">
          <ul className="flex gap-8 text-[13px] uppercase font-[300] text-light-black cursor-pointer">
            <li>women</li>
            <li>men</li>
            <li>kids</li>
            <li>home</li>
            <li>LVR magazine</li>
          </ul>
        </div>
        <div className="w-1/5 text-center">
          <p
            className="text-2xl uppercase font-semibold text-black cursor-pointer"
            style={{ letterSpacing: -1 }}
          >
            luisaviaroma
          </p>
        </div>
        <div className="w-2/5 ">
          <ul className="flex justify-end gap-6 text-[13px] uppercase font-thin text-light-black cursor-pointer">
            <li>
              <IoEarthOutline size={20} />
            </li>
            <li className="flex items-end">
              <IoLocationOutline size={20} />
              <p className="text-xs ml-1 uppercase font-thin text-light-black cursor-pointer">
                Vietnam
              </p>
            </li>
            <li>
              <IoMdHeartEmpty size={20} />
            </li>
            <li>
              <PiHandbagLight size={20} />
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1440px] px-8 pt-1 mx-auto h-[54px] flex items-center justify-between">
        <NavBarMenu width={navbarWidth} />
      </div>
    </div>
  );
};

export default NavBar;

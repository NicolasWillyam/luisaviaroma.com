import Image from "next/image";
import React from "react";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className="border-t-[1px] border-gray-300">
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-2 mb-2">
        <div className="">
          <p className="text-base font-bold">
            Get the latest updates and exclusive offers
          </p>
          <form action="" className="flex gap-2.5 mt-2.5">
            <input
              type="email"
              placeholder="Email"
              className="text-sm py-2 border-b-[1px] w-full outline-none border-light-black"
            />
            <input
              type="submit"
              className="bg-black text-white px-20 text-xs uppercase"
              value={"Subscribe"}
            />
          </form>
        </div>

        <div className="ml-auto ">
          <p className="text-lighter-black text-sm">Follow us on:</p>
        </div>
      </div>
      <div className="w-full h-14 bg-[#F4F4F4] flex justify-center items-center border-t-[1px]">
        <ul>
          <li>
            <p className="text-lighter-black text-sm">We Accept:</p>
          </li>
        </ul>
      </div>

      <div className="w-full py-8 px-8 pb-4 grid grid-cols-4">
        <div className="uppercase border-r-[1px] border-gray-300 pb-3 ml-2 mr-2">
          <p className="font-bold text-xs text-light-black">Company</p>
          <ul className="text-[11px] text-lighter-black mt-3 grid grid-cols-1 gap-3 font-[100]">
            <li>Our Story</li>
            <li>ABOUT US</li>
            <li>STORES & HOURS</li>
            <li>JOB LISTINGS</li>
            <li>PRESS AREA</li>
          </ul>
        </div>

        <div className="uppercase border-r-[1px] border-gray-300 pb-3 ml-2 mr-2">
          <p className="font-bold text-xs text-light-black">Company</p>
          <ul className="text-[11px] text-lighter-black mt-3 grid grid-cols-1 gap-3 font-[100]">
            <li>Our Story</li>
            <li>ABOUT US</li>
            <li>STORES & HOURS</li>
            <li>JOB LISTINGS</li>
            <li>PRESS AREA</li>
          </ul>
        </div>

        <div className="uppercase border-r-[1px] border-gray-300 pb-3 ml-2 mr-2">
          <p className="font-bold text-xs text-light-black">Company</p>
          <ul className="text-[11px] text-lighter-black mt-3 grid grid-cols-1 gap-3 font-[100]">
            <li>Our Story</li>
            <li>ABOUT US</li>
            <li>STORES & HOURS</li>
            <li>JOB LISTINGS</li>
            <li>PRESS AREA</li>
          </ul>
        </div>

        <div className="uppercase pb-3 ml-2 mr-2">
          <p className="font-bold text-xs text-light-black">Company</p>
          <ul className="text-[11px] text-lighter-black mt-3 grid grid-cols-1 gap-3 font-[100]">
            <li>Our Story</li>
            <li>ABOUT US</li>
            <li>STORES & HOURS</li>
            <li>JOB LISTINGS</li>
            <li>PRESS AREA</li>
          </ul>
        </div>
      </div>
      <div className="w-full flex justify-center items-center pt-4 pb-8">
        <TfiHeadphoneAlt />
        <p className="text-sm ml-2">Need help?</p>
        <p className="ml-1.5 text-sm font-bold">+39 055 093 60 54</p>
      </div>
      <div className="w-full p-2.5 border-t-[1px] border-gray-300 flex justify-center items-center">
        <p className="text-xs text-lighter-black">
          © 2004-2024 LUISA VIA ROMA S.P.A. - VAT number: IT 00607970480 - Via
          Benedetto Varchi 61, 50132 Firenze
        </p>
      </div>
    </div>
  );
};

export default Footer;

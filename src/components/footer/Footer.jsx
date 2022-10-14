import React from "react";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="bg-slate-800 text-white py-2 px-8  ">
      <div className=" flex  items-center justify-between  py-5 ">
        <div className="cursor-default text-center  w-[300px]">
          <div className="hover:text-blue-600">Careers</div>
          <div className="hover:text-blue-600">About Us</div>
          <div className="hover:text-blue-600">Customer Care</div>
        </div>
        <div className="cursor-default text-center  w-[300px]">api</div>
        <div className="cursor-default  w-[300px]   flex items-center justify-between   ">
          <div className="text-blue-600 hover:text-white hover:scale-105 duration-200">
            <BsFacebook size={25} />
          </div>
          <div className="text-blue-600 hover:text-white hover:scale-105 duration-200">
            <AiFillInstagram size={25} />
          </div>
          <div className="text-blue-600 hover:text-white hover:scale-105 duration-200">
            <AiFillTwitterCircle size={25} />
          </div>
          <div className="text-blue-600 hover:text-white hover:scale-105 duration-200">
            <BsGithub size={25} />
          </div>
        </div>
      </div>
      <div className="text-center pt-7   ">
        <p className="cursor-default">Powered by MCG</p>
      </div>
    </div>
  );
};

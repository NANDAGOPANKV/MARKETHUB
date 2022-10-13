import React from "react";
import { CgProfile } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Search } from "../Search/Search";

export const NavBar = () => {
  return (
    <div className="flex w-full items-center justify-between bg-slate-800 text-white font-bold px-5 h-[5rem] uppercase   ">
      {/* logo */}
      <div className="text-sm">
        <Link to="/">markethub.com</Link>
      </div>
      {/* logo */}
      {/* search */}
      <div >
        <Search/>
      </div>
      {/* search */}
      {/* Account&Favorite or MyCart */}
      <div className="flex items-center">
        <div className="hidden cursor-pointer mr-4  items-center  sm:block  ">
          <Link to="/cart">
            <div className="flex items-center">
              <div>
                <AiOutlineShoppingCart size={30} />
              </div>
              <div className="m-2">Mycart</div>
            </div>
          </Link>
        </div>
        <div className="cursor-pointer">
          <Link to='/account'>
            <CgProfile size={35} />
          </Link>
        </div>
      </div>
      {/* Account&Favorite or MyCart */}
    </div>
  );
};

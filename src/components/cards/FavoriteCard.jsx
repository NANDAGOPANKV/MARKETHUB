import React, { useState } from "react";
import { MdAddShoppingCart, MdFileDownloadDone } from "react-icons/md";

export const FavoriteCard = ({ items, func }) => {
  const [added, setAdded] = useState(false);

  return (
    <div className=" relative max-w-[550px] h-[450px] m-3 mt-12 border rounded-md shadow-xl bg-slate-50 hover:scale-105 duration-500   ">
      <div className="w-full">
        <div>
          <div className="w-full flex items-center justify-between px-2 pt-1  ">
            <div></div>
            <div onClick={() => setAdded(!added)}>
              {added ? (
                <MdFileDownloadDone size={30} />
              ) : (
                <MdAddShoppingCart size={30} />
              )}
            </div>
          </div>
          <div>
            <img
              className=" my-2 mx-auto max-h-[200px]  "
              src={items?.image}
              alt="/"
            />
          </div>
        </div>
      </div>

      <div className=" w-[-1rem] flex  ">
        <div className="w-full h-[225px] ">
          <div className="py-3 px-3 text-lg">
            <p>{items?.name}</p>
          </div>
          <div className="py-2 px-3 font-bold ">
            <p> MRP: {items?.price}</p>
            <p>Category: {items?.category}</p>
          </div>
          <div className="flex items-center h-[50px] justify-between px-8  ">
            <div className=" rounded mb-5  bg-orange-500 text-white font-bold mt-3">
              <button className="px-8  py-3  ">BUY</button>
            </div>
            <div className="rounded mb-5 bg-red-500 text-white font-bold mt-3">
              <button className="px-7 py-3  " onClick={() => func(items.id)}>
                delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

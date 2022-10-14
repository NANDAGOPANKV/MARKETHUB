import React, { useContext, useState } from "react";
import { MdAddShoppingCart, MdFileDownloadDone } from "react-icons/md";
import { AuthContextProvider } from "../../context/auth/AuthContext";
import { db } from "../../firebase/Firebase";
import { doc, arrayUnion, updateDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

export const Cards = ({ items }) => {
  const [addToCart, setAddToCart] = useState(false);
  const { user } = useContext(AuthContextProvider);

  const itemPath = doc(db, "users", `${user?.email}`);

  const saveProducts = async () => {
    if (user?.email) {
      setAddToCart(true);
      await updateDoc(itemPath, {
        FavoriteContent: arrayUnion({
          id: items.id,
          image: items?.category?.image,
          category: items?.category?.name,
          name: items?.title,
        }),
      });
    } else {
      alert("Create An Account Then Try it ");
    }
  };

  if (items?.category) {
    return (
      <div className=" relative max-w-[550px] h-[440px]  m-3 rounded-md shadow-xl hover:bg-slate-800 hover:text-white  bg-slate-50 hover:scale-105 duration-700   ">
        <div className="w-full">
          <div>
            <div className="w-full flex items-center justify-between px-2 pt-1  ">
              <div></div>
              <div onClick={saveProducts}>
                {addToCart ? (
                  <MdFileDownloadDone size={30} />
                ) : (
                  <MdAddShoppingCart size={30} />
                )}
              </div>
            </div>
            <div>
              <img
                className=" my-2 px-1 mx-auto max-h-[200px]  "
                src={items?.category?.image}
                alt="/"
              />
            </div>
          </div>
        </div>

        <div className=" w-[-1rem] flex  ">
          <div className="w-full  ">
            <div className="py-3 px-3 text-lg">
              <p>{items?.title}</p>
            </div>
            <div className="py-2 px-3 font-bold ">
              <p> MRP: {items?.price}</p>
              <p>Category: {items?.category?.name}</p>
            </div>
            <div className="flex items-center h-[50px] justify-between px-6  ">
              <div className=" rounded md:mr-2  bg-orange-500 text-white hover:bg-orange-400 duration-100 font-bold mt-3">
                <button className="px-6   py-3  ">BUY</button>
              </div>
              <div className="rounded md:ml-2 bg-red-500 hover:bg-red-400 duration-200 text-white font-bold mt-3">
                <Link to="/cart">
                  <button className="px-5 py-3  ">MyCart</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

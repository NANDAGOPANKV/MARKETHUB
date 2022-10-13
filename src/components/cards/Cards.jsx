import React, { useContext, useState } from "react";
import { MdAddShoppingCart, MdFileDownloadDone } from "react-icons/md";
import { AuthContextProvider } from "../../context/auth/AuthContext";
import { db } from "../../firebase/Firebase";
import { doc, arrayUnion, updateDoc } from "firebase/firestore";

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
      <div className=" relative max-w-[550px] h-[450px] m-3 border rounded-md shadow-xl bg-slate-50 hover:scale-105 duration-500   ">
        <div className="w-full">
          <p>{user ? user?.email : 'No User'} i </p>
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
                className=" my-2 mx-auto max-h-[200px]  "
                src={items?.category?.image}
                alt="/"
              />
            </div>
          </div>
        </div>

        <div className="border w-[-1rem] flex  ">
          <div className="w-full h-[225px] ">
            <div className="py-3 px-3 text-lg">
              <p>{items?.title}</p>
            </div>
            <div className="py-2 px-3 font-bold ">
              <p> MRP: {items?.price}</p>
              <p>Category: {items?.category?.name}</p>
            </div>
            <div className="flex items-center h-[50px] justify-between px-1  ">
              <div className=" rounded  bg-orange-500 text-white font-bold mt-3">
                <button className="px-8  py-3  ">BUY</button>
              </div>
              <div className="rounded bg-red-500 text-white font-bold mt-3">
                <button className="px-7 py-3  ">SHARE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

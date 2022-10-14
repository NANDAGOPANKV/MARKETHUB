import React, { useContext, useLayoutEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Search } from "../Search/Search";
import { AuthContextProvider } from "../../context/auth/AuthContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/Firebase";
import { CartItemLenghtProvider } from "../../context/CartCountContext";

export const NavBar = () => {
  const { user, SiginOut } = useContext(AuthContextProvider);
  const [userName, setUserName] = useState("");
  // console.log(user);
  const { cartItemLenght } = useContext(CartItemLenghtProvider);

  const handleSignOut = async () => {
    try {
      await SiginOut().then(() => {
        alert("Yes User Signed Out");
      });
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    const docRef = doc(db, "users", `${user?.email}`);
    const getUserData = async () => {
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        console.log("User Data", docSnap?.data()?.UserData);
        setUserName(docSnap?.data()?.UserData?.name);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    };
    getUserData();
  }, [user?.email]);

  console.log(cartItemLenght);

  return (
    <div className="flex overflow-hidden fixed top-0 z-20  w-full items-center justify-between bg-slate-800 text-white font-bold px-5 h-[5rem] uppercase   ">
      {/* logo */}
      <div className="text-sm">
        <Link to="/">markethub.com</Link>
      </div>
      {/* logo */}
      {/* search */}
      <div>
        <Search />
      </div>
      {/* search */}
      {/* Account&Favorite or MyCart */}
      <div>
        {user?.email ? (
          <div className="hidden  items-center  sm:block">
            <button
              className="ml-2 bg-slate-900 px-4 py-3 rounded-2xl hover:bg-white hover:text-slate-900 hover:scale-110 duration-300  "
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        ) : (
          <Link to="/signin">
            <button className="ml-2 bg-slate-900 px-4 py-3 rounded-2xl hover:bg-white hover:text-slate-900 hover:scale-110 duration-300  ">
              Sign In
            </button>
          </Link>
        )}
      </div>
      <div className="flex items-center">
        <div className="hidden cursor-pointer mr-4  items-center  lg:block  ">
          <p className="ml-3 mb-[-1] ">{cartItemLenght}</p>
          <Link to="/cart">
            <div className="flex items-center hover:text-gray-200 mb-4">
              <div>
                <AiOutlineShoppingCart size={30} />
              </div>
              <div className="m-2">Mycart</div>
            </div>
          </Link>
        </div>
        <Link to="/account">
          <div className="cursor-pointer text-center flex items-center hover:text-gray-200 ">
            <div>
              <CgProfile size={35} />
            </div>
            <div>
              <p className="hidden md:block text-sm capitalize  ml-2 ">
                {userName}
              </p>
            </div>
          </div>
        </Link>
      </div>
      {/* Account&Favorite or MyCart */}
    </div>
  );
};

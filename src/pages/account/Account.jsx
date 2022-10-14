import { doc, getDoc } from "firebase/firestore";
import React, { useContext, useLayoutEffect, useState } from "react";
import { AuthContextProvider } from "../../context/auth/AuthContext";
import { db } from "../../firebase/Firebase";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Account = () => {
  const { user } = useContext(AuthContextProvider);
  const [userName, setUserName] = useState("");

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


  return (
    <div className="mt-24 mb-[10%] ">
      <div className="text-center p-5">
        <div>
          <p className="font-bold text-5xl ">
            Hi <span className="capitalize"> {userName}</span>
          </p>
        </div>
        <div className="mt-5 text-2xl font-bold">
          <div>
            <p>
              Need To Add More Features In The Future @14-10-2022/05:04
              PM/completed
            </p>
          </div>
        </div>
        <div className="mt-16">
          <Link to="/cart">
            <button className="text-blue-500">
              <BsFillCartFill size={65} />
            </button>
          </Link>
        </div>
        <div>
          Go To Cart
        </div>
      </div>
    </div>
  );
};

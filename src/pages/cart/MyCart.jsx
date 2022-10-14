import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import React, { useContext, useLayoutEffect, useState } from "react";
import { FavoriteCard } from "../../components/cards/FavoriteCard";
import { AuthContextProvider } from "../../context/auth/AuthContext";
import { CartItemLenghtProvider } from "../../context/CartCountContext";
import { db } from "../../firebase/Firebase";

export const MyCart = () => {
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const { user } = useContext(AuthContextProvider);
  const { setCartItemLenght } = useContext(CartItemLenghtProvider);

  console.log(favoriteProducts.length);
  setCartItemLenght(favoriteProducts.length);

  const myCartPath = doc(db, "users", `${user?.email}`);
  useLayoutEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setFavoriteProducts(doc.data()?.FavoriteContent);
    });
  }, [user?.email]);

  const func = async (passId) => {
    try {
      const result = favoriteProducts.filter((items) => items.id !== passId);
      await updateDoc(myCartPath, {
        FavoriteContent: result,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="  bg-slate-200 text-center  ">
      <div className="py-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3   ">
        <h1 className="font-bold text-2xl text-slate-800 my-3 ">My Cart</h1>
        {favoriteProducts &&
          favoriteProducts.map((items, index) => {
            return <FavoriteCard items={items} key={index} func={func} />;
          })}
      </div>
    </div>
  );
};

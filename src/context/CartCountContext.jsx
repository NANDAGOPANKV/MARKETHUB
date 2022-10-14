import React, { createContext, useState } from "react";

export const CartItemLenghtProvider = createContext();
export const CartCountContext = ({ children }) => {
  const [cartItemLenght, setCartItemLenght] = useState();

  return (
    <CartItemLenghtProvider.Provider
      value={{ cartItemLenght, setCartItemLenght }}
    >
      {children}
    </CartItemLenghtProvider.Provider>
  );
};

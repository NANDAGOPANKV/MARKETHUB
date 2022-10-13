import React, { createContext, useState } from "react";

export const GetIdContext = createContext();
export const MyCartIdContext = ({ children }) => {
  const [cartID, setCartID] = useState("");

  return (
    <GetIdContext.Provider value={{ cartID, setCartID }}>
      {children}
    </GetIdContext.Provider>
  );
};

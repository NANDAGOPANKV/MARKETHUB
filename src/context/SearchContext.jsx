import React, { createContext, useState } from "react";

export const SearchItemContext = createContext();

export const SearchContext = ({ children }) => {
  const [searchCoin, setSearchCoin] = useState("");

  return (
    <SearchItemContext.Provider value={{ setSearchCoin, searchCoin }}>
      {children}
    </SearchItemContext.Provider>
  );
};

import React, { useContext } from "react";
import { SearchItemContext } from "../../context/SearchContext";

export const Search = () => {
  const { setSearchCoin, searchCoin } = useContext(SearchItemContext);

  return (
    <div>
      <input
        value={searchCoin}
        onChange={(e) => setSearchCoin(e.target.value)}
        type="text"
        className="text-black max-w-[35vw] rounded-xl px-1 outline-none shadow-xl hover:shadow-slate-800  sm:max-w-[100vw] sm:px-2 sm:py-3 "
        placeholder="Find A Product"
      />
    </div>
  );
};

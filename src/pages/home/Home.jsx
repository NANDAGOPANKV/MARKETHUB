import React, { useContext, useLayoutEffect, useState } from "react";
import { options } from "../../URL";
import axios from "axios";
import { Cards } from "../../components/cards/Cards";

//search contex;
import { SearchItemContext } from "../../context/SearchContext";

export const Home = () => {
  const [electronicsProducts, setElectronicsProducts] = useState([]);
  const { searchCoin } = useContext(SearchItemContext);
  const [lader, setLader] = useState(false);

  useLayoutEffect(() => {
    setLader(true);
    axios
      .get(options)
      .then((res) => {
        setElectronicsProducts(res.data.slice(0, 16));
      })
      .catch((err) => {
        console.log(err.message);
      });
    setLader(false);
  }, []);

 

  return lader ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "82vh",
      }}
    >
      <h1 className="text-black font-bold">Loding...</h1>
    </div>
  ) : (
    <div>
      <div className=" grid sm:grid-cols-2  py-4  md:grid-cols-3 lg:grid-cols-4 flex-col bg-slate-200  h-[81vh]  ">
        {/* card and search */}
        {electronicsProducts &&
          electronicsProducts
            .filter((items) => {
              if (searchCoin === "") {
                return items;
              } else if (
                items.category.name
                  .toLowerCase()
                  .includes(searchCoin.toLowerCase())
              ) {
                return items;
              }
              return null;
            })
            .map((items, index) => {
              return <Cards key={index} items={items} />;
            })}
        {/* card and search */}
      </div>
    </div>
  );
};

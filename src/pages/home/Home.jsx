import React, { useContext, useLayoutEffect, useState } from "react";
import { options } from "../../URL";
import axios from "axios";
import { Cards } from "../../components/cards/Cards";

//search contex;
import { SearchItemContext } from "../../context/SearchContext";

export const Home = () => {
  const [electronicsProducts, setElectronicsProducts] = useState([]);
  const { searchCoin } = useContext(SearchItemContext);
  const [loder, setLoder] = useState(false);

  useLayoutEffect(() => {
    setLoder(true);
    axios
      .get(options)
      .then((res) => {
        setElectronicsProducts(res.data.slice(0, 16));
      })
      .catch((err) => {
        console.log(err.message);
      });
    setLoder(false);
  }, []);

  return loder === true ? (
    <div>
      <h1 className="text-black font-bold">Loding...</h1>
    </div>
  ) : (
    <div className="mt-20 z-10  min-h-[62vh]">
      <div className=" grid sm:grid-cols-2 pt-4  md:grid-cols-3 lg:grid-cols-4   ">
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

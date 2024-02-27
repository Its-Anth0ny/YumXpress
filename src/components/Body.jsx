import ResCard from "./ResCard";
// import { resObj } from "../utils/demoData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.95250&lng=75.71050&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();
    // console.log(jsonData);
    //optional chaining
    setResList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setSearchList(
        jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

  };

  const [inputValue, setInputValue] = useState("");

  //Conditional Rendering
  if (resList.length === 0) {
    // return <h1>Loading...</h1>;
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filterContainer">
        <div className="search">
          <input
            type="text"
            className="searchBox"
            value={inputValue}
            onChange={(e) => {
                setInputValue(e.target.value);
            }}
          />
          <button className="searchBtn" 
            onClick={() => {
                setSearchList(resList.filter((restaurant)=> {
                    return restaurant.info.name.toLowerCase().includes(inputValue.toLowerCase());
                }));
            }}
          >
            Search
          </button>
        </div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const newresObj = searchList.filter(
                (res) => res.info.avgRating > 4.2
              );
              setSearchList(newresObj);
            }}
          >
            Top 4⭐ Restaurants
          </button>
        </div>
      </div>
      <div className="resContainer">
        {searchList.map((restaurant) => (
          <ResCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

import ResCard from "./ResCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RES_LINK } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

function Body() {
    const [resList, setResList] = useState(null);
    const [searchList, setSearchList] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const onlineCheck = useOnlineStatus();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(RES_LINK);
        const jsonData = await data.json();
        //optional chaining
        setResList(
            jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
        );
        setSearchList(
            jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
        );
    };

    //Conditional Rendering
    if (resList === null) {
        // return <h1>Loading...</h1>;
        return <Shimmer />;
    }

    if (onlineCheck === false) {
        return <h1>Check if you are using College Wifi...</h1>;
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
                    <button
                        className="searchBtn"
                        onClick={() => {
                            setSearchList(
                                resList.filter((restaurant) => {
                                    return restaurant.info.name
                                        .toLowerCase()
                                        .includes(inputValue.toLowerCase());
                                })
                            );
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
                                (res) => res.info.avgRating > 4.0
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
                    <Link
                        key={restaurant.info.id}
                        to={"restaurant/" + restaurant.info.id}
                    >
                        <ResCard resData={restaurant} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Body;

import ResCard from "./ResCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RES_LINK } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import useResData from "../utils/useResData";
import { Search } from "lucide-react";

const Body = () => {
    const resList = useResData();
    // const [resList, setResList] = useState(null);
    const [searchList, setSearchList] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const onlineCheck = useOnlineStatus();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(RES_LINK);
        const jsonData = await data.json();
        // setResList(
        //     jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        //         ?.restaurants
        // );
        setSearchList(
            jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
        );
    };

    //Conditional Rendering
    if (resList === null) {
        return <Shimmer />;
    }

    if (onlineCheck === false) {
        return <h1>Check if you are using College Wifi...</h1>;
    }

    return (
        <div className="">
            <div className="flex justify-between py-8 pl-[130px] pr-[110px]">
                <div className="flex justify-center items-center space-x-2">
                    <input
                        type="text"
                        placeholder="Search for Restaurants..."
                        className="h-[40px] max-w-[250px] bg-gray-100 border-2 border-solid border-grey-300 rounded-3xl pl-4 pr-6"
                        value={inputValue}
                        onChange={(e) => {
                            setInputValue(e.target.value);
                        }}
                    />
                    <button
                        className=""
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
                        <Search className="size-7 width-[4px]" />
                    </button>
                </div>
                <div className="flex justify-center items-center space-x-4">
                    <button
                        className="h-[40px] bg-yellow-100 hover:bg-yellow-200 border-2 border-solid border-yellow-500 rounded-2xl px-[10px]"
                        onClick={() => {
                            const newresObj = searchList.filter(
                                (res) => res.info.avgRating > 4.0
                            );
                            setSearchList(newresObj);
                        }}
                    >
                        Top 4⭐ Restaurants
                    </button>
                    <button
                        className="h-[40px] bg-yellow-100 hover:bg-yellow-200 border-2 border-solid border-yellow-500 rounded-2xl px-[10px]"
                        onClick={() => {
                            const newresObj = searchList.filter(
                                (res) => res.info.avgRating > 4.0
                            );
                            setSearchList(newresObj);
                        }}
                    >
                        Veg Only
                    </button>
                    <button
                        className="h-[40px] bg-yellow-100 hover:bg-yellow-200 border-2 border-solid border-yellow-500 rounded-2xl px-[10px]"
                        onClick={() => {
                            const newresObj = searchList.filter(
                                (res) => res.info.avgRating > 4.0
                            );
                            setSearchList(newresObj);
                        }}
                    >
                        Fast Delivery
                    </button>
                </div>
            </div>
            <div className="h-100% w-100% flex flex-wrap justify-center items-center">
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
};

export default Body;

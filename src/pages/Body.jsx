import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import ResCard from "../components/ResCard";
import Shimmer from "../components/Shimmer";
import { RES_LINK } from "../utils/constants";
import useDebounce from "../utils/hooks/useDebounce";
// import useOnlineStatus from "../utils/useOnlineStatus";
// import useResData from "../utils/useResData";

const Body = () => {
    const [resList, setResList] = useState([]);
    const [searchList, setSearchList] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const debounceValue = useDebounce(resList, 1000);
    const [initalRender, setInitialRender] = useState(true);
    // const onlineCheck = useOnlineStatus();

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const data = await fetch(
                "https://thingproxy-760k.onrender.com/fetch/" + RES_LINK
            );
            const jsonData = await data.json();
            const restaurantData =
                jsonData?.data?.cards[1]?.card?.card?.gridElements
                    ?.infoWithStyle?.restaurants || [];
            // Set both resList and searchList with the fetched data
            setResList(restaurantData);
            setSearchList(restaurantData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        if (!initalRender) {
            // console.log("Debounce Value:");
            handleSearch();
        } else {
            setInitialRender(false);
        }
    }, [debounceValue]);

    const handleSearch = () => {
        const filteredList = resList.filter((restaurant) => {
            return restaurant.info.name
                .toLowerCase()
                .includes(inputValue.toLowerCase());
        });
        setSearchList(filteredList);
    };

    if (searchList.length === 0) {
        return <Shimmer />;
    }

    // if (onlineCheck === false) {
    //     return <h1>Check if you are using College Wifi...</h1>;
    // }

    return (
        <div className="w-full h-full">
            <div className="flex justify-between py-8 pl-[130px] pr-[110px]">
                <div className="flex items-center justify-center space-x-2">
                    <input
                        type="text"
                        placeholder="Search for Restaurants..."
                        className="h-[40px] max-w-[250px] bg-gray-100 border-2 border-solid border-grey-300 rounded-3xl pl-4 pr-6"
                        value={inputValue}
                        onChange={(e) => {
                            setInputValue(e.target.value);
                        }}
                    />
                    <button className="" onClick={() => handleSearch()}>
                        <Search className="size-7 width-[4px]" />
                    </button>
                </div>
                <div className="flex items-center justify-center space-x-4">
                    <button
                        className="text-sm shadow-sm bg-gray-200 hover:bg-gray-300 rounded-md p-[8px]"
                        onClick={() => {
                            setSearchList(resList);
                        }}
                    >
                        Reset
                    </button>
                    <button
                        className="text-sm shadow-sm bg-gray-200 hover:bg-gray-300 rounded-md p-[8px]"
                        onClick={() => {
                            const newresObj = resList.filter(
                                (res) => res?.info?.avgRating >= 4.5
                            );
                            setSearchList(newresObj);
                        }}
                    >
                        Above 4.5⭐
                    </button>
                    <button
                        className="text-sm shadow-sm bg-gray-200 hover:bg-gray-300 rounded-md p-[8px]"
                        onClick={() => {
                            const newresObj = resList.filter(
                                (res) => res?.info?.sla?.deliveryTime <= 45
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

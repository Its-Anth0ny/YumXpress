import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ResCard from "../components/ResCard";
import Shimmer from "../components/Shimmer";
import { PROXY_URL } from "../utils/constants";
import useDebounce from "../utils/hooks/useDebounce";
import { isMobile } from "react-device-detect";
import ErrorPage from "../utils/ErrorPage";
import { useLocation } from "../utils/hooks/useLocation";
// import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [resList, setResList] = useState([]);
    const [searchList, setSearchList] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const debounceValue = useDebounce(inputValue, 500);
    const [initalRender, setInitialRender] = useState(true);
    const [swiggyActive, setSwiggyActive] = useState(true);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const { currentLocation } = useLocation();
    const navigate = useNavigate();
    // const onlineCheck = useOnlineStatus();

    const fetchData = async (currentLocation) => {
        try {
            const RES_URL = isMobile
                ? `https://www.swiggy.com/mapi/homepage/getCards?lat=${currentLocation.latitude}&lng=${currentLocation.longitude}`
                : `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${currentLocation.latitude}&lng=${currentLocation.longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;
            const response = await fetch(PROXY_URL + RES_URL);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const jsonData = await response.json();

            // console.log(jsonData);

            const cards = isMobile
                ? jsonData.data.success.cards
                : jsonData.data.cards;

            const locUnavailable = isMobile
                ? cards.find(
                      (card) =>
                          card.gridWidget &&
                          card.gridWidget.gridElements &&
                          card.gridWidget.gridElements.infoWithStyle[
                              "@type"
                          ] ===
                              "type.googleapis.com/swiggy.seo.widgets.v1.SwiggyNotPresent"
                  )
                : cards.find(
                      (card) =>
                          card.card &&
                          card.card.card &&
                          card.card.card["@type"] ===
                              "type.googleapis.com/swiggy.seo.widgets.v1.SwiggyNotPresent"
                  );

            if (locUnavailable !== undefined) {
                setSwiggyActive(false);
                return;
            }
            const restaurantData = isMobile
                ? jsonData?.data?.success?.cards[1]?.gridWidget?.gridElements
                      ?.infoWithStyle?.restaurants || []
                : jsonData?.data?.cards[1]?.card?.card?.gridElements
                      ?.infoWithStyle?.restaurants || [];
            setResList(restaurantData);
            setSearchList(restaurantData);
        } catch (error) {
            console.error("Error fetching data:", error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = () => {
        const filteredList = resList.filter((restaurant) => {
            return restaurant.info.name
                .toLowerCase()
                .includes(inputValue.toLowerCase());
        });
        setSearchList(filteredList);
    };

    useEffect(() => {
        if (currentLocation === null) {
            navigate("/");
        } else {
            fetchData(currentLocation);
        }
    }, [currentLocation, navigate]);

    useEffect(() => {
        if (!initalRender) {
            handleSearch();
        } else {
            setInitialRender(false);
        }
    }, [debounceValue]);

    if (loading) {
        return <Shimmer />;
    }

    if (error) {
        return <ErrorPage message={error} />;
    }

    if (!swiggyActive) {
        return <ErrorPage message="Swiggy is not active in your location" />;
    }

    // if (onlineCheck === false) {
    //     return <h1>Check if you are using College Wifi...</h1>;
    // }

    return (
        <div className="w-full h-full">
            <div className="flex items-center justify-between py-8 pl-[110px] pr-[110px] max-lg:pl-[50px] max-lg:pr-[50px] max-md:flex-col max-md:space-y-4 max-md:px-4 max-md:pt-4 max-md:pb-0">
                {/* <div className="flex items-center w-full space-x-2 justify-left">
                    <button className="" onClick={() => handleSearch()}>
                        <Search className="size-7 width-[4px]" />
                    </button>
                </div> */}
                <input
                    type="text"
                    placeholder="Search for Restaurants..."
                    className="h-[40px] max-w-[320px] w-full bg-gray-100 border-2 border-solid border-grey-300 rounded-3xl pl-4 max-md:text-sm max-md:h-[35px]"
                    value={inputValue}
                    onChange={(e) => {
                        setInputValue(e.target.value);
                    }}
                />
                <div className="flex items-center justify-center space-x-4 max-md:space-x-5">
                    <button
                        className="text-sm shadow-sm bg-gray-200 hover:bg-gray-300 rounded-md p-2 max-md:text-[12px] max-md:px-2 max-md:py-1"
                        onClick={() => {
                            setSearchList(resList);
                        }}
                    >
                        Reset
                    </button>
                    <button
                        className="text-sm shadow-sm bg-gray-200 hover:bg-gray-300 rounded-md p-2 max-md:text-[12px] max-md:px-2 max-md:py-1"
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
                        className="text-sm shadow-sm bg-gray-200 hover:bg-gray-300 rounded-md p-2 max-md:text-[12px] max-md:px-2 max-md:py-1"
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
                {searchList.length === 0 ? (
                    <div className="object-cover w-full max-w-[500px]">
                        <img src="noresult.jpg" alt="" />
                    </div>
                ) : (
                    searchList.map((restaurant) => (
                        <Link
                            key={restaurant.info.id}
                            to={"restaurant/" + restaurant.info.id}
                        >
                            <ResCard resData={restaurant} />
                        </Link>
                    ))
                )}
            </div>
        </div>
    );
};

export default Body;

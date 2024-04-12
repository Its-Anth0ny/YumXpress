import { RES_LINK } from "../constants";
import { useEffect, useState } from "react";

const useResData = () => {
    const [resList, setResList] = useState(null);
    useEffect(() => {
        fetchData();
    }, []);
    async function fetchData() {
        const url = RES_LINK;
        const data = await fetch(url);
        const jsonData = await data.json();

        setResList(
            jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
        );
    }
    return resList;
};

export default useResData;

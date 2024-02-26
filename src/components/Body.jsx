import ResCard from "./ResCard";
import { resObj } from "../utils/demoData";
import { useState } from "react";

const Body = () => {

    const [resList, setResList] = useState(resObj);

    return (
        <div className="body">
            <div className="search"> Search </div>
            <div className="filter">
                
                <button 
                    className="filter-btn"
                    onClick={()=>{
                        const newresObj = resList.filter((res) => res.info.avgRating > 4.0);
                        setResList(newresObj);
                    }}
                >
                    Top 4⭐ Restaurants
                </button>
            </div>
            <div className="resContainer">
                {
                    resList.map(restaurant => <ResCard key={restaurant.info.id} resData={restaurant}/>)
                }
            </div>
        </div>
    )
}

export default Body;
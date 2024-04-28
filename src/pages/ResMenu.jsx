import { useState } from "react";
import { useParams } from "react-router-dom";
import useMenuData from "../utils/hooks/useMenuData";
import { ResMenuShimmer } from "../components/Shimmer";
import Accordian from "../components/Accordian";

const ResMenu = () => {
    const resMenuId = useParams();
    const menuData = useMenuData(resMenuId);
    const [openIndex, setOpenIndex] = useState(0);
    const {
        id,
        name,
        costForTwoMessage,
        avgRating,
        cloudinaryImageId,
        cuisines,
    } = menuData?.data?.cards[2]?.card?.card?.info ?? {};

    const handleIsOpen = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    if (menuData === null) return <ResMenuShimmer />;

    const categories =
        menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (c) =>
                c.card?.card?.["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
    // console.log(categories);
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-col items-center w-8/12 ">
                <div className="flex flex-col items-center justify-center px-8 py-2 mt-6 mb-4 space-y-2 border-yellow-300 border-solid border-x-4 border-y-2 rounded-2xl">
                    <h1 className="text-2xl font-semibold">{name}</h1>
                    <h3 className="text-sm">
                        {avgRating + "⭐"}, {costForTwoMessage}
                    </h3>
                    <h3 className="flex">
                        <p className="px-1 font-semibold">Cuisines:</p>
                        {cuisines.join(", ")}
                    </h3>
                </div>
                <img src="/menu.png" alt="menu" className="w-[190px] my-3" />
                {categories.map((curr, index) => {
                    // console.log(curr);
                    return (
                        <div
                            key={index}
                            className="flex items-center justify-center w-full"
                        >
                            <Accordian
                                curr={curr}
                                index={index}
                                resData={{
                                    id: id,
                                    name: name,
                                    costForTwoMessage: costForTwoMessage,
                                    avgRating: avgRating,
                                    cloudinaryImageId: cloudinaryImageId,
                                    cuisines: cuisines,
                                }}
                                isOpen={openIndex === index}
                                handleIsOpen={handleIsOpen}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ResMenu;

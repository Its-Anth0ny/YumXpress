import { useState } from "react";
import { useParams } from "react-router-dom";
import useMenuData from "../utils/hooks/useMenuData";
import ResItems from "../components/ResItems";
import { ChevronDown } from "lucide-react";
import { ResMenuShimmer } from "../components/Shimmer";

const ResMenu = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const resMenuId = useParams();
    // console.log(resMenuId);

    const menuData = useMenuData(resMenuId);

    // useEffect(() => {
    //     fetchMenu();
    // }, []);

    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_API + resMenuId.resId);
    //     const json = await data.json();
    //     // console.log(json);
    //     setMenuData(json);
    // };

    if (menuData === null) return <ResMenuShimmer />;

    const { name, costForTwoMessage, avgRating, cuisines } =
        menuData?.data?.cards[2]?.card?.card?.info ?? {};

    // const { itemCards } =
    //     menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
    //         ?.card?.card;

    const categories =
        menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (c) =>
                c.card?.card?.["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
    console.log(categories);

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="w-8/12 flex flex-col items-center">
                <div className="py-2 px-8 mt-6 mb-4 flex flex-col justify-center items-center space-y-2 border-solid border-x-4 border-y-2 border-yellow-300 rounded-2xl">
                    <h1 className="text-2xl font-semibold">{name}</h1>
                    <h3 className="text-sm">
                        {avgRating + "⭐"}, {costForTwoMessage}
                    </h3>
                    <h3 className="flex">
                        <p className="font-semibold px-1">Cuisines:</p>
                        {cuisines.join(", ")}
                    </h3>
                </div>
                <img src="/menu.png" alt="menu" className="w-[190px] my-3" />
                {categories.map((curr, index) => (
                    <div
                        key={index}
                        className="w-full max-w-md bg-white rounded-lg overflow-hidden hover:shadow-xl shadow-md my-4"
                    >
                        <div>
                            <div
                                className="bg-yellow-200 py-4 px-6 cursor-pointer flex justify-between"
                                onClick={
                                    () =>
                                        setOpenIndex(
                                            openIndex === index ? null : index
                                        ) //logic = (setting null if already open, else set the index)
                                }
                            >
                                <span className="text-lg font-semibold">
                                    {curr?.card?.card?.title +
                                        " (" +
                                        curr?.card?.card?.itemCards?.length +
                                        ")"}
                                </span>
                                <span>
                                    <ChevronDown
                                        size={24}
                                        className={
                                            openIndex === index
                                                ? "rotate-180"
                                                : ""
                                        }
                                    />
                                </span>
                            </div>
                            {openIndex === index && (
                                <div className="accordion-content bg-yellow-100 py-4 px-6">
                                    <ResItems
                                        data={curr?.card?.card?.itemCards}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResMenu;

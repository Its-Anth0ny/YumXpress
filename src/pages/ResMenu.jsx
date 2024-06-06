import { useState } from "react";
import { useParams } from "react-router-dom";
import useMenuData from "../utils/hooks/useMenuData";
import { ResMenuShimmer } from "../components/Shimmer";
import Accordian from "../components/Accordian";
import ErrorPage from "../utils/ErrorPage";

const ResMenu = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const resMenuId = useParams();
    const { menuData, res, error, loading } = useMenuData(resMenuId);

    if (loading)
        return (
            <div className="flex justify-center w-screen">
                <ResMenuShimmer />
            </div>
        );
    if (error) return <ErrorPage message={error} />;

    const {
        id,
        name,
        costForTwoMessage,
        avgRating,
        cloudinaryImageId,
        cuisines,
    } = res || {};

    const handleIsOpen = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col items-center justify-center px-4">
            <div className="flex flex-col items-center w-full">
                <div className="flex flex-col items-center justify-center px-8 py-2 mt-6 mb-4 space-y-2 overflow-hidden border-yellow-300 border-solid border-x-4 border-y-2 rounded-2xl max-md:px-4 min-w-[400px] max-md:min-w-[275px]">
                    <h1 className="text-2xl font-semibold max-md:text-[18px] w-full truncate text-center">
                        {name}
                    </h1>
                    <h3 className="text-sm">
                        {avgRating ? `${avgRating}⭐, ` : ""}
                        {costForTwoMessage}
                    </h3>
                    {cuisines && (
                        <h3 className="flex overflow-hidden">
                            <p className="px-1 font-semibold ">Cuisines:</p>
                            <p className="w-full truncate">
                                {cuisines.join(", ")}
                            </p>
                        </h3>
                    )}
                </div>
                <img
                    src="/menu.png"
                    alt="menu"
                    className="w-[190px] my-3 max-sm:my-2"
                />
                {menuData.map((curr, index) => (
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
                ))}
            </div>
        </div>
    );
};

export default ResMenu;

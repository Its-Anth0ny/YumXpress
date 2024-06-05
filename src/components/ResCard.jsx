import { CDN_LINK } from "../utils/constants";
import { Timer } from "lucide-react";

const ResCard = (props) => {
    const { resData } = props;

    return (
        <div className="w-[250px] h-[310px] max-lg:w-[200px] max-lg:h-[275px] max-md:w-[170px] max-smx:w-[150px] max-smx:h-[200px] max-md:h-[210px] rounded overflow-hidden shadow-sm my-6 mx-4 max-md:mx-2 max-md:my-4 max-smx:mx-1 bg-white hover:shadow-2xl transition-shadow duration-300">
            <img
                className="object-cover object-center w-full h-48 max-lg:h-36 max-md:h-24 max-smx:h-22"
                src={CDN_LINK + resData.info.cloudinaryImageId}
                alt={resData.info.name}
            />
            <div className="flex flex-col justify-between px-4 pt-4 max-md:px-2 max-smx:pt-3">
                <div className="mb-2 space-y-2 max-md:mb-0">
                    <h4 className="text-xl font-semibold text-gray-800 truncate max-md:text-lg max-smx:text-[15px]">
                        {resData.info.name}
                    </h4>
                    <p className="w-full h-6 text-sm text-gray-600 truncate max-smx:text-[12px]">
                        {resData.info.cuisines.join(", ")}
                    </p>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <p className="text-sm text-yellow-600 max-smx:text-[12px]">
                            {resData.info.avgRating} ⭐
                        </p>
                    </div>
                    <p className="flex items-center text-sm text-gray-600 max-smx:text-[12px]">
                        <Timer size={16} className="mr-1" />
                        {resData.info.sla.deliveryTime} mins
                    </p>
                </div>
            </div>
        </div>
    );
};

// export const WithProLabel = (ResCard) => {
//     return () => {
//         return (
//             <div>
//                 <p className="p-3 bg-orange-200">P</p>
//                 <ResCard pro/>
//             </div>
//         );
//     };
// };

export default ResCard;

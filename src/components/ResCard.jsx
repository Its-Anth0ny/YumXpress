import { CDN_LINK } from "../utils/constants";
import { Timer } from "lucide-react";

const ResCard = (props) => {
    const { resData } = props;

    return (
        <div className="w-[250px] h-[350px] rounded overflow-hidden shadow-lg my-5 mx-3 bg-[#FFF3CF] hover:shadow-2xl">
            <img
                className="w-full h-48 object-cover object-center"
                src={CDN_LINK + resData.info.cloudinaryImageId}
                alt={resData.info.name}
            />
            <div className="h-[158px] px-6 pt-4 pb-6 flex flex-col justify-between">
                <div className="mb-2">
                    <h4 className="text-lg font-semibold text-gray-800">
                        {resData.info.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                        {resData.info.cuisines.slice(0, 3).join(", ")}
                    </p>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-yellow-600 mr-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 1a1 1 0 00-.95.737l-3.19 11.22-9.343 3.34a1 1 0 00-.118 1.74l7.733 5.24-2.948 9.098a1 1 0 001.532 1.065l8.186-5.188 8.2 5.188a1 1 0 001.532-1.065l-2.947-9.098L20 12.737 10.95 1.737A1 1 0 0010 1zM2.78 16.823l2.72-8.4 7.6 2.712-7.68 2.688-.64 2.2zM7 4.602l2.573 9.031 6.04-4.15-7.574-5.112L7 4.602zm9.868 10.054l-7.653-4.847 1.16-3.22 6.493 7.58-7.587 5.004 2.847-8.785 1.46 4.268 4.727 3.007z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <p className="text-sm text-yellow-600">
                            {resData.info.avgRating} ⭐
                        </p>
                    </div>
                    <p className="text-sm text-gray-600 flex items-center">
                        <Timer size={16} className="mr-1" />
                        {resData.info.sla.deliveryTime} mins
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ResCard;

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

// export default ResCard;

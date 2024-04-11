import { CDN_LINK } from "../utils/constants";
// import Timer from "lucide-react";

const ResCard = (props) => {
    const { resData } = props;
    return (
        <div className="h-[350px] w-[300px] flex flex-col justify-center items-center mx-[15px] my-[20px] bg-red-50 rounded-2xl border-2 border-solid border-red-200 hover:shadow-2xl">
            <div className="">
                <img
                    className="h-[180px] w-[250px] object-cover rounded-2xl "
                    src={CDN_LINK + resData.info.cloudinaryImageId}
                />
            </div>
            <div className="w-full flex flex-col justify-start px-8 mt-3">
                <div className="h-[79px]">
                    <h4 className="text-[18px] font-semibold">
                        {resData.info.name}
                    </h4>
                    <h4 className="text-[14px]">
                        {resData.info.cuisines.slice(0, 3).join(", ")}
                    </h4>
                </div>
                <div className="flex justify-between py-[5px]">
                    <h4 className="bg-red-200 py-1 px-2 rounded-md">
                        {resData.info.avgRating + "⭐"}
                    </h4>
                    <h4 className="bg-red-200 py-1 px-2 rounded-md">
                        {resData.info.sla.deliveryTime + " mins"}
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default ResCard;

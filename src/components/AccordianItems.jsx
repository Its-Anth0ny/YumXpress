import { CDN_LINK } from "../utils/constants";
import { Toaster } from "sonner";
import AddButton from "./AddButton";

const AccordianItems = ({ item, resData }) => {
    return (
        <div className="max-w-[800px] w-full">
            <div className="flex items-center justify-between w-full gap-4 p-4 my-4 border-b-2 border-yellow-400 border-solid max-sm:pb-3 max-sm:pt-0 max-sm:px-2">
                <div className="flex flex-col w-8/12 max-h-[120px]">
                    <span className="w-full h-full line-clamp-2">
                        {item?.name}
                    </span>
                    <span className="mt-1 font-mono text-sm font-bold text-gray-600">
                        {"₹"}
                        {item?.defaultPrice
                            ? item?.defaultPrice / 100.0
                            : item?.price / 100.0}
                    </span>
                </div>
                <div className="w-[100px] h-[100px] relative flex justify-center max-sm:w-[90px] max-sm:h-[80px]">
                    <img
                        src={item?.imageId ? CDN_LINK + item?.imageId : null}
                        alt={null}
                        className="object-cover object-center w-full rounded-lg shadow-lg"
                    ></img>

                    <Toaster richColors />

                    <AddButton itemData={item} resData={resData} />
                </div>
            </div>
        </div>
    );
};

export default AccordianItems;

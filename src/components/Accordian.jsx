import AccordianItems from "./AccordianItems";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const Accordian = ({ curr, key, resData }) => {
    const [openIndex, setOpenIndex] = useState(null);
    const { itemCards } = curr?.card?.card ?? {};
    // console.log(itemCards);
    return (
        <div className="w-full max-w-[600px] my-4 overflow-hidden bg-white rounded-lg shadow-md hover:shadow-xl">
            <div>
                <div
                    className="flex justify-between px-6 py-4 bg-yellow-200 cursor-pointer"
                    onClick={
                        () => setOpenIndex(openIndex === key ? null : key) //logic = (setting null if already open, else set the key)
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
                            className={openIndex === key ? "rotate-180" : ""}
                        />
                    </span>
                </div>
                {openIndex === key && (
                    <div className="px-6 py-4 bg-yellow-100">
                        {itemCards.map((item) => {
                            return (
                                <AccordianItems
                                    key={item?.card?.info?.id}
                                    item={item?.card?.info}
                                    resData={resData}
                                />
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Accordian;

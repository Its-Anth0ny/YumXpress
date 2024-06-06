import AccordianItems from "./AccordianItems";
import { ChevronDown } from "lucide-react";

const Accordian = ({ curr, index, resData, isOpen, handleIsOpen }) => {
    const { itemCards } = curr?.card?.card ?? {};
    return (
        <div className="w-full max-w-[600px] my-4 overflow-hidden rounded-lg shadow-md hover:shadow-xl">
            <div>
                <div
                    className="flex justify-between px-6 py-4 overflow-hidden bg-yellow-200 cursor-pointer max-md:px-4 max-md:py-3"
                    onClick={() => handleIsOpen(index)}
                >
                    <span className="w-full text-lg font-semibold truncate max-md:text-base">
                        {curr?.card?.card?.title +
                            " (" +
                            itemCards?.length +
                            ")"}
                    </span>
                    <span>
                        <ChevronDown
                            size={24}
                            className={`transition-transform duration-300 ${
                                isOpen ? "rotate-180" : ""
                            }`}
                        />
                    </span>
                </div>
                {isOpen && (
                    <div className="px-6 py-4 bg-yellow-100 max-sm:px-2 max-sm:py-1">
                        {itemCards.map((item) => (
                            <AccordianItems
                                key={item?.card?.info?.id}
                                item={item?.card?.info}
                                resData={resData}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Accordian;

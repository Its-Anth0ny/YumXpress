import AccordianItems from "./AccordianItems";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const Accordian = ({ curr, index, resData, isOpen, handleIsOpen }) => {
    const { itemCards } = curr?.card?.card ?? {};
    // console.log(itemCards);
    return (
        <div className="w-full max-w-[600px] my-4 overflow-hidden bg-white rounded-lg shadow-md hover:shadow-xl">
            <div>
                <div
                    className="flex justify-between px-6 py-4 bg-yellow-200 cursor-pointer"
                    onClick={
                        () => handleIsOpen(index) //setOpenIndex(openIndex === index ? null : index) //logic = (setting null if already open, else set the index)
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
                            className={isOpen ? "rotate-180" : ""}
                        />
                    </span>
                </div>
                {isOpen && (
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

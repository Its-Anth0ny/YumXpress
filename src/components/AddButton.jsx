import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { addItem, removeItem } from "../redux/cartSlice";

export default function AddButton({ itemData, resData }) {
    const dispatch = useDispatch();
    const cartResId = useSelector((store) => store.cart.resId);
    const items = useSelector((store) => store.cart.items);

    const resId = resData.id;
    const itemPrice = itemData.defaultPrice
        ? itemData.defaultPrice / 100
        : itemData.price / 100;

    const handleAddItem = (resId, itemData, resData, itemPrice) => {
        if (cartResId === null || cartResId === resId) {
            dispatch(addItem({ resId, itemData, resData, itemPrice }));
            toast.success("Item added in your cart.", {
                duration: 2000,
            });
        } else {
            toast.error("Your cart contains items from another restaurant.", {
                duration: 2000,
            });
        }
    };

    const handleRemoveItem = (itemData, itemPrice) => {
        if (cartResId === null || cartResId === resId) {
            dispatch(removeItem({ itemData, itemPrice }));
            toast("Item removed from your cart.", {
                className: "bg-red-200",
                duration: 2000,
            });
        } else {
            toast.error("Your cart contains items from another restaurant.", {
                duration: 2000,
            });
        }
    };

    const itemExists = items.some((item) => item.itemId === itemData.id);
    const existingItemIndex = items.findIndex(
        (item) => item.itemId === itemData.id
    );

    return (
        <div className="absolute flex items-center text-white bg-gray-800 rounded-md bottom-2 max-sm:text-sm">
            {!itemExists ? (
                <button
                    className="px-3 py-1 max-sm:py-1"
                    onClick={() =>
                        handleAddItem(resId, itemData, resData, itemPrice)
                    }
                >
                    ADD
                </button>
            ) : (
                <div className="flex items-center">
                    <button
                        className="pl-2 pr-1 max-sm:py-1"
                        onClick={() => handleRemoveItem(itemData, itemPrice)}
                    >
                        -
                    </button>
                    <span className="max-sm:px-1">
                        {items[existingItemIndex].count}
                    </span>
                    <button
                        className="py-1 pl-1 pr-2 max-sm:py-1"
                        onClick={() =>
                            handleAddItem(resId, itemData, resData, itemPrice)
                        }
                    >
                        +
                    </button>
                </div>
            )}
        </div>
    );
}

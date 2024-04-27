import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { addItem, removeItem } from "../redux/cartSlice";

export default function AddButton({ itemData, resData }) {
    // console.log(itemData, resData);
    const resId = resData.id;
    const itemPrice = itemData.defaultPrice
        ? itemData.defaultPrice / 100
        : itemData.price / 100;
    const dispatch = useDispatch();
    const cartResId = useSelector((store) => store.cart.resId);
    const items = useSelector((store) => store.cart.items);
    // console.log(cartResId, items);
    const handleAddItem = (resId, itemData, resData, itemPrice) => {
        if (cartResId === null || cartResId === resId) {
            dispatch(addItem({ resId, itemData, resData, itemPrice }));
            toast.success("Item added in your cart.", {
                duration: 2000,
            });
        } else {
            toast.error("Your cart contains items from other restaurant.", {
                duration: 2000,
            });
            return;
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
            toast.error("Your cart contains items from other restaurant.", {
                duration: 2000,
            });
            return;
        }
    };

    const itemExists = items.some((item) => item.itemId === itemData.id);

    const existingItemIndex = items.findIndex(
        (item) => item.itemId === itemData.id
    );

    return !itemExists ? (
        <>
            <button
                className="absolute px-3 py-1 text-white bg-gray-800 rounded-md bottom-2"
                onClick={() =>
                    handleAddItem(resId, itemData, resData, itemPrice)
                }
            >
                ADD
            </button>
        </>
    ) : (
        <div className="absolute py-1 text-white bg-gray-800 rounded-md cursor-pointer bottom-2">
            <span
                className="p-2"
                onClick={() => handleRemoveItem(itemData, itemPrice)}
            >
                -
            </span>
            <span>{items[existingItemIndex].count}</span>
            <span
                className="p-2"
                onClick={() =>
                    handleAddItem(resId, itemData, resData, itemPrice)
                }
            >
                +
            </span>
        </div>
    );
}

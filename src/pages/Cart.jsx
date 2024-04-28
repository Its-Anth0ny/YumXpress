import { useSelector } from "react-redux";
import AccordianItems from "../components/AccordianItems";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const navigate = useNavigate();
    const items = useSelector((store) => store.cart.items);
    const resData = useSelector((store) => store.cart.resData);
    const price = useSelector((store) => store.cart.price);
    // console.log(price);
    if (items.length === 0)
        return (
            <div className="flex flex-col items-center justify-center">
                <img src="emptycart.png" alt="" className="w-[600px] mt-6" />
                <button
                    onClick={() => navigate("/list")}
                    className="px-4 py-2 mt-4 text-white bg-green-700 rounded-lg hover:bg-green-800"
                >
                    Add items
                </button>
            </div>
        );

    return (
        <div className="flex flex-col items-center justify-center w-full p-4">
            <div className="p-6 bg-yellow-100 rounded-lg shadow-lg w-[800px]">
                <h2 className="mb-4 text-3xl font-bold text-center">
                    Your Cart
                </h2>
                <div className="grid grid-cols-1 gap-4">
                    <div className="flex gap-4 pb-4 border-b-2 border-yellow-300 border-solid">
                        <div className="">
                            <img
                                className="w-[100px] h-[100px] object-center object-cover rounded-md"
                                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.cloudinaryImageId}`}
                                alt="Restaurant Image"
                            />
                        </div>
                        <div className="flex items-center">
                            <h3 className="text-xl font-semibold">
                                {resData.name}
                            </h3>
                        </div>
                    </div>
                    <div className="pb-4 border-b-2 border-yellow-300 border-solid">
                        <h4 className="mb-2 text-lg font-semibold text-center">
                            Bill Details
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                            {items.map((item) => (
                                <div
                                    key={item.itemId}
                                    className="flex justify-between"
                                >
                                    <span className="font-medium">{`${item.itemData.name} x ${item.count}`}</span>
                                    <span className="font-medium">{`₹${
                                        (item.itemData.defaultPrice
                                            ? item.itemData.defaultPrice / 100
                                            : item.itemData.price / 100) *
                                        item.count
                                    }`}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-between pb-2">
                        <div className="font-semibold">Item Total</div>
                        <div className="font-semibold">₹{price}</div>
                    </div>
                    {resData.deliveryFee !== null &&
                        resData.deliveryFee !== undefined && (
                            <div className="flex justify-between">
                                <div className="font-semibold">
                                    Delivery fee
                                </div>
                                <div className="font-semibold">
                                    ₹{resData.deliveryFee / 100}
                                </div>
                            </div>
                        )}
                    <div className="flex justify-center">
                        <button className="px-6 py-3 font-semibold text-white bg-yellow-500 rounded-md">
                            Amount : ₹
                            {resData.deliveryFee !== null &&
                            resData.deliveryFee !== undefined
                                ? price + resData.deliveryFee / 100
                                : price}
                        </button>
                    </div>
                </div>
            </div>

            {items.map((item) => {
                return (
                    <div
                        key={item.itemData.id}
                        className="flex flex-col items-center justify-center w-full"
                    >
                        <AccordianItems
                            item={item.itemData}
                            resData={resData}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default Cart;

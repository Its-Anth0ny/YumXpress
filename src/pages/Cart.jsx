import { useSelector } from "react-redux";
import AccordianItems from "../components/AccordianItems";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const navigate = useNavigate();
    const items = useSelector((store) => store.cart.items);
    const resData = useSelector((store) => store.cart.resData);
    const price = useSelector((store) => store.cart.price);

    if (items.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[calc(100vh-143px)] px-4 py-2">
                <img
                    src="additems-removebg.png"
                    alt=""
                    className="max-w-[430px] w-full mt-2 max-lg:max-w-[400px]"
                />
                <p className="text-3xl font-semibold text-center max-md:text-2xl">
                    Cart Is Empty!
                </p>
                <button
                    onClick={() => navigate("/list")}
                    className="flex items-center justify-center px-4 py-2 mt-6 text-gray-700 bg-yellow-200 border border-yellow-600 rounded-lg hover:bg-yellow-300 hover:text-black max-md:text-sm max-md:px-3"
                >
                    Add items
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-start w-full min-h-[calc(100vh-143px)] p-8 max-md:p-2">
            <div className="p-6 bg-yellow-100 rounded-lg shadow-lg w-[800px] max-w-full max-md:p-4">
                <h2 className="mb-4 text-3xl font-bold text-center underline max-md:text-2xl underline-offset-2">
                    Your Cart
                </h2>
                <div className="grid grid-cols-1 gap-4">
                    <div className="flex gap-4 pb-4 border-b-2 border-yellow-300 border-solid">
                        <div className="flex-shrink-0">
                            <img
                                className="w-[100px] h-[100px] object-center object-cover rounded-md max-md:w-[80px] max-md:h-[80px]"
                                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.cloudinaryImageId}`}
                                alt="Restaurant"
                            />
                        </div>
                        <div className="flex items-center w-full overflow-hidden">
                            <h3 className="text-2xl font-semibold truncate max-md:text-xl">
                                {resData.name}
                            </h3>
                        </div>
                    </div>
                    <div className="pb-4 border-b-2 border-yellow-300 border-solid">
                        <h4 className="mb-2 text-lg font-semibold text-center underline underline-offset-1 max-md:text-base">
                            Bill Details
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                            {items.map((item) => (
                                <div
                                    key={item.itemId}
                                    className="grid w-full grid-cols-12 text-sm font-medium md:text-base"
                                >
                                    <span className="w-full col-span-8 truncate">{`${item.itemData.name}`}</span>
                                    <span className="col-span-1">{`x ${item.count}`}</span>
                                    <span className="col-span-3 text-right">{`₹${(
                                        (item.itemData.defaultPrice
                                            ? item.itemData.defaultPrice / 100
                                            : item.itemData.price / 100) *
                                        item.count
                                    ).toFixed(2)}`}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-between pb-2 text-sm md:text-base">
                        <div className="font-semibold">Item Total</div>
                        <div className="font-semibold">₹{price.toFixed(2)}</div>
                    </div>
                    {resData.deliveryFee !== null &&
                        resData.deliveryFee !== undefined && (
                            <div className="flex justify-between text-sm md:text-base">
                                <div className="font-semibold">
                                    Delivery fee
                                </div>
                                <div className="font-semibold">
                                    ₹{(resData.deliveryFee / 100).toFixed(2)}
                                </div>
                            </div>
                        )}
                    <div className="flex justify-center mt-4">
                        <button className="px-6 py-3 font-semibold text-white bg-yellow-500 rounded-md max-md:px-4 max-md:py-2">
                            Amount: ₹
                            {resData.deliveryFee !== null &&
                            resData.deliveryFee !== undefined
                                ? (price + resData.deliveryFee / 100).toFixed(2)
                                : price.toFixed(2)}
                        </button>
                    </div>
                </div>
            </div>

            {items.map((item) => (
                <div
                    key={item.itemData.id}
                    className="flex flex-col items-center justify-center w-full mt-4 max-md:mt-2"
                >
                    <AccordianItems item={item.itemData} resData={resData} />
                </div>
            ))}
        </div>
    );
};

export default Cart;

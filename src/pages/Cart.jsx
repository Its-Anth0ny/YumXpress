import { useSelector } from "react-redux";
import AccordianItems from "../components/AccordianItems";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const navigate = useNavigate();
    // const resId = useSelector((store) => store.cart.resId);
    const items = useSelector((store) => store.cart.items);
    const resData = useSelector((store) => store.cart.resData);
    // const price = useSelector((store) => store.cart.price);

    return items.length === 0 ? (
        <div className="flex flex-col items-center justify-center">
            <img src="emptycart.png" alt="" className="w-[600px] mt-6" />
            <button
                onClick={() => navigate("/list")}
                className="px-4 py-2 mt-4 text-white bg-green-700 rounded-lg hover:bg-green-800"
            >
                Add items
            </button>
        </div>
    ) : (
        <div className="flex items-center justify-center w-full p-4">
            {items.map((item) => {
                // console.log(item.itemData.id);
                <div key={item.itemData.id}>
                    {<AccordianItems data={item.itemData} resData={resData} />}
                </div>;
            })}
        </div>
    );
};

export default Cart;

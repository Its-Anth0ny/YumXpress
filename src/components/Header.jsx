import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { setFoodaiBoxOpen } from "../redux/foodaiSlice";
// import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    // const [inOutBtn, setInOutBtn] = useState("Login");
    // const checkOnline = useOnlineStatus();
    const dispatch = useDispatch();
    const curr = useLocation();
    const path = curr.pathname.split("/")[1];
    const handleClick = () => {
        dispatch(setFoodaiBoxOpen());
    };

    return (
        <div className="flex flex-col justify-center items-center pt-[15px] max-md:pt-[10px]">
            <button
                className="absolute px-3 py-2 border rounded-lg border-violet-500 right-5 top-4 bg-violet-400 hover:bg-violet-300 hover:text-slate-900 max-md:right-3 max-md:top-3 max-md:text-sm"
                onClick={() => handleClick()}
            >
                Food AI
            </button>
            {screen.width > 768 ? (
                <div className="flex justify-center w-full ">
                    <img className="h-[50px]" src={`/Logo3.png`} />
                </div>
            ) : (
                <div className="flex justify-start w-full ">
                    <img className="h-[44px] ml-3" src={`/logoname.png`} />
                </div>
            )}

            <div className="h-[1.5px] max-w-[800px] w-full max-mdx:max-w-[650px] max-md:max-w-full mt-[15px] max-md:mt-[12px]">
                <div className="h-full rounded-md bg-slate-200"></div>
            </div>
            <div className="max-w-[1110px] max-h-[61px] flex justify-center items-center mt-[10px] max-md:mt-[5px]">
                <ul className="flex justify-center space-x-4 font-medium text-slate-700 max-md:text-sm">
                    {/* <li className="onlineStatus">
                        Online Status : {checkOnline ? "🟢" : "🔴"}
                    </li> */}
                    {/* <div></div> */}

                    <Link
                        to="/"
                        className={`px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900 ${
                            path === "" || path === "list" ? "font-bold" : ""
                        }`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/cart"
                        className={`px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900 ${
                            path === "cart" ? "font-bold" : ""
                        }`}
                    >
                        Cart
                    </Link>
                    <Link
                        to="/contact"
                        className={`px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900 ${
                            path === "contact" ? "font-bold" : ""
                        }`}
                    >
                        Contact
                    </Link>
                    <Link
                        to="/about"
                        className={`px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900 ${
                            path === "about" ? "font-bold" : ""
                        }`}
                    >
                        About
                    </Link>
                </ul>
            </div>
            <div className="h-[1.5px] max-w-[800px] w-full max-mdx:max-w-[650px] max-md:max-w-full mt-[15px] max-md:mt-[5px]">
                <div className="h-full rounded-md bg-slate-200"></div>
            </div>
        </div>
    );
};

export default Header;

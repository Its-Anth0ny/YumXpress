import { Link, useLocation } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    // const [inOutBtn, setInOutBtn] = useState("Login");
    // const checkOnline = useOnlineStatus();
    const curr = useLocation();
    const path = curr.pathname.split("/")[1];

    return (
        <div className="flex flex-col justify-center items-center mt-[15px] max-md:mt-[10px]">
            <div className="w-[255px] max-md:w-[225px]">
                {/* logo color = #eab308 */}
                <img className="logo" src={`/Logo3.png`} />
            </div>
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
                    {/* <Link
                        to="/recipes"
                        className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900"
                    >
                        Recipes
                    </Link> */}
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
                    {/* <li>
                    <Link to="/">Home</Link>
                </li> */}

                    {/* <button
                        className="loginBtn"
                        onClick={() => {
                            inOutBtn === "Login"
                                ? setInOutBtn("Logout")
                                : setInOutBtn("Login");
                        }}
                    >
                        {inOutBtn}
                    </button> */}
                </ul>
            </div>
            <div className="h-[1.5px] max-w-[800px] w-full max-mdx:max-w-[650px] max-md:max-w-full mt-[15px] max-md:mt-[5px]">
                <div className="h-full rounded-md bg-slate-200"></div>
            </div>
        </div>
    );
};

export default Header;

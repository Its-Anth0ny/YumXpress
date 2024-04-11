// import { useState } from "react";
import logo from "../utils/yumxpress-high-resolution-logo-transparent.png";
import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    // const [inOutBtn, setInOutBtn] = useState("Login");
    // const checkOnline = useOnlineStatus();
    return (
        <div className="flex flex-col justify-center items-center pt-[25px]">
            <div className="w-[255px]">
                <img className="logo" src={logo} />
            </div>
            <div className="h-[1.5px] max-w-[800px] mt-[15px]">
                <div className="h-full w-[800px] bg-slate-200 rounded-md"></div>
            </div>
            <div className="max-w-[1110px] max-h-[61px] flex justify-center items-center mt-[10px]">
                <ul className="flex justify-center space-x-4 pl-3">
                    {/* <li className="onlineStatus">
                        Online Status : {checkOnline ? "🟢" : "🔴"}
                    </li> */}
                    {/* <div></div> */}

                    <li className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">
                        <Link to="/contact">Recipes</Link>
                    </li>
                    <li className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">
                        <Link to="/contact">Cart</Link>
                    </li>
                    <li className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">
                        <Link to="/about">About Us</Link>
                    </li>
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
            <div className="h-[1.5px] max-w-[800px] mt-[10px]">
                <div className="h-full w-[800px] bg-slate-200 rounded-md"></div>
            </div>
        </div>
    );
};

export default Header;

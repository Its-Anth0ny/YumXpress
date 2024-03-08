import { useState } from "react";
import logo from "../utils/yumxpress-high-resolution-logo-transparent.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    // const [inOutBtn, setInOutBtn] = useState("Login");
    const checkOnline = useOnlineStatus();
    return (
        <div className="header">
            <div className="logoContainer">
                <img className="logo" src={logo} />
            </div>
            <div className="navOptions">
                <ul>
                    <li className="onlineStatus">
                        {" "}
                        Online Status : {checkOnline ? "🟢" : "🔴"}
                    </li>
                    {/* <div></div> */}
                    <li className="home">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="contact">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="about">
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
        </div>
    );
};

export default Header;

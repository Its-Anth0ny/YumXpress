import { useState } from 'react';
import logo from '../utils/yumxpress-high-resolution-logo-transparent.png';

const Header = () => {

    const [inOutBtn, setInOutBtn] = useState("Login")

    return (<div className="header">
        <div className="logoContainer">
            <img className="logo" src={logo} />
        </div>
        <div className="navOptions">
            <ul>
                <li>Home</li>
                <li>Help</li>
                <li>Cart</li>
                <li>About Me</li>
                <button className="loginBtn"
                    onClick={()=>{
                        inOutBtn==="Login" ? setInOutBtn("Logout") : setInOutBtn("Login");
                    }}
                >
                    {inOutBtn}
                </button>
            </ul>
        </div>
    </div>)
}

export default Header;
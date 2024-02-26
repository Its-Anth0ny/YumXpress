import logo from '../utils/yumxpress-high-resolution-logo-transparent.png';

const Header = () => {
    return (<div className="header">
        <div className="logoContainer">
            <img className="logo" src={logo} />
        </div>
        <div className="navOptions">
            <ul>
                <li>Home</li>
                <li>Help</li>
                <li>Cart</li>
                <li>Login/Signup</li>
            </ul>
        </div>
    </div>)
}

export default Header;
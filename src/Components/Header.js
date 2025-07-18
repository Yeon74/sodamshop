import { FaBars } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";
import { PiUserCircleFill } from "react-icons/pi";

import { useNavigate } from "react-router-dom";

const Header = ({isOpen,setIsOpen}) => {
    const navigate = useNavigate();
    return (
        <div className="header">
            <div className="nav">
            <button className="header-bar" onClick={()=>{setIsOpen(!isOpen)}}><FaBars /></button>
            <h1>Sodam Shop</h1>
            {/* <img src='./image/head-logo.png' alt="로고 이미지"/> */}
            <div className="nav-icon">
            <button className="header-user"><PiUserCircleFill /></button>
            <button className="header-cart" onClick={()=>{navigate('/cart')}}><MdOutlineShoppingBag /></button>
            </div>
            </div>
            <div className="nav2" >
            <ul>
                <li>New</li>
                <li>Living</li>
                <li>Dinig</li>
                <li>Bedroom</li>
                <li>Decor</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
import React from "react"
import "./style.css";
import logo from "../../Assets/brand_logo.png"
const Header = () =>{
    return(
        <div className="navHeader">
            <div>
                <img src={logo} alt="nike-Logo"></img>
            </div>
            <div className="nav">
                <a href="/">MENU</a>
                <a href="/">LOCATION</a>
                <a href="/">ABOUT</a>
                <a href="/">CONTACT</a>
            </div>
            <div>
                <p className="Btn">login</p>
            </div>
        </div>
    )
}
export default Header
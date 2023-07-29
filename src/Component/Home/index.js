import React from "react";
import shoe from "../../Assets/shoe_image.png"
import "./style.css"
import flipkart from "../../Assets/flipkart.png"
import amazon from "../../Assets/amazon.png"

const HomeInfo = () =>{
    return(
        <div className="homeInfo">
            <div className="left-container">
                <div className="h1Div" >
                    <h1>YOUR FEET DESERVE THE BEST</h1>
                    <p className="description">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                </div>

                <div className="btns">
                    <p className="Btn">Shop Now</p>
                    <p className="Btnborder">category</p>
                </div>
                
                <p>Also Avilable on</p>
                
                <div className="shopimg">
                    <img src={amazon} alt="shop on amazon"></img>
                    <img className="flipkatImg" src={flipkart} alt="shop on flipkart"></img>
                </div>
            </div>
            
            
            <div className="right-container">
                <img src={shoe} alt="" />
            </div>
        </div>
    )
}

export default HomeInfo;
import "./css/Homepage.css";
import React from "react";
import Wheel from "../components/Wheel";

function Homepage() {

    return (
        <div>
            <h1 className="welcome">Adventure Park Home Page</h1>
            <Wheel/>
        </div>
    )
}

export default Homepage;
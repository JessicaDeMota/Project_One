import "./css/Homepage.css";
import React from "react";

function Homepage() {

    const text = document.querySelector(".text p");

    text.innerHTML = text.innerText
        .split("")
        .map(
            (char, i) =>
            `<span style="transform:rotate(${i * 5.8}deg)">${char}</span>`
        )
        .join("");
}

export default Homepage;
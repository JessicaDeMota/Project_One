import { useEffect } from 'react'
import "./css/Wheel.css";

function Wheel() {

    useEffect(() => {
        const text = document.querySelector(".text p");

        text.innerHTML = text.innerText
          .split("")
          .map(
            (char, i) => `<span style="transform:rotate(${i * 3.8}deg)">${char}</span>`
          )
          .join("");
    }, [])

    return (
        <div class="circle">
            <div class="text">
                <p>Welcome-To-Film-Adventures-Park-Where-The-Film-Adventure-Begins-On-Every-Ride-Film-Adventures- </p>
            </div>
        </div>
    )
}

export default Wheel
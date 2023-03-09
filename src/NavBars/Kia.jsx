import React from "react"
import STYLE from "./kia.module.css"

const Kia =()=>{
    return(
    <div className={STYLE.one}>
        <ul className={STYLE.first}>
            <li>
                <a href="">CarBuy</a>
            </li>
            <li>
                <a href="">owners</a>
            </li>
            <li>
                <a href="">VR Showroom</a>
            </li>
        </ul>
        <div className="imgpart">
        <img src="data:image/png;base64,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" alt="" />
        </div>
      <ul className={STYLE.sec}>
        <li>
            <a href="">New Kia</a>
        </li>
        <li>
            <a href="">
                KiaContent
            </a>
        </li>
        <li>
            <a href="">Discover kia</a>
        </li>
      </ul>
    </div>

    )
}
export default Kia 
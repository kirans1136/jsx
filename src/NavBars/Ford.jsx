import React from "react";
import STYLE from "./ford.module.css";
const Ford =()=>{
    return(
        <div className={STYLE.div}>
            <img className={STYLE.img} src="https://www.india.ford.com/content/dam/Ford/website-assets/ap/in/header/New%20Logo.png"  alt="" />
            <ul className={STYLE.ul}>
                <li>
                    <a className={STYLE.a1} href="">Committed To Serve</a>
                </li>
                <li>
                <a className={STYLE.a2} href="">Proud To Own</a>
                </li>
                <li>
                    <a className={STYLE.a3} href="">Book Service</a>
                </li>
            </ul>
        </div>
    )
}
export default Ford
import React from "react";
import STYLE from "./jaguar.module.css"
const Jaguar =()=>{
    return(
        <div className={STYLE.jagDiv}>
            <img className={STYLE.jagImg} src="https://dxnav.jaguar.com/current/images/logo-jaguar-18c6841980f83cc9fed3e3539644c52c.png" alt="" />
            <ul className={STYLE.jagUl}>
                <li className={STYLE.jagLi}>
                    <a className={STYLE.jagA} href="">VEHICLES</a>
                    <a className={STYLE.jagB} href="">PURCHASE</a>
                    <a className={STYLE.jagC} href="">OWNERS</a>
                    <a className={STYLE.jagD} href="">EXPLORE</a>
                </li>
                

            </ul>
        </div>
    )

}
export default Jaguar
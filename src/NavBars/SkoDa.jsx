import React from "react";
import STYLE from "./skoDa.module.css"
const SkoDa =()=>{
    return(
    <div className={STYLE.SDiv}>
        <img className={STYLE.Simg} src="https://www.nicepng.com/png/detail/20-203910_skoda-logo-logo-psd-png-format-car-logos.png" alt="" />
        <ul className={STYLE.sul}>
            <li className={STYLE.Sli}>
               <a className={STYLE.Sa} href="">Models</a>
               <a className={STYLE.Sb} href="">Shopping</a>
               <a className={STYLE.Sc} href="">Discover SkoDa</a>
               <a className={STYLE.Sd} href="">Owners Support</a>
               <a className={STYLE.Se} href="">Company</a>
            </li>
        </ul>

    </div>
    )

}
export default SkoDa
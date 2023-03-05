import React from "react";
import STYLE from "./tata.module.css"
const Tata =()=>{
    return(
        <div className={STYLE.TDiv}>
            <img id={STYLE.TImg} src="https://www.tatamotors.com/wp-content/themes/tatamotors_2019/images/tata_motors_logo.png" alt="" />
            <ul className={STYLE.TUl}>
                <li className={STYLE.Tli}>
                    <a className={STYLE.Ta} href="">ABOUT US</a>
                    <a className={STYLE.Tb} href="">PRODUCTS</a>
                    <a className={STYLE.Tc} href="">MARKETS</a>
                    <a className={STYLE.Td} href="">CRS</a>
                    <a className={STYLE.Te} href="">INVESTORS</a>
                    <a className={STYLE.Tf} href="">MEDIA</a>
                    <a className={STYLE.Tg} href="">BLOGS</a>
                    <a className={STYLE.Th} href="">CAREERS</a>
                    <a className={STYLE.Ti} href="">CONTACT US</a>
                </li>
            </ul>
        <img id={STYLE.TIMg} src="https://www.tatamotors.com/wp-content/themes/tatamotors_2019/images/tata_logo.png" alt="" />
        </div>

    )
}
export default Tata
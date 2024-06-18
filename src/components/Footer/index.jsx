import { user } from "../../data/user"
import wpp from "../../assets/whatsapp-icon.png"
import lkdn from "../../assets/linkedin-icon.png"
import gthb from "../../assets/github-icon.png"
import style from "./style.module.css"

export function Footer () {

    return (
        <footer className={`${style.container} center`} id="contact" >
            <div className={style.content}>
                <div className={style.contact}>
                    <h1 className="title1">
                        Contato
                    </h1>
                    <div className={style.redirect}>
                        <a href="https://wa.me/5545999999999" target="_blank">
                            <img src={wpp} alt="WhatsApp" />
                        </a>
                        <a href="https://www.linkedin.com/" target="_blank">
                            <img src={lkdn} alt="LinkedIn" />
                        </a>
                        <a href="https://github.com/" target="_blank">
                            <img src={gthb} alt="GitHub" />
                        </a>
                    </div>
                </div>
                <p className="paragraph">
                    Todos os direitos reservados - {user}
                </p>
            </div>
        </footer>
    )
}
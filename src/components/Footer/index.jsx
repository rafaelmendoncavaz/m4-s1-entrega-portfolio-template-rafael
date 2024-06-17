import { user } from "../../data/user";
import wpp from '../../assets/whatsapp-icon.png'
import lkdn from '../../assets/linkedin-icon.png'
import gthb from '../../assets/github-icon.png'
import style from './style.module.css'

export function Footer () {

    return (
        <footer className={`${style.container} center`}>
            <div className={style.contact}>
                <h1 className="title1">
                    Contato
                </h1>
                <div className={style.redirect}>
                    <a href="#">
                        <img src={wpp} alt="WhatsApp" />
                    </a>
                    <a href="#">
                        <img src={lkdn} alt="LinkedIn" />
                    </a>
                    <a href="#">
                        <img src={gthb} alt="GitHub" />
                    </a>
                </div>
            </div>
            <p className="paragraph">
                Todos os direitos reservados - {user}
            </p>
        </footer>
    )
}
import style from './style.module.css'

export function Header() {
    
    return(
        <header className={`${style.container} center`}>
            <h1 className="title3">
                Portfólio
            </h1>
            <div className={style.menu}>
                <a href="#">Sobre</a>
                <a href="#">Stack</a>
                <a href="#">Projetos</a>
            </div>
            <button className="btn">
                Contato
            </button>
        </header>
    )
}
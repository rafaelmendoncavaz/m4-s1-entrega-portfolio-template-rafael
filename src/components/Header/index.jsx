import style from './style.module.css'

export function Header() {
    
    return(
        <header className={`${style.container} center`}>
            <h1 className="title3">
                Portfólio
            </h1>
            <div className={style.menu}>
                <a href="#about">Sobre</a>
                <a href="#stacks">Stack</a>
                <a href="#projects">Projetos</a>
            </div>
            <a href="#contact">
                <button className="btn">
                    Contato
                </button>
            </a>
        </header>
    )
}
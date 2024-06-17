import bannerImage from '../../assets/banner-img.png'
import { username } from '../../data/user'
import style from './style.module.css'

export function BannerSection() {

    return(
        <section className={`${style.container} center`}>
            <div>
                <h2 className='label'>
                    {username}
                </h2>
                <h1 className='title1'>
                    Bem vindo ao meu portfólio
                </h1>
                <p className='paragraph'>
                    Uma frase interessante sobre mim
                </p>
                <button className='btn'>
                    Saiba mais
                </button>
            </div>
            <img src={bannerImage} alt="Imagem do banner" />
        </section>
    )
}
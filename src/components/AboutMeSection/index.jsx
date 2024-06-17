import style from './style.module.css'

export function AboutMeSection() {

    return(
        <section className={`${style.container} center`} id='about' >
            <h1 className='title1'>
                Sobre mim
            </h1>
            <p className='paragraph'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam nemo ex odit molestiae, distinctio in corporis tenetur mollitia quibusdam repellat assumenda provident aperiam laboriosam voluptatem neque! Nihil quas repellendus sequi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident dolores atque cupiditate doloribus voluptas adipisci quaerat! Assumenda non excepturi molestiae neque iusto deserunt veritatis corporis aut. Voluptatum illum placeat eius.
            </p>
        </section>
    )
}